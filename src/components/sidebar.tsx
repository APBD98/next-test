

import vms from '@/assets/vms.png'
import homeIcons from '@/assets/home.png'
import dahsboardIcons from '@/assets/dashboard.png'
import formIcons from '@/assets/form.png'
import deviceIcons from '@/assets/device.png'
import visitorIcons from '@/assets/visitor.png'
import helpIcons from '@/assets/help.png'
import operatorIcons from '@/assets/operator.png'
import residentIcons from '@/assets/resident.png'
import settingIcons from '@/assets/setting.png'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="absolute left-0 top-28 w-[250px] min-h-[1000px] border-2 mt-1 ">
      <div className='flex items-center justify-center gap-5 h-[146px] w-full border-b-2 p-4'>
        <div className='border-[1px] border-blue-400 p-2'>
          <Image src={vms} alt='icons vms'/>
        </div>
        <div>
          <h1 className='text-[#04B0EA] text-base'>Caliana VMS</h1>
          <p className='text-[12px] opacity-50'>Virtual Management System</p>
        </div>
        <div>
          <p className='text-[#04B0EA]'>{'<'}</p>
        </div>

      </div>

      <div className='flex flex-col justify-around w-full h-[800px] p-4'>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={homeIcons} alt='home icons' className='w-[16px] h-[16px]'/>
          <p className={`text-sm `} >Beranda</p>
        </Link>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={dahsboardIcons} alt='dashboard icons' className='w-[16px] h-[16px]'/>
          <p className='text-sm'>Dashboard</p>
        </Link>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={visitorIcons} alt='visitor icons' className='w-[16px] h-[16px]'/>
          <p className='text-sm'>Pengunjung</p>
        </Link>
        <Link href={'/formulirPage'} className='flex items-center gap-2'>
          <Image src={formIcons} alt='form icons' className='w-[16px] h-[16px]'/>
          <p className='text-sm'>Formulir</p>
        </Link>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={deviceIcons} alt='device icons' className='w-[16px] h-[16px]'/>
          <p className='text-sm'>Perangkat</p>
        </Link>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={operatorIcons} alt='operator icons' className='w-[16px] h-[16px]'/>
          <p className='text-sm'>Operator</p>
        </Link>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={residentIcons} alt='Resident icons' className='w-[16px] h-[16px]'/>
          <p className='text-sm'>Resident</p>
        </Link>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={helpIcons} alt='help icons' className='w-[16px] h-[16px]'/>
          <p className='text-sm'>Bantuan</p>
        </Link>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={settingIcons} alt='setting icons' className='w-[16px] h-[16px]'/>
          <p className='text-sm'>Pengaturan</p>
        </Link>

      </div>

    </div>
  )
}

export default Sidebar