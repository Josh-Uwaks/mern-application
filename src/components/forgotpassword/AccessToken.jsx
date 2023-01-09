import React from 'react'
import Card from '../common/Card'
import ImageComp from '../common/ImageComp'
import { Input, Button, Form } from 'antd'
import {IoIosUnlock} from 'react-icons/io'
export default function AccessToken(){
    return(
        <div className='grid grid-cols-2 h-screen'>
            <ImageComp/>
            <div className='flex items-center justify-center bg-[#d6d6d6]'>
                <Card>
                    <Form>
                    <div className='p-4 flex flex-col items-center'>
                        <span className='text-[#b2b2b2]'><IoIosUnlock size={30}/></span>
                        <span className='text-2xl text-[#ec3338]'>Forgot Password</span>
                    </div>
                    <Input placeholder='Access Code' className='mb-3'/>
                    <Button className='bg-[#1b1e1c] text-white w-full'>Proceed To Login</Button>
                    <div>
                    <p className='text-center text-[12px]'>check email for access code</p>
                        <span className='font-bold cursor-pointer'>Resend Code</span>
                    </div>
                    </Form>
                </Card>
            </div>
        </div>
    )
}