import React,{useState,useEffect} from 'react'
import axios from 'axios'
const useFetch = (url="") => {

const [apiData, setApiData] = useState()

useEffect(() => {
  
axios.get(url)
    .then(res=>{
        setApiData(res.data)
    })
    .catch(err=>console.log("Error with data API : "+err))
  
}, [])


  return (apiData)
}

export default useFetch