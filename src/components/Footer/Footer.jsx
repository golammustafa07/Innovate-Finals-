import React from 'react'
import footerlogo from "../../assets/images/footerlogo.png"
import footer from "../../assets/images/footer.png"
import Container from '../Layout/Container'

const Footer = () => {
    return (
        <div className='relative'>
            <img className='absolute bottom-40 left-0 -z-10' src={footer} alt="" />
            <Container classname="pt-[140px] pb-[57px]">
                <div className='flex'>
                    <div>
                        <img src={footerlogo} alt="" />
                        <div className='mt-11'>
                            <p className='font-nun text-[18px] leading-[180%] w-[449px] text-[#6c7d93]'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                        </div>
                    </div>

                    <div className='ml-[93px]'>
                        <h3 className='font-sans font-semibold text-[24px] text-[#413f45] leading-[140%]'>Features</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-12'>Home</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-[30px]'>About</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-[30px]'>Benefit</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-[30px]'>Pricing</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-[30px]'>Blog</h3>
                    </div>

                    <div className='ml-[100px] mr-[99px]'>
                        <h3 className='font-sans font-semibold text-[24px] text-[#413f45] leading-[140%]'>Products</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-12'>Task Management</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-[30px]'>Company Growth</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-[30px]'>Time Tracking</h3>
                    </div>

                    <div>
                        <h3 className='font-sans font-semibold text-[24px] text-[#413f45] leading-[140%]'>Support</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-12'>Customer Service</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-[30px]'>Accessibility</h3>
                        <h3 className='font-nun font-semibold text-[20px] leading-[120%] text-[#6c7d93] pt-[30px]'>Contact Us</h3>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='mt-[189px]'>
                        <p className='font-nun text-[18px] leading-[180%] text-[#6c7d93]'>@2024 Innovate.All rights reserved.</p>
                    </div>
                    <div className='flex items-center mt-[185px] gap-x-[60px]'>
                        <p className='font-nun text-[18px] leading-[180%] text-[#6c7d93]'>Privacy Policy</p>
                        <p className='font-nun text-[18px] leading-[180%] text-[#6c7d93]'>Terms & Condition</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer