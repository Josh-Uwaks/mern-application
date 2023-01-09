import React, { useEffect, useState } from 'react'
import ImageComp from '../common/ImageComp'
import {Form, Button, Input, Spin} from 'antd'
import Card from '../common/Card'
import { FiLogIn } from 'react-icons/fi'
import {FaTimes} from 'react-icons/fa'
import {BsCheck2All} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import { register } from '../features/auth/authSlice'

const Registration = () => {
    const initialState = {
        username: '',
        email:'',
        password:'',
        confirmpassword:''
    }
    const [formData, setFormData] = useState(initialState)
    const {loading, error} = useSelector((state) => ({...state.auth}))
    const {username, email, password, confirmpassword} = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        error && toast.error(error)
    }, [error])

    const [uCase, setUcase] = useState(false)
    const [num, setNum] = useState(false)
    const [sChar, setSchar] = useState(false)
    const [passLength, setPassLength] = useState(false)

    const timesIcon = <FaTimes size={15} className='text-[#ec3338]'/>
    const checkIcon = <BsCheck2All size={15} className='text-green-500'/>

    const switchIcon = (condition) => {
        if(condition){
            return checkIcon
        }else{
            return timesIcon
        }
    }
    useEffect(() => {
        if(formData.password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
            setUcase(true)
        }else{
            setUcase(false)
        }

        if(formData.password.match(/([0-9])/)){
            setNum(true)
        }else{
            setNum(false)
        }

        if(formData.password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
            setSchar(true)
        }else{
            setSchar(false)
        }

        if(formData.password.length > 5){
            setPassLength(true)
        }else{
            setPassLength(false)
        }
    }, [formData.password])
    
    const handleData = (event) => {
        const {value, name} = event.target
        setFormData(prev => {
            return{
                ...prev,
                [name]:value
            }
        })
    }  
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        if(password != confirmpassword){
           return toast.error('password do not match')
        }
        if(username && email && password && confirmpassword){
            dispatch(register({formData, navigate, toast}))
        }
    }
  return (
    <div className='grid grid-cols-2 h-screen'>
        <ImageComp/>
        <div className='flex justify-center items-center bg-[#d6d6d6]'>
            <Card>
                <Form onSubmitCapture={onSubmit}>
                    <div className='p-4 flex flex-col items-center'>
                        <span className='text-[#b2b2b2]'><FiLogIn size={30}/></span>
                        <span className='text-2xl text-[#ec3338]'>Register</span>
                    </div>
                    <div>
                    <Input placeholder='Username' className='mb-3' value={username} onChange={handleData} name='username'/>
                    <Input placeholder='Email Address' className='mb-3' value={email} onChange={handleData} name='email'/>
                    <Input.Password placeholder='Password' className='mb-3' value={password} onChange={handleData} name='password'/>
                    <Input.Password placeholder='Confirm Password' className='mb-3' value={confirmpassword} onChange={handleData} name='confirmpassword'/>
                    <div className='border-[1px] border-red-500 rounded-md p-1 mb-3 text-[13px]'>
                        <ul>
                            <li className='flex items-center'>{switchIcon(uCase)} &nbsp; Lowercase & Uppercase</li>
                            <li className='flex items-center'>{switchIcon(num)} &nbsp; Number (0 - 9)</li>
                            <li className='flex items-center'>{switchIcon(sChar)} &nbsp; Special Character (!@#$%^&*)</li>
                            <li className='flex items-center'>{switchIcon(passLength)} &nbsp; At least 6 Character</li>
                        </ul>
                    </div>
                    <Button className='bg-[#1b1e1c] text-white w-full mb-1' htmlType='submit'>Register {" "} {loading && <Spin className='mx-1'/>}</Button>
                        <div>
                            <span>Already have an account ? <Link to='/login'>Login</Link></span>
                        </div>
                    </div>
                </Form>
            </Card>
        </div>
    </div>
  )
}

export default Registration