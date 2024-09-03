import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import blog from "../../assets/images/blog.png"
import { blogCardData } from '../../data/blogCardData'
import BlogCard from '../../common/BlogCard'

const Blogs = () => {
    const [blogdata,setblogdata] = useState([])
    useEffect(()=> {
        setblogdata(blogCardData)
    },[])
  return (
    
    <div className='bg-[#F2F7FD] relative w-full z-10'>
        <Container classname="pt-20 pb-[118px] ">
            <div className='text-center'>
                <img className='mx-auto' src={blog} alt="" />
                <h3 className='font-sans text-[48px] leading-[56px] font-extrabold text-[#413f45] pt-5 pb-[25px]'>Our Latest Blog</h3>
                <p className='font-robo text-[18ox] leading-[30px] text-[#6c7d93] text-center w-[412px] mx-auto'>We provide digital experience services to startups and small businesses</p>
            </div>

            <div className='flex gap-x-[30px] mt-[52px]'>
                {
                    blogdata.map((item)=>(
                        <BlogCard item ={item}/>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default Blogs