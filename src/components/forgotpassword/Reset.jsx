import React from 'react'
import Card from '../common/Card'
import ImageComp from '../common/ImageComp'
import {Form, Button, Input} from 'antd'
import {MdPassword} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <div className='grid grid-cols-2 h-screen'>
        <ImageComp/>
        <div className='bg-[#d6d6d6] flex justify-center items-center'>
            <Card>
                <Form>
                    <div className='p-4 flex flex-col items-center'>
                        <span className='text-[#b2b2b2]'><MdPassword size={30}/></span>
                        <span className='text-2xl text-[#ec3338]'>Reset Password</span>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <Input placeholder='enter password'/>
                        </div>
                        <div className='mb-3'>
                            <Input placeholder='confirm password'/>
                        </div>
                        <Button className='bg-[#1b1e1c] text-white w-full mb-1'>Reset Password</Button>
                        <div>
                            <span><Link to='/login'>Login</Link></span>
                        </div>
                    </div>
                </Form>
            </Card>
        </div>
    </div>
  )
}

export default Reset