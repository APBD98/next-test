import successIcons from '@/assets/succes.png'
import Image from 'next/image'
const Alert = (props:any) => {
  return (
    <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center w-[500px] h-[300px] bg-white outline-none focus:outline-none">
                <button className='self-end mr-4 text-red-400' onClick={props.closeAlert}>X</button>
                <div className="relative p-6 flex-auto ">
                  <Image src={successIcons} alt='success' width={168} height={168}/>
                </div>
                <div className='text-center pb-10'>
                    <h3 className='text-[#139420] text-xl'>Berhasil</h3>
                    {
                      props.isAlert == 'pembaruan' && <p className='text-sm'>Pembaruan berhasil disimpan</p>
                    }
                    {
                      props.isAlert == 'kategori' && <p className='text-sm'>Kategori berhasil ditambahkan</p>
                      
                    }
                    {
                      props.isAlert == 'komponen' && <p>Komponen berhasil ditambahkan</p>
                    }
                    
                </div>
              </div>
            </div>
            
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  )
}

export default Alert