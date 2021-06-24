module.exports = (params,arr)=>{
  // 遍历对象上是数组的选项
  const param = {}
  arr.forEach((item)=>{
    if(params[item]){
      param[item] = params[item]
    }
  })
  return param
}