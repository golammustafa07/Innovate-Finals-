import React, { useEffect, useState } from 'react'
import Container from '../components/Layout/Container'

const ServiceCard = ({ data }) => {
  const id = data.id;
  const [color,setColor] =useState('')
  useEffect(()=>{
    setColor(data.backgroundcolor)
  },[])

  return (
    <div>
      <Container>
        <div className={`py-[52px] text-center mx-auto md:px-0 md:w-[370px] w-auto px-12 rounded-lg ${id == data.id ? color : ''}`}>
          <img className='mx-auto' src={data.image} alt="" />
          <h3 className='font-sans font-semibold text-[30px] leading-9 text-[#202427] mx-auto pt-7 pb-5'>{data.title}</h3>
          <p className='font-pap text-[18px] leading-[30px] text-[#6C7D93] mx-auto whitespace-pre-line h-[120px]'>{data.description}</p>
          <button className='font-sans font-bold text-[18px] leading-6 text-[#202427] px-4 py-1 bg-primary rounded-full'>Read More</button>
        </div>
      </Container>
    </div>
  )
}

export default ServiceCard