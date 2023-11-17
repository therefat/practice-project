import React, { useEffect, useState } from "react";
// import Layout from "../layouts/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
// import { Layout } from "phosphor-react";

const ProductDetails=()=>{
    const [productDetails,setProductDetails]=useState() 

    const {slug}=useParams()

    useEffect(()=>{
        axios.get('https://uol-v-2.hostprohub.com/api/get-product/'+ slug)

        .then((response)=>{
            console.log(response)
                setProductDetails(response.data.data) 
        })
        .catch((error)=>{
         console.log(error)
        })

       
    },[])
console.log(productDetails)
    return(
        <div>
            <Layout>
            {productDetails && (
                <div>
                    <img src={productDetails.image.small} alt="" />
                </div>
            )

            }
            </Layout>

        </div>
    )
    
}

export default ProductDetails