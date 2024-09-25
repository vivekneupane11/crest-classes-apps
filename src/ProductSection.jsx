import React from 'react'
import { useFetch } from './useFetch'

export default function ProductSection() {
    const [products,loading,error] = useFetch()
  return (
    <div>
        {loading && <p>loading</p>}
        {error && <p>error</p>}
        {
          products && products.length >0  &&   <p>{JSON.stringify(products)}</p>
        }
    </div>
  )
}
