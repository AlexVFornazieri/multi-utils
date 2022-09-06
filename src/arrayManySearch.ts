export default function (prop:string, value:any, array:any[], returnIndex = false) {
  const items = []
  for (let i = 0; i < array.length; i++) {
    if (array[i][prop] === value) {
      items.push(returnIndex ? i : array[i])
    }
  }
  return items
}
