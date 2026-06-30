import React from 'react'

export default function additional() {
  return (
    <div>
        <div className='flex gap-5 items-center'>
            <h2 className=' font-josh font-bold'>Color</h2>
            <p className='tracking-widest'>Red, Blue, Orange, Black, Green, Yellow</p>
        </div>

        <div className='flex gap-8 items-center'>
            <h2 className=' font-josh font-bold'>Size</h2>
            <p className='tracking-widest'>S, M, L, XL, XLL</p>
        </div>
    </div>
  )
}
