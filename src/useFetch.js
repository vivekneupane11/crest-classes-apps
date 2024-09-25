import { useEffect, useState } from "react"

export const useFetch = ()=>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
  
    useEffect(()=>{
      //count is already mounted
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
      .catch(err=>setError(true))
      .finally(()=>setLoading(false))
    },[])
  
    return [products,loading,error]
  }