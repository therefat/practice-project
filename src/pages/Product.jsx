import axios from 'axios'
import '../assets/css/product/Product.css'

import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'

function Product() {
    const [product,setProduct] = useState()
  useEffect(() => {
    axios.get('https://uol-v-2.hostprohub.com/api/get-products?platform=web')
    .then((resonse) => {
        // console.log(resonse)
        setProduct(resonse.data.data.data)
    })
    .catch((err) => {
        console.log(err)
    })
  },[]) 
  return (
    <Layout> 
        
         <div>
        <h1>Product</h1>
       <div className='grid grid-cols-3 gap-11 mt-4 '> 
       {
            product && product.map(products => {
                console.log(products)
                return <Link to={'/product/' + products.slug}>
                    <div className='w-80   bg-white shadow-md'>
                    
                    <div className='bg-white shadow-md border border-gray-200 rounded-lg'>
                    <img className='w-80 h-72' src={products.image.medium} alt="" />
                    </div>
                    <div>
                    <h1>{products.name}</h1> 
                    <h1>{products.formatted_final_product_price}</h1>
                    <p> <span className='formatted_regular_price'>{products.formatted_regular_price}</span> <span>-{products.discount}</span> </p>
                    </div>
                    <div className="btn flex flex-row pb-4 justify-around">
                        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'>Add To Cart</button>
                        <a className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center' href="">Buy Now</a>
                    </div>
                </div>
                </Link>
            })
        }
       </div>
    </div>
    </Layout>
  )
}

export default Product