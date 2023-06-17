import qr from '@/assets/qr.png'
import Image from 'next/image'

type Props = {
    closeModal: () => void
}

const Modal = (props: Props) => {
  return (
    <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <button className='absolute top-20 text-white w-10 h-8 border-2 bg-blue-500' onClick={props.closeModal}>X</button>
            
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <Image src={qr} alt='qr code' width={274} height={274}/>
                </div>
              </div>
            </div>
            
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  )
}

export default Modal