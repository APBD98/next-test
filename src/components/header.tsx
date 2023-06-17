import React from 'react'
import Image from 'next/image'
import calianaImg from '@/assets/caliana.svg'
import rect from '@/assets/persegi.png'
import bell from '@/assets/bell.png'
import arrow from '@/assets/arrow.png'
import search from '@/assets/search.png'
import circle from '@/assets/dot.png'
import user from '@/assets/user.png'


function Header() {
  return (
    <div className='p-5 w-full h-[116px] flex justify-between items-center border-b-2 shadow-sm'>
        <div className='flex gap-4'>
            <Image src={rect} alt='rectangle icons' width={44} height={44}/>
            <Image src={calianaImg} width={120} height={28} alt='caliana logo'/>
        </div>
        <div className='w-[70%] flex justify-between items-center border-r-2 border-l-2 p-5 border-[#ABB2B9]'>
            <div>
                <h1 className='font-bold text-2xl'>Formulir</h1>
                <p className='text-sm text-[#566573]'>senin, 01 januari 2023 <span>| 00.00 wib</span></p>
            </div>
            <div className='flex w-1/2 justify-end items-center gap-4 relative'>
                <input type="text" placeholder='temukan fitur yang anda butuhkan' className='border-2 w-[400px] h-10 p-4'/>
                <Image src={search} alt='search icons' className='absolute top-3 right-10'/>
                <div className='relative'>
                    <Image src={bell} alt='bell icons' className='w-[20px] h-[23px]'/>
                    <Image src={circle} alt='titik' className='w-[7px] h-[7px] absolute top-0 right-0'/>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <div className='w-10 h-10 bg-blue-400 rounded-full overflow-hidden flex items-center justify-center'>
                <Image src={user} alt='user Image' width={28} height={42}/>
            </div>
            <div>
                <p className='text-sm'>Azrai</p>
                <p className='text-sm opacity-50'>Admin</p>
            </div>
            <div>
                <Image src={arrow} alt='arrow icons' width={10} height={5}/>
            </div>
        </div>
    </div>
  )
}

export default Header