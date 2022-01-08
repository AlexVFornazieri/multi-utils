export default function (prop:string, value:any, array:any[], returnIndex = false) {
  let obj
  for (let i = 0; i < array.length; i++) {
    if (array[i][prop] === value) {
      obj = array[i]
      break
    }
  }
  return returnIndex ? array.indexOf(obj) : obj
}
