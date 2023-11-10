import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Blog() {
  const [blogs, setBlogs] = useState();
  useEffect(()=>{
    
    axios.get('https://uol-v-2.hostprohub.com/api/blogs')
    .then(response => {
        console.log(response.data);
        setBlogs(response.data);
    })

},[])
 
  return (
    <Layout>
        <div className='mt-5'>

            <h1 className=' text-2xl'>
                Blog
            </h1>
            <div className='grid grid-cols-3 gap-4'>
              {
                blogs && blogs.map((blog) => {
                  return <Link to={"/" + blog.slug}>
                  <div class="max-w-lg mx-auto">
                      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                         
                              {/* <img class="" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""> */}
                          <img src={blog.image} className='rounded-t-lg' alt="" />
                          <div class="p-5">
                             
                                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{blog.title}</h5>
                              
                              <p className="font-normal text-gray-700 mb-3">{blog.sub_title.slice(0,150)}</p>
                              <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                  Read more
                              </Link>
                          </div>
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

export default Blog