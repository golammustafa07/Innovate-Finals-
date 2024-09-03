import React from 'react'
import showcase from "../../assets/images/showcase.png"
import imgtwo from "../../assets/images/imgtwo.png"
import imgthree from "../../assets/images/imgthree.png"
import imgfour from "../../assets/images/imgfour.png"
import imgfive from "../../assets/images/imgfive.png"
import imgsix from "../../assets/images/imgsix.png"
import imgseven from "../../assets/images/imgseven.png"
import showcaseimg from "../../assets/images/showcaseimg.png"
import showcaseimgone from "../../assets/images/showcaseimgone.png"
import Container from '../Layout/Container'

const WorKShowcase = () => {
    return (
        <div>
            <img className='absolute -z-10 top-[2600px] right-0' src={showcaseimgone} alt="" />
            <Container classname="pt-24 pb-[100px]">
                <img className='absolute -z-10 top-[2550px]' src={showcaseimg} alt="" />
                <div className='text-center'>
                    <img className='mx-auto' src={showcase} alt="" />
                    <h3 className='font-sans font-extrabold text-[48px] leading-[65px] tracking-[0.5px] text-[#192239]'>Work Showcase</h3>
                </div>
                <div className='flex gap-x-10 items-center mt-[47px]'>
                    <p className='font-sans font-semibold text-[24px] leading-8 tracking-[0.5px] text-primary'>All</p>
                    <p className='font-sans font-semibold text-[24px] leading-8 tracking-[0.5px] text-[#6c7d93] hover:text-primary cursor-pointer'>Digital Mkt</p>
                    <p className='font-sans font-semibold text-[24px] leading-8 tracking-[0.5px] text-[#6c7d93] hover:text-primary cursor-pointer'>Branding</p>
                    <p className='font-sans font-semibold text-[24px] leading-8 tracking-[0.5px] text-[#6c7d93] hover:text-primary cursor-pointer'>Content Mkt</p>
                    <p className='font-sans font-semibold text-[24px] leading-8 tracking-[0.5px] text-[#6c7d93] hover:text-primary cursor-pointer'>Social Media Mkt</p>
                </div>
                <div className='mt-[52px] flex'>
                    <img src={imgtwo} alt="" />
                    <img className='ml-[30px] mr-[33px]' src={imgthree} alt="" />
                    <img src={imgfour} alt="" />
                </div>
                <div className='flex gap-x-[30px] mt-[30px]'>
                    <img src={imgfive} alt="" />
                    <img src={imgsix} alt="" />
                    <img src={imgseven} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default WorKShowcase