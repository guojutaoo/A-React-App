import axios from "axios";
import {toast} from "react-toastify";

axios.interceptors.response.use(null, error=>{
    const expectedError = error.response && (400<=error.response.status<=500)
    if(expectedError){
      console.log("Logging error", error)
      toast.error("An unexpected error occours!")
    }
    return Promise.reject(error)   //transfer to catch block
  })

export default{
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
    get: axios.get
}