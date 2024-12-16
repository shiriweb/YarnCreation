import React from 'react'
import Title from '../../components/Title'
import Image from '../../assets/images/toys/contact.jpg'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div className='p-4 bg-[#f5f5f5]'>
    <div className="text-xl text-center">
        <Title className="" text1={"CONTACT"} text2={"US"} />
      </div>
      <div className='flex justify-center items-center w-full  '>
      <div className='w-1/2 '>
      <img className='w-[350px] h-[370px] mx-[210px]' src={Image} alt='image'/>
      </div>
      
      <div className='w-1/2 ml-5 text-sm flex flex-col justify-center gap-2 '>
      <h3 className='font-semibold text-xl text-gray-600 '>Our Store</h3>
      <p className='text-gray-500'>Address: Tankeshwor,Kalimati </p>
      <p className='text-gray-500'>Tel No: 015377925, 9860931929</p>
      <p className='text-gray-500 mb-3'>Email: yarncreation@gmail.com</p>
      <p className='text-black text-[18px] font-semibold'>Yarn Magic in Every Creation</p>
      <p className='text-gray-500 mt-3'>Learn More About Our Store</p>
      <button className='border border-white mt-1 bg-black text-white font-semibold text-sm w-24 px-2 py-2 hover:bg-gray-600'><Link to='/aboutus'>Learn More</Link></button>
      </div>
      
      </div>
    
    </div>
  )
}

export default Contact