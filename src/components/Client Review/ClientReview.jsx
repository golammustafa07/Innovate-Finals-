import React from 'react'
import cl from "../../assets/images/cl.png"
import left from "../../assets/images/left.svg"
import right from "../../assets/images/right.svg"
import imgpstn from "../../assets/images/imgpstn.png"
import clntr from "../../assets/images/clntr.png"
import Container from '../Layout/Container'

const ClientReview = () => {
    return (
        <div className='bg-[#FCF8F8] relative'>
            <img className='absolute bottom-[200px] right-0 -z-10' src={clntr} alt="" />
            <Container classname="py-[100px]">
                <div className='flex gap-x-[52px]'>
                    <div>
                        <img src={cl} alt="" />
                        <h3 className='font-sans font-extrabold text-[48px] leading-[65px] tracking-[0.5px] text-[#192239] pt-4 pb-5'>Client Review</h3>
                        <p className='font-pap text-[18px] leading-[30px] text-[#6c7d93] w-[331px]'>people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  </p>

                        <div className='flex gap-x-[25px] mt-1.5'>
                            <button className='w-[64px] h-[64px] rounded-full bg-primary/25 hover:bg-primary'><img className='px-[22px]' src={left} alt="" /></button>
                            <button className='w-[64px] h-[64px] rounded-full bg-primary'><img className='px-[25px]' src={right} alt="" /></button>
                        </div>
                    </div>

                    <div className='flex gap-x-[30px]'>
                        <div className='pt-[25px] pb-10 pl-10 pr-[51px] bg-[#D8EAFF] rounded-lg relative'>
                            <p className='font-pap text-[18px] leading-[30px] text-[#6c7d93] w-[270px]'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                            <div className='flex items-center gap-x-[26px] mt-[9px]'>
                                <div className='w-[94px] h-[94px] rounded-full bg-[#c4c4c4]'></div>
                                <img className='absolute bottom-[55px] left-[110px]' src={imgpstn} alt="" />
                                <div>
                                    <h3 className='font-sans font-semibold text-[24px] leading-[33px] tracking-[0.5px] text-[#202427]'>Jane Cooper</h3>
                                    <p className='font-sans text-[18px] leading-[25px] tracking-[0.5px] text-[#202427]'>Fashion Designer</p>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[25px] pb-10 pl-10 pr-[51px] bg-white rounded-lg relative'>
                            <p className='font-pap text-[18px] leading-[30px] text-[#6c7d93] w-[270px]'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                            <div className='flex items-center gap-x-[26px] mt-[9px]'>
                                <div className='w-[94px] h-[94px] rounded-full bg-[#c4c4c4]'></div>
                                <img className='absolute bottom-[55px] left-[110px]' src={imgpstn} alt="" />
                                <div>
                                    <h3 className='font-sans font-semibold text-[24px] leading-[33px] tracking-[0.5px] text-[#202427]'>Eleanor Pena</h3>
                                    <p className='font-sans text-[18px] leading-[25px] tracking-[0.5px] text-[#202427]'>Architecture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ClientReview