import React from 'react'
import bannerlogo from "../../assets/images/bannerlogo.png"
import elements from "../../assets/images/elements.png"
import img from "../../assets/images/img.png"
import lg from "../../assets/images/lg.png"
import one from "../../assets/images/one.png"
import two from "../../assets/images/two.png"
import lgone from "../../assets/images/lgone.png"
import lgtwo from "../../assets/images/lgtwo.png"
import facebook from "../../assets/images/facebook.png"
import insta from "../../assets/images/insta.png"
import whatsapp from "../../assets/images/whatsapp.png"
import twitter from "../../assets/images/twitter.png"
import Container from '../Layout/Container'


const Banner = () => {
  return (
    <div className=''>
      <img className='absolute -z-10 w-full top-0' src={elements} alt="" />
      <img className='absolute top-[170px] left-[81px]' src={img} alt="" />
      <img className='absolute top-[420px] right-[338px]' src={one} alt="" />
      <img className='absolute top-[150px] right-0 -z-10' src={two} alt="" />
      <img className='absolute -z-10' src={lg} alt="" />
      <img className='absolute -z-10' src={lgone} alt="" />
      <img className='absolute -z-10 top-40 right-0' src={lgtwo} alt="" />
      <img className='absolute -z-10 bottom-[110px] left-[60px]' src={twitter} alt="" />
      <img className='absolute -z-10 bottom-[60px] right-[90px]' src={whatsapp} alt="" />
      <img className='absolute -z-10 top-[250px] right-[600px]' src={facebook} alt="" />
      <Container classname="pt-32 pb-[207px]">
        <div>
          <img src={bannerlogo} alt="" />
          <h2 className='w-[686px] font-sans font-extrabold text-[72px] leading-[98px] text-[#192239] pt-5'>We Are Digital <span className='text-primary'>Marketing</span> Agency</h2>
          <p className='font-pap text-[20px] leading-9 text-[#6C7D93]  w-[571px]'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
          <div className='flex mt-8'>
            <button className='bg-primary text-white py-5 px-10 rounded-full font-sans font-bold text-[20px] leading-6'>Get Free Quoto</button>
            <img className='ml-[385px]' src={insta} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner