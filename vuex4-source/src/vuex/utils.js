// 获取对象的属性和值
export function foreach(obj, cb) {
  Object.keys(obj).forEach(item => {
    cb(item, obj[item])
  })
}