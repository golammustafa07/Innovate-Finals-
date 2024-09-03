import React from 'react'
import lgthree from "../../assets/images/lgthree.png"
import imgone from "../../assets/images/imgone.png"
import wl from "../../assets/images/wl.png"
import partnerlogo from "../../assets/images/partnerlogo.png"
import Container from '../Layout/Container'

const WhoWeAre = () => {
  return (
    <div>
        <img className='absolute top-[1750px] left-0 -z-10' src={lgthree} alt="" />
        <Container classname="pt-[100px]">
            <div className='flex gap-x-[84px]'>
                <div>
                    <img src={imgone} alt="" />
                </div>

                <div>
                    <img className='ml-8' src={wl} alt="" />
                    <h3 className='font-sans font-extrabold text-[48px] leading-[65px] tracking-[0.5px] text-[#192239] pl-8'>Who We Are</h3>
                    <p className='font-pap text-[18px] leading-[30px] text-[#6c7d93] w-[442px] pl-8 pt-[15px]'>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
                    <p className='font-pap text-[12px] leading-[17px] text-[#6c7d93] pl-8'>Join the 10.000+ Companys Trusting </p>
                    <img src={partnerlogo} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default WhoWeAre