import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

const BlogCard = ({ item }) => {
    console.log(item);
    const id = data.id
    const [bgcolor,setbgcolor] = useState("")
    useEffect(()=>{
        setbgcolor(item.backgroundcolor)
    },[])

    return (
        <div className={`md:w-[370px] border-b-[#6c7d93]/20 shadow-lg md:px-0 w-auto outline-none rounded-lg ${id == item.id ? bgcolor : ''}`}>
            <img className='w-[369px]' src={item.image} alt="" />
            <div className='py-[30px] pl-[30px] pr-[90px]'>
                <h3 className='font-sans font-medium text-[24px] leading-8 w-[260px] whitespace-pre-line text-[#413f45]'>{item.title}</h3>
                <p className='font-nun text-[18px] leading-6 tracking-[0.5px] text-[#474747] whitespace-pre-line pt-4 pb-[30px]'>{item.description}</p>
                <button className='font-sans font-bold text-[18px] leading-6 text-[#202427] bg-primary/35 py-1 px-4 rounded-full'>Read More</button>
            </div>
        </div>
    )
}

export default BlogCard