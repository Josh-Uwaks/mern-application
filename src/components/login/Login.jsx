import React,{useEffect, useState} from 'react'
import {Form, Input, Button} from 'antd'
import {Spin} from 'antd'
import ImageComp from '../common/ImageComp'
import {FiLogIn} from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../common/Card'
import {FcGoogle} from 'react-icons/fc'
import styles from '../styles/modules/login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import { login } from '../features/auth/authSlice'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({
        email: '',
        password: ''
    })
    const {email, password}  = formDetails;
    const {loading, error} = useSelector((state) => ({...state.auth}));

    useEffect(() => {
        error && toast.error(error);
    }, [error])

    const handleData = (event) => {
        const {value, name} = event.target
        setFormDetails(prev => {
            return{
                ...prev,
                [name] : value
            }
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(email && password){
            dispatch(login({formDetails, navigate, toast}))
        }
    }
  return (
    <div className={styles.login}>
        <ImageComp/>
        <div className='flex items-center justify-center bg-[#d6d6d6]'>
            <Card>
                <Form onSubmitCapture={onSubmit}>
                    <div className='p-4 flex flex-col items-center'>
                        <span className='text-[#b2b2b2]'><FiLogIn size={30}/></span>
                        <span className='text-2xl text-[#ec3338]'>Login</span>
                        <Button className='flex items-center my-2'>
                            <span><FcGoogle size={20}/></span>
                            <span> &nbsp; Sign in with Google</span>
                        </Button>
                        <p>or</p>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <Input placeholder='Email Address' name='email' value={formDetails.email} onChange={handleData} required/>
                        </div>
                        <div className='mb-3'>
                            <Input.Password placeholder='Password' name='password' value={formDetails.password} onChange={handleData} required/>
                        </div>
                        <Button className='w-full bg-[#1b1e1c] text-white mb-1' htmlType='submit'>Login {" "} {loading && <Spin className='mx-1'/>}</Button>
                        <div>
                            <p><Link to='/forgot-password'>Forgot password</Link></p>
                            <span>Dont have an account ? <Link to='/registration'>Register</Link></span>
                        </div>
                    </div>
                </Form>
            </Card>
        </div>
    </div>
  )
}

export default Login