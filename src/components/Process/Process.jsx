import React from 'react'
import processlogo from "../../assets/images/processlogo.png"
import imgg from "../../assets/images/imgg.png"
import imggg from "../../assets/images/imggg.png"
import imgggg from "../../assets/images/imgggg.png"
import lgfour from "../../assets/images/lgfour.png"
import Container from '../Layout/Container'

const Process = () => {
    return (
        <div className='relative'>
            <img className='absolute -z-10' src={lgfour} alt="" />
            <Container classname="pt-20 pb-[100px]">
                <div className='text-center'>
                    <img className='mx-auto' src={processlogo} alt="" />
                    <h3 className='font-sans font-extrabold text-[48px] leading-[65px] text-[#192239] pt-4 pb-5'>Our creative process.</h3>
                    <p className='font-robo text-[18px] leading-[30px] text-[#6c7d93] w-[412px] mx-auto text-center'>We provide digital experience services to startups and small businesses.</p>
                </div>

                <div className='flex items-center gap-x-[133px] mt-[52px]'>
                    <div className='pt-6 pl-6 pb-5 pr-[85px] bg-[#EBF7E9] rounded-lg w-[465px] h-[207px]'>
                        <button className='font-sans font-bold text-[18px] leading-6 text-[#202427] bg-primary/35 py-1 px-4 rounded-full'>Step-1</button>
                        <h3 className='font-sans font-semibold text-[30px] leading-8 text-[#202427] pt-[18px] pb-5'>Global SEO Research</h3>
                        <p className='font-robo text-[18px] leading-[30px] text-[#6c7d93] w-[356px]'>Practical tools and features make it easier to build and manage your site.</p>
                    </div>
                    <img src={imgg} alt="" />
                </div>

                <div className='flex items-center gap-x-[130px]'>
                    <img src={imggg} alt="" />  
                    <div className='bg-[#D8EAFF] w-[465px] h-[207px] rounded-lg pt-6 pl-6 pb-5 pr-[85px]'>
                        <button className='font-sans font-bold text-[18px] leading-6 text-[#202427] bg-primary/35 py-1 px-4 rounded-full'>Step-2</button>
                        <h3 className='font-sans font-semibold text-[30px] leading-8 text-[#202427] pt-[18px] pb-5'>Social media integration</h3>
                        <p className='font-robo text-[18px] leading-[30px] text-[#6c7d93] w-[356px]'>Practical tools and features make it easier to build and manage your site.</p>
                    </div>
                </div>

                <div className='flex items-center gap-x-[138px]'>
                    <div className='pt-6 pl-6 pb-5  bg-[#fbf1ec] rounded-lg w-[465px] h-[207px]'>
                        <button className='font-sans font-bold text-[18px] leading-6 text-[#202427] bg-primary/35 py-1 px-4 rounded-full'>Step-3</button>
                        <h3 className='font-sans font-semibold text-[30px] leading-8 text-[#202427] pt-[18px] pb-5'>Launching the Application</h3>
                        <p className='font-robo text-[18px] leading-[30px] text-[#6c7d93] w-[356px]'>Practical tools and features make it easier to build and manage your site.</p>
                    </div>
                    <img src={imgggg} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Process