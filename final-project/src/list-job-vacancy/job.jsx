"use client";

import { Table } from "flowbite-react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Job() {

    const [data, setData] = useState(null)

    const [input, setInput] = useState(
        {
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: 0,
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: 0,
            salary_max: 0,
        }
    )

    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
                .then((res) => {
                    setData([...res.data.data])
                })
                .catch((error) => {
                })
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])
    
    return (
        <div className="p-[64px]">
            <p className="text-2xl text-[#003366] text-center">List Job Vacancy</p>
            <div className="border border-[#F9E03C] w-[192px] mx-auto mt-[8px] mb-[24px]"></div>
            <div className='grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[24px]'>
                { data !== null && data.map((res, number) => {
                    return (
                        <>
                            <div className='border border-[#F3F4F8] rounded-lg p-[16px]'>
                                <div className='flex mb-[16px]'>
                                    <img src={res.company_image_url} className='w-[48px] h-[48px] border border-[#F3F4F8] rounded' alt="" />
                                    <div className='ml-[16px]'>
                                        <p className="text-xl text-[#404252]">{res.title}</p>
                                        <p className="text-base text-[#777986]">{res.company_name}</p>
                                    </div>
                                </div>
                                <div className="border border-[#F3F4F8]"></div>
                                <div className='mt-[16px]'>
                                    <div className='flex gap-[16px]'>
                                        <img src="/images/Case.svg" alt="" />
                                        <p className="text-base text-[#777986]">{res.job_type}</p>
                                    </div>
                                    <div className='flex gap-[16px] mt-[8px]'>
                                        <img src="/images/Office.svg" alt="" />
                                        <p className="text-base text-[#777986]">{res.job_type}</p>
                                    </div>
                                    <div className='flex gap-[16px] mt-[8px]'>
                                        <img src="/images/Location.svg" alt="" />
                                        <p className="text-base text-[#777986]">{res.company_name}</p>
                                    </div>
                                    <div className='flex gap-[16px] mt-[8px]'>
                                        <img src="/images/Money.svg" alt="" />
                                        <p className="text-base text-[#777986]">{res.salary_min/1000000} Juta - {res.salary_max/1000000} Juta</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Job