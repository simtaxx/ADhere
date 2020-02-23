import Axios from 'axios'

const AxiosGet = async (url, params) => {
  const response = await Axios.get( url, params )
  console.log(response)
  return response
}
/* 
const AxiosPost = async (url, params) => {
  await Axios.post( url, params )
}
 */
export default AxiosGet