import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import servicelogo from "../../assets/images/servicelogo.png"
import ServiceCard from '../../common/ServiceCard'
import { serviceCardData } from '../../data/serviceCardData'


const OurServices = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        setData(serviceCardData)
    }, [])
    return (
        <div>
            <Container classname="pt-[350px] pb-[100px]">
                <div className='text-center'>
                    <img className='mx-auto' src={servicelogo} alt="" />
                    <h3 className='font-sans font-extrabold text-[48px] leading-[65px] text-[#192239] tracking-[0.5px] py-4'>Our Services</h3>
                    <p className='font-pap text-[#6C7D93] text-[18px] leading-8 w-[332px] mx-auto'>We have been providing great flooring solutions service.</p>
                </div>

                <div className='flex flex-wrap sm:justify-around gap-y-[30px] gap-x-[30px] mt-[52px]'>
                    {
                        Data.map((data) => (
                            <ServiceCard data={data} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default OurServices