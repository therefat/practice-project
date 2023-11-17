
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../layout/Layout'
import axios from 'axios'
import HTMLReactParser from 'html-react-parser'

function BlogDetail() {
    const {slug} = useParams()
    const [blog,setBlogs] = useState()
    useEffect(()=>{
    
        axios.get('https://uol-v-2.hostprohub.com/api/blog/' + slug )
        .then(response => {
           
            setBlogs(response.data.data);
        })
    
    },[])
    console.log(blog)
  return (
    <Layout> 
      <h1>kdfjdsk</h1>
        {
          blog && (
          <div>
              <div>BlogDetail {slug} </div>
        <h1 className='text-xl'>{blog.title}</h1>
        <img className='w-55' src={blog.image} alt="" />
        {/* <div>{HTMLReactParser(blog.description)}</div> */}
          </div>
          )
        }
    </Layout>
  )
}

export default BlogDetail