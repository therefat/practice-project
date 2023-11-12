import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductBuy() {
    const {slug} = useParams()
    const [productbuy,setProductBuy] = useState();
    useEffect(() => {
        axios.get('https://uol-v-2.hostprohub.com/api/get-product/' + slug)
        .then((resonse) => {
            // console.log(resonse)
            setProductBuy(resonse.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
      },[]) 
      console.log(productbuy)
  return (
    <Layout>
        <div className=' bg-gray-200 '> 
        <div className='p-4 items-center'>
            <p> {productbuy?.category}  {'>'} {productbuy?.name} </p>
        </div>
            <div className='grid grid-cols-3  bg-white shadow-lg  '>
                <div>
                    
                    <img src={productbuy?.image.small}/> 
                </div>
                <div>
                    <div className="title">{productbuy?.name}</div>
                    <div className="price">
                        <span>{productbuy?.formatted_final_product_price}</span> 
                        <br />
                        <span>{productbuy?.formatted_regular_price}</span> <span> {productbuy?.discount}</span>
                    </div>
                </div>
                <div>box3</div>
            </div>
        </div>
    </Layout>
  )
}

export default ProductBuy