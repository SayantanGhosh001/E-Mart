const get = async (endPoint) => {
    let response = await fetch("https://fakestoreapi.com/" + endPoint)
    let data = await response.json()
    return data
}
export default get