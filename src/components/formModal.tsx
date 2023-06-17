import Image from "next/image"
import addIcons from '@/assets/add.png'

const FormModal = (props:any) => {
  return (
    <>
        <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-lg font-semibold">
                Tambah Kategori Formulir
                </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
                <p className='text-sm font-semibold mb-3'>Nama kategori</p>
                <input type="text" className='w-[400px] h-[48px] border-2 text-sm rounded-lg p-8' placeholder='Masukan nama kategori' onChange={props.inputCath}/>
                <Image src={addIcons} alt="add icons" width={12} height={12} className="absolute top-[85px] left-8"/>
            </div>
            {/*footer*/}
            <div className="flex items-center gap-4 justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                className="text-[#04B0EA] background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-[1px] border-[#04B0EA] rounded-lg"
                type="button"
                onClick={props.cancelChange}>
                Batal
                </button>
                <button
                className="bg-[#04B0EA] text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                type="button"
                onClick={props.saveCath}>
                Simpan
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  )
}

export default FormModal