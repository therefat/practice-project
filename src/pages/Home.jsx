import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { Button } from 'keep-react'
// import Slider from 'react-slick'
import Slider from "react-slick";
import axios from 'axios'

function Home() {
  const[settings, setSettings]= useState();
  useEffect(()=>{
    axios('https://uol-v-2.hostprohub.com/api/settings?platform=web')
    .then(response=>{
     setSettings(response.data)
    })
    .catch((error)=>{
     console.log(error)
    })
},[])



var slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

var slickCategorySettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
autoplaySpeed: 2700,
responsive: [
  {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
],
};
  return (
    <Layout>
        <h1>Test</h1>
       
       <h1>kjfdklfj</h1>
       <div className="sliderss">
       <Slider {...slickSettings}>
            {
             settings?.hompageBanner.map((banner,index)=>{
                    return(
                  
                    <div>
                    <img src={banner.banner_image} className="h-[300px] w-[100%]" />
                </div>
                    )

                })
            }

         </Slider>
         <Slider {...slickCategorySettings}>
            {
               settings?.categories.map((category,index)=>{
                return(
                    <>
                   
                    <div>
                                <div className="p-10 border mx-4 flex items-center justify-center">
                                <div className="text-center">
                                <img src={category.image} className="w-[80px] h-[80px]" />
                           
                                </div>
                            </div>
                    </div>
                    </>
                )
               }) 
            }

         </Slider>
       </div>

    </Layout>
  )
}

export default Home