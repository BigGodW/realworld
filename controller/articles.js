const { Result } = require("express-validator");
const { Article, User } = require("../model");

// 获取文章 articles
module.exports.articles = async (req, res, next) => {
  try {
    const articles = await Article.findAll({
      where: {},
      include: User,
    });
    res.send(articles);
  } catch (err) {
    next(err);
  }
};
// 获取指定文章
module.exports.article = async (req, res, next) => {
  try {
    const articleId = req.params.id;
    const article = await Article.findByPk(Number.parseInt(articleId));
    if (!article) {
      return res.status(400).json({ mess: "文章不存在" });
    }
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ mess: "server 错误" });
  }
};

// 文章订阅 feed
module.exports.feed = async (req, res, next) => {
  try {
    res.send("文章订阅");
  } catch (err) {
    next(err);
  }
};

// 创建文章 articleAdd
module.exports.articleAdd = async (req, res, next) => {
  try {
    const article = await req.user.createArticle(req.body);
    res.send(article);
  } catch (err) {
    next(err);
  }
};
// 更新文章 articleUpdate
module.exports.articleUpate = async (req, res, next) => {
  try {
    const ID = Number.parseInt(req.params.id);
    console.log(ID);
    const article = await Article.findByPk(ID);
    if (!article) {
      return res.status(404).json({ mess: "文章不存在 更新失败" });
    }
    if (article.userId == req.user.id) {
      const result = await Article.update(req.body, {
        where: { id: ID },
      });
      return res.send("更新成功");
    }
    res.status(403).json({ mess: "无修改权限" });

    res.send(result);
  } catch (err) {
    next(err);
  }
};
// 删除文章 articleRemove
module.exports.articleRemove = async (req, res, next) => {
  try {
    const ID = Number.parseInt(req.params.id);
    console.log(ID);
    const article = await Article.findByPk(ID);
    if (!article) {
      return res.status(404).json({ mess: "文章不存在 删除失败" });
    }
    if (article.userId == req.user.id) {
      await article.destroy();
      return res.send("删除成功");
    }
    res.status(403).json({mess:'无删除权限'})
  } catch (err) {
    next(err);
  }
};
// 添加评论 comment
module.exports.comment = async (req, res, next) => {
  try {
    res.send("添加评论");
  } catch (err) {
    next(err);
  }
};
// 获取评论 comments
module.exports.comments = async (req, res, next) => {
  try {
    res.send("获取评论");
  } catch (err) {
    next(err);
  }
};
// 删除评论 commentRemove
module.exports.commentRemove = async (req, res, next) => {
  try {
    res.send("删除评论");
  } catch (err) {
    next(err);
  }
};
// 文章收藏 favorite
module.exports.favorite = async (req, res, next) => {
  try {
    res.send("文章收藏");
  } catch (err) {
    next(err);
  }
};
// 取消文章关注 favoriteRemove
module.exports.favoriteRemove = async (req, res, next) => {
  try {
    res.send("取消文章关注");
  } catch (err) {
    next(err);
  }
};
