import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className='bg-[#F3F4F8] px-[64px] pt-[48px] mobile:pb-[48px] desktop:pb-0 grid mobile:grid-cols-1 desktop:grid-cols-2'>
        <div className='m-auto'>
            <p className='desktop:text-6xl mobile:text-4xl text-[#404252]'>Collecting job vacancies for you</p>
            <p className='desktop:text-xl mobile:text-base text-[#777986] mt-[16px] mb-[48px]'>Job vacancy platform to help you get closer to the career you want</p>
            <button className='p-[16px] bg-[#003366] rounded-[8px] text-[#F8F8FF]'>
                <Link to='/dashboard/list-job-vacancy'>
                    Get Started
                </Link>
            </button>
        </div>
        <img className='desktop:w-[256px] mobile:w-[0px] ml-auto' src="/images/Persona.svg" alt="" />
    </div>
  )
}

export default Hero