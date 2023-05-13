
export const formatBodyParts = (array) => {
    let result = ""
    // console.log()
    // console.log(array)
    array.map( item => {
      result += item.charAt(0).toUpperCase() + item.slice(1) + "/"
  })
  return result.slice(0,-1)
}
