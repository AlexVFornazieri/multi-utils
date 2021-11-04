export default function (prop, value, array, returnIndex) {
  let obj
  for (let i = 0; i < array.length; i++) {
    if (array[i][prop] === value) {
      obj = array[i]
      break
    }
  }
  return returnIndex ? array.indexOf(obj) : obj
}