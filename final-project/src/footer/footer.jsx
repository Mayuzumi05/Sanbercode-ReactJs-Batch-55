import React from 'react'

function Footer() {
  return (
    <div className='bg-[#003366] p-[64px] desktop:flex'>
        <img src="/images/logo-white.svg" className='w-[144px]' alt="" />
        <p className="text-base text-[#F8F8FF] max-w-[320px] desktop:ml-[96px] desktop:mr-[60px] mobile:my-[24px]">JL RAA MARTANEGARA NO 56, Kel. Turangga, Kec. Lengkong, Kota Bandung, Provinsi Jawa Barat</p>
        <div className='desktop:mt-[24px]'>
            <a className='flex' href='https://www.instagram.com/sanbercode/'>
                <img src="/images/Instagram.svg" alt="" />
                <p className="text-base text-[#F8F8FF] ml-[8px]">Instagram</p>
            </a>
            <a className='flex mt-[16px]' href='https://www.youtube.com/channel/UC_AbGHyMz2e-mxkS8UvETvA/featured'>
                <img src="/images/Youtube.svg" alt="" />
                <p className="text-base text-[#F8F8FF] ml-[8px]">Youtube</p>
            </a>
            <a className='flex mt-[16px]' href='https://fb.me/sanbercode'>
                <img src="/images/Facebook.svg" alt="" />
                <p className="text-base text-[#F8F8FF] ml-[8px]">Facebook</p>
            </a>
        </div>
    </div>
  )
}

export default Footer