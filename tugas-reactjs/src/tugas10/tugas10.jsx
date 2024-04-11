"use client";

import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Tugas10() {
    const [data, setData] = useState(null)

    const [number, setNumber] = useState(1);

    useEffect(() => {
        axios.get("http://backendexample.sanbercloud.com/api/student-scores")
          .then((res) => {
            setData([...res.data])
          })
          .catch((error) => {
          })
      }, [])

      console.log(data)

    const handleIndexScore = (value) => {
        if (value === null) {
            return <>null</>
        } else if (value >= 80 ) {
            return <>A</>
        } else if (value>=70 && value<80) {
            return <>B</>
        } else if (value>=60 && value<70) {
            return <>C</>
        } else if (value>=50 && value<60) {
            return <>D</>
        } else if (value<50) {
            return <>E</>
        }
    }
    
    return (
        <div className="w-3/4 m-auto card">
            <>
                <Table striped >
                    <Table.Head>
                        <Table.HeadCell className="bg-purple-500 text-white">NO.</Table.HeadCell>
                        <Table.HeadCell className="bg-purple-500 text-white">NAMA</Table.HeadCell>
                        <Table.HeadCell className="bg-purple-500 text-white">MATA KULIAH</Table.HeadCell>
                        <Table.HeadCell className="bg-purple-500 text-white">NILAI</Table.HeadCell>
                        <Table.HeadCell className="bg-purple-500 text-white">INDEX NILAI</Table.HeadCell>
                        <Table.HeadCell className="bg-purple-500 text-white">ACTION</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                    { data !== null && data.map((res, number) => {
                        return (
                            <>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {number+1}
                                    </Table.Cell>
                                    <Table.Cell>{res.name}</Table.Cell>
                                    <Table.Cell>{res.course}</Table.Cell>
                                    <Table.Cell>{res.score}</Table.Cell>
                                    <Table.Cell>
                                        {handleIndexScore(res.score)}
                                    </Table.Cell>
                                    <Table.Cell className="flex">
                                        <Button color="light">Edit</Button>
                                        <Button color="failure" className="ml-[16px]">Delete</Button>
                                    </Table.Cell>
                                </Table.Row>
                            </>
                        )
                    })}
                    </Table.Body>
                </Table>
            </>
            
        </div>
    )
}

export default Tugas10