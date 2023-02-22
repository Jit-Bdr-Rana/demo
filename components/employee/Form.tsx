import Mainlayout from '@/layouts/Mainlayout'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import Container from '../Container'
const breadCrumb: { title: string, link: string }[] = [
    {
        title: 'Home',
        link: '/employee'
    },
    {
        title: 'Employee',
        link: '/employee'
    },
    {
        title: 'Create',
        link: '/employee/create'
    },
]
export interface Employee {
    name: string;
    email: string;
    address: string;
    phone: number;
    age: number;
    gender: string;
}
const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Employee>();
    const router = useRouter();
    //function that is call after submit
    const saveEmployee = async (value: Employee) => {
        //api call

        const payload = {
            ...value,
            id: new Date().getTime()
        }
        try {
            const data = await axios.post('http://localhost:3000/employee', payload)
            if (data) {
                alert('saved success')
                router.push('/employee')
            }
        } catch (e) {
            alert('fail to save')
        }
    }
    return (
        <Mainlayout>
            <Container
                breadCrumb={breadCrumb}
                title='Add Employee'
            >
                <div className='flex  bg-white mx-auto p-16 justify-center  w-[100%]'>
                    <form onSubmit={handleSubmit(saveEmployee)} action="" className='flex-col flex gap-6'>
                        <div className=' relative items-center'>
                            <div className='flex gap-2'>
                                <label htmlFor="" className='text-xl w-[30%]'>Name:</label>
                                <input
                                    placeholder=' enter name'
                                    {...register('name', { required: true })}
                                    className='outline-none px-2  border-gray-400 border py-1.5'
                                    type="text"
                                />
                            </div>
                            {
                                errors?.name &&
                                <small className='w-full text-red-600 flex justify-center right-0 top-0'>name required</small>
                            }
                        </div>
                        <div className=' '>
                            <div className='flex gap-2items-center items-center'>
                                <label htmlFor="" className='text-xl w-[30%]'>Email:</label>
                                <input
                                    placeholder=' enter email'
                                    {...register('email', { required: { value: true, message: 'email is required' }, pattern: { message: 'invalid email', value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ } })}
                                    className='outline-none px-2  border-gray-400 border py-1.5'
                                    type="text"
                                />
                            </div>
                            {
                                errors?.email &&
                                <small className='w-full text-red-600 flex justify-center right-0 top-0'>{errors?.email?.message}</small>
                            }
                        </div>
                        <div className=''>

                            <div className='flex gap-2 '>
                                <label htmlFor="" className='text-xl w-[30%]'>Address:</label>
                                <input
                                    placeholder=' enter address'
                                    {...register('address', { required: { value: true, message: 'address is required' }, max: { value: 20, message: 'addrsss must be less than 20' } })}
                                    className='outline-none px-2  border-gray-400 border py-1.5'
                                    type="text"
                                />

                            </div>
                            {
                                errors?.address &&
                                <small className='w-full text-red-600 flex justify-center right-0 top-0'>{errors?.address?.message}</small>
                            }

                        </div>
                        <div className=''>
                            <div className="flex gap-2 ">
                                <label htmlFor="" className='text-xl w-[30%]'>Phone:</label>
                                <input
                                    placeholder=' enter phone'
                                    {...register('phone', { required: { value: true, message: 'phon no is required' }, pattern: { value: /^[0-9]{10}$/, message: 'phone must be 10 digit' } })}
                                    className='outline-none px-2  border-gray-400 border py-1.5'
                                    type="number"
                                />
                            </div>
                            {
                                errors?.phone &&
                                <small className='w-full text-red-600 flex justify-center right-0 top-0'>{errors?.phone?.message}</small>
                            }
                        </div>
                        <div className=''>
                            <div className='flex gap-2 items-center'>

                                <label htmlFor="" className='text-xl w-[30%]'>Age:</label>
                                <input
                                    {...register('age', { required: { value: true, message: 'age is required' } })}
                                    placeholder=' enter age' className='outline-none px-2  border-gray-400 border py-1.5' type="number" />

                            </div>
                            {
                                errors?.age &&
                                <small className='w-full text-red-600 flex justify-center right-0 top-0'>{errors?.age?.message}</small>
                            }
                        </div>
                        <div className=''>
                            <div className=''>
                                <div className='flex gap-2 items-center'>
                                    <label htmlFor="" className='text-xl w-[30%]'>Gender:</label>
                                    <select
                                        {...register('gender', { validate: (value) => value != 'null' })}
                                        className='px-2 bg-inherit outline-none w-full border-gray-400 border py-1.5'>
                                        <option selected value={'null'}>choose</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                {
                                    errors?.gender &&
                                    <small className='w-full text-red-600 flex justify-center right-0 top-0'>choose gender</small>
                                }
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button type='submit' className='bg-purple-700  text-white px-8 py-2 rounded-md'>Save</button>
                        </div>
                    </form>
                </div>
            </Container>
        </Mainlayout>
    )
}

export default Form