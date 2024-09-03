import React from 'react'
import nav from "../../assets/images/nav.png"
import arrow from "../../assets/images/arrow.svg"
import Container from '../Layout/Container'

const Navbar = () => {
    return (
        <div className='relative '>
            <Container classname="pt-3.5">
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={nav} alt="" />
                    </div>
                    <div className='flex items-center gap-x-28'>
                        <div>
                            <ul className='flex items-center gap-x-10'>
                                <li><a className='flex font-sans font-semibold text-[18px] leading-[25px] text-primary' href="">Home <img src={arrow} alt="" /></a></li>
                                <li><a className='flex font-sans font-semibold text-[18px] leading-[25px] text-[#192239] hover:text-primary' href="">About <img src={arrow} alt="" /></a></li>
                                <li><a className='flex font-sans font-semibold text-[18px] leading-[25px] text-[#192239] hover:text-primary' href="">Service <img src={arrow} alt="" /></a></li>
                                <li><a className='flex font-sans font-semibold text-[18px] leading-[25px] text-[#192239] hover:text-primary' href="">Portfolio <img src={arrow} alt="" /></a></li>
                                <li><a className='flex font-sans font-semibold text-[18px] leading-[25px] text-[#192239] hover:text-primary' href="">Price <img src={arrow} alt="" /></a></li>
                                <li><a className='flex font-sans font-semibold text-[18px] leading-[25px] text-[#192239] hover:text-primary' href="">Blog <img src={arrow} alt="" /></a></li>
                            </ul>
                        </div>
                        <div>
                            <button className='bg-primary font-sans font-semibold text-[18px] text-white px-7 py-3.5 rounded-full'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar