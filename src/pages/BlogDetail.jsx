
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../layout/Layout'
import axios from 'axios'

function BlogDetail() {
    const {slug} = useParams()
    const [blog,setBlogs] = useState()
    useEffect(()=>{
    
        axios.get(`https://uol-v-2.hostprohub.com/api/blog/${slug}`)
        .then(response => {
           
            setBlogs(response.data.data);
        })
    
    },[])
    console.log(blog)
  return (
    <Layout> 
        <div>BlogDetail {slug} </div>
        <h1>{blog?.id}</h1>
        <img src={blog?.image} alt="" />
    </Layout>
  )
}

export default BlogDetail