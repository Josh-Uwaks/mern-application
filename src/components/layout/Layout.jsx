import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import {Admins, Dashboard, Lender, Loans, Payments, Reports, Settings, Support} from '../pages/index'
import Nav from '../sidemenu/Nav'
// import axios from 'axios'
const Layout = () => {
  // const [addContent, setAddContent] = useState(["Item 1", "Item 2"])
  // function addItem() {
  //   setAddContent(prev => [...prev, `Item ${prev.length + 1}, `])
  // }
  // const Base_URL = 'http://localhost:3000/api/user/'
  // const [userData, setUserData] = useState([])
  
  // const Info = async () => {
  //   try {
  //     const response = await axios.get(Base_URL)
  //     setUserData(response.data)
  //     console.log(response.data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // } 
  // useEffect(() => {
  //   Info()
  // }, [])
  
  return (
    <div className='h-screen flex w-full'>
        <Nav/>
        <div className='w-full'>
            <div className='p-4'>
              Navbar
            </div>
            {/* {getState.map((item, index) => (
              <div key={index}>
                {item}
              </div>
            ))} */}
            <div>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/dashboard/lender' element={<Lender/>}/>
                    <Route path='admin' element={<Admins/>}/>
                    <Route path='loans' element={<Loans/>}/>
                    <Route path='payments' element={<Payments/>}/>
                    <Route path='reports' element={<Reports/>}/>
                    <Route path='support' element={<Support/>}/>
                    <Route path='settings' element={<Settings/>}/>
                    <Route/>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Layout