import React from 'react'

function Dashboard() {
  return (
    <div className='p-[64px]'>
        <div className='grid desktop:grid-cols-3 mobile:grid-cols-1 mobile:gap-[24px] desktop:mt-[48px]'>
            <div>
                <p className='text-xl text-[#777986] text-center'>Companies</p>
                <p className='text-4xl text-[#404252] text-center'>2.000+</p>
            </div>
            <div>
                <p className='text-xl text-[#777986] text-center'>Professionals</p>
                <p className='text-4xl text-[#404252] text-center'>10.000+</p>
            </div>
            <div>
                <p className='text-xl text-[#777986] text-center'>Countries</p>
                <p className='text-4xl text-[#404252] text-center'>5</p>
            </div>
        </div>
        <div className='mt-[144px]'>
            <p className='text-4xl text-[#404252] text-center'>Our Partners</p>
            <p className='text-xl text-[#777986] text-center mt-[16px]'>More than <span className='text-[#003366]'>2,000 companies</span> have successfully hired through Sanbercode</p>
        </div>
        <div className='grid grid-cols-4 my-[48px]'>
            <img className='max-h-[96px] m-auto' src="/images/company 1.png" alt="" />
            <img className='max-h-[96px] m-auto' src="/images/company 2.png" alt="" />
            <img className='max-w-[196px] m-auto' src="/images/company 3.png" alt="" />
            <img className='max-h-[80px] m-auto' src="/images/company 4.png" alt="" />
            <img className='max-h-[96px] m-auto' src="/images/company 5.png" alt="" />
            <img className='max-h-[96px] m-auto' src="/images/company 6.png" alt="" />
            <img className='max-h-[96px] m-auto' src="/images/company 7.png" alt="" />
            <img className='max-h-[96px] m-auto' src="/images/company 8.png" alt="" />
        </div>
    </div>
  )
}

export default Dashboard