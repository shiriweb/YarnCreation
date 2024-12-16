import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
    <p className='w-9 h-[2px] mt-1  bg-gray-800'></p>
    <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
    <p className='w-9 h-[2px] mt-1  bg-gray-800'></p>

</div>)
}

export default Title