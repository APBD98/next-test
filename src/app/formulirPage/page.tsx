'use client'

import qrImg from '@/assets/SeekPng .png'
import Image from 'next/image'
import Modal from '@/components/modal'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import datas from '@/data/datas'
import FormModal from '@/components/formModal'
import Alert from '@/components/alert'
import AddComponentModal from '@/components/addComponentModal'
import whiteCir from '@/assets/whiteCir.png'



function About() {
  const [modalQRShow, setModalQRShow] = useState<boolean>(false)
  const [showFormModal, setShowFormModal] = useState<boolean>(false)
  const [inputTextCath, setInputTextCath] = useState<string>('')
  const [inputTextComponent, setInputTextComponent] = useState<string>('')
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [showComponentModal, setShowComponentModal] = useState<boolean>(false)
  const [isAlert, setIsAlert] = useState<string>('pembaruan')
  const [newData, setNewData] = useState(datas)
  const [activateId, setAcvtivateId] = useState('1')
  const [isHide, setIsHide] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState(false)
  const handleModal = () => {
    setModalQRShow(true)
  }
  
 

  const addCategory = () =>{
    const id = Math.random() + '' 
    const newDataItem = {category: inputTextCath, id:id, itemsList:[]}
    setNewData([...newData, newDataItem])
    setIsAlert('kategori')
    setShowAlert(true)
    setShowFormModal(false)
  }

  const showDetail = (id:any) =>{
    setAcvtivateId(id == activateId ? null : id)
  }

  const inputCathegory = (e:ChangeEvent<HTMLInputElement>) => {
    setInputTextCath(e.target.value)
  }

  const inputComponent = (e: ChangeEvent<HTMLInputElement>) =>{
    setInputTextComponent(e.target.value)
  }
  
  

  const addNewItem = (itemId:any) => {
    const newItems = {title:inputTextComponent}
    const updatedAllData = newData.map((data:any) => {
      if (data.id === itemId) {
        return {
          ...data,
          itemsList: [...data.itemsList, newItems],
        };
      }
      return data;
    });

    setNewData(updatedAllData);
    setIsAlert('komponen')
    setShowAlert(true)
    setShowComponentModal(false)
  };

  const handleHide = () =>{
    setIsHide(prev => !prev)
  }
  const handleChecked = () =>{
    setIsChecked(true)
    console.log(isChecked)

  }
  

  return (
    <div className='w-full h-[1000px] pl-[200px] pt-[50px]'>
      <div className='h-full w-full pl-[100px]'>
        <div className='w-[95%] h-[192px] flex items-center p-5 gap-5 bg-[#ffffff] rounded-2xl shadow-xl'>
          <div className='text-center'>
            <Image src={qrImg} alt='qr code' width={80} height={80}/>
            <p className='text-[12px] pt-2'>Kode QR</p>
          </div>
          <div>
            <h1 className='text-lg text-[#04B0EA] font-bold pb-2 '>QR Registrasi Pengunjung</h1>
            <p className='text-sm pb-2'>Lihat kemudian pindai Kode QR untuk masuk ke formulir registrasi pengunjung atau cetak Kode QR untuk mendapatkan QR secara fisik</p>
            <div>
              <button className='w-[144px] h-[48px] bg-[#04B0EA] text-white rounded-lg mr-4' onClick={handleModal}>Lihat Kode QR</button>
              <button className='w-[144px] h-[48px] bg-[#04B0EA] text-white rounded-lg'>Cetak Kode QR</button>
            </div>
          </div>

        </div>
        <div>
          {
            modalQRShow ? <Modal closeModal={() => setModalQRShow(false)}/> : null
          }
        </div>


        <div className='w-[95%] min-h-[800px] border-2 mt-[36px] rounded-lg p-[36px] relative '>
          <div>
            <h1 className='text-lg text-[#04B0EA] font-bold pb-1'>Kustomisasi Formulir Registrasi Pengunjung</h1>
            <p className='text-sm pb-1'>Anda dapat mengatur formulir registrai pengunjung dengan:</p>
            <ul className='ml-4 text-sm list-disc' >
              <li className='pb-1'>Aktifkan/matikan kategori untuk memunculkan/menyembunyikan isi formulir</li>
              <li className='pb-1'>Sesuaikan isi formulir dengan mengatur komponen formulir</li>
              <li className='pb-1'>Tambahkan kategori untuk menambah kategori formulir</li>
            </ul>
          </div>

          <div className='mt-[30px] min-h-[500px] w-full relative '>
            {
              newData.map((data) => (
                <div key={data.id}>
                <div  className={`w-[300px] min-h-[100px] flex flex-col justify-around border-r-2 cursor-pointer ${data.id == activateId && 'pointer-events-none text-[#04B0EA] font-bold'}`} >
                  <p onClick={() => showDetail(data.id)}>{data.category} <span className={`${data.id ==activateId ? 'inline': 'hidden'} ml-20`}>{'>>'}</span></p>
                </div>
                {
                  showComponentModal == true && data.id == activateId && <AddComponentModal 
                  handleSave={()=> addNewItem(data.id)} 
                  cancelChange={() => setShowComponentModal(false)}
                  inputComponent={inputComponent}/>
                }
                
                <div className='w-[60%] flex flex-col justify-start absolute top-0 left-[40%] gap-5' style={{minHeight:'400px'}}>
                  <div className={`${activateId == data.id ? 'inline' : 'hidden'} -ml-5 text-blue-400 font-bold`}>
                    <h1>{data.category}</h1>
                  </div>
                { activateId == data.id &&
                  data.itemsList?.map((item, index) =>(
                    
                    <div className={`w-full h-[48px] gap-5  ${isHide == true ? 'hidden' : 'flex items-center'}`} key={index}>
                      <input type="checkbox" className='w-[18px] h-[18px] z-10' onChange={() => handleChecked()}/>
                      <p className={`w-full h-[48px] border-2 p-2 shadow-lg`}>{item.title}</p>
                    </div>
                      
                  ))
                  
                }
              </div>
              </div>
              
              ))
            }
            
            <div>
              <button className='text-sm text-[#04B0EA]' onClick={() => setShowFormModal(true)}>+ Tambah Kategori</button>
              
            </div>

            <div>
              {
                showFormModal == true && <FormModal inputCath={inputCathegory} saveCath={addCategory} cancelChange={() => setShowFormModal(false)}/>
              }
              
              {
                showAlert == true && <Alert closeAlert={() => setShowAlert(false)} isAlert={isAlert}/>
              }
            </div>
            <div className={`absolute top-0 right-0 w-[52px] h-[32px] bg-blue-500 flex items-center  rounded-xl justify-end cursor-pointer`} onClick={handleHide}>
              <Image src={whiteCir} alt='button icons' className={`w-[24px] h-[24px]  ${isHide ? '-translate-x-7 transition-all duration-1000': 'translate-x-0 transition-all duration-1000' }`}/>
            </div>
           
            
          </div>
          <div className='text-end mb-5'>
            <button onClick={() => setShowComponentModal(true)} className='text-sm text-[#04B0EA] '>+ tambah komponen</button>
          </div>

          <div className='text-end'>
            <button className='text-sm text-[#04B0EA] w-[144px] h-[48px]'>Pratinjau Formulir</button>
          <button className={`text-sm w-[144px] h-[48px] bg-[#04B0EA] text-white rounded-lg m-5 ${showAlert? 'opacity-50':'opacity-100'}`} onClick={() => setShowAlert(true)} >Simpan</button>
          </div>
          

        </div>

      </div>

    </div>
  )
}

export default About