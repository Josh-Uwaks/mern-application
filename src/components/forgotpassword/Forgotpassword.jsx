import React from 'react'
import Card from '../common/Card';
import ImageComp from '../common/ImageComp';
import {Form, Input, Button} from 'antd'
import {AiOutlineMail} from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Forgotpassword(){
    return(
        <div className='grid grid-cols-2 h-screen'>
            <ImageComp/>
            <div className='flex justify-center items-center bg-[#d6d6d6]'>
                <Card>
                    <Form>
                    <div className='p-4 flex flex-col items-center'>
                        <span className='text-[#b2b2b2]'><AiOutlineMail size={30}/></span>
                        <span className='text-2xl text-[#ec3338]'>Forgot Password</span>
                    </div>
                    <Input placeholder='Email' className='mb-3'/>
                    <Button className='bg-[#1b1e1c] text-white w-full mb-1'>Get Reset Email</Button>
                    <div>
                        <span><Link to='/login'>Login</Link></span>
                    </div>
                    </Form>
                </Card>
            </div>
        </div>
    )
}
export default Forgotpassword;