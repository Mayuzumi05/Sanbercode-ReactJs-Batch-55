"use client";

import { Table } from "flowbite-react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Tugas11() {
    const [data, setData] = useState(null)

    const [input, setInput] = useState(
        {
            name: "",
            course: "",
            score: ""
        }
    )

    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get("https://backendexample.sanbercloud.com/api/student-scores")
                .then((res) => {
                    setData([...res.data])
                })
                .catch((error) => {
                })
            setFetchStatus(false)
        }
      }, [fetchStatus, setFetchStatus])

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

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === "name") {
            setInput({ ...input, name: value })
        } else if (name === "course") {
            setInput({ ...input, course: value })
        } else if (name === "score") {
            setInput({ ...input, score: value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let {
            name,
            course,
            score
        } = input

        //create data
        axios.post('https://backendexample.sanbercloud.com/api/student-scores', { name, course, score })
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
        })

        //clear input setelah create data
        setInput(
        {
            name: "",
            course: "",
            score: ""
        }
        )
    }

    console.log(data)

    const handleDelete = (event) => {

        let idData = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res) => {
            setFetchStatus(true)
        })

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
                                        <button color="failure" className="ml-[16px]" onClick={handleDelete} value={res.id}>Delete</button>
                                    </Table.Cell>
                                </Table.Row>
                            </>
                        )
                    })}
                    </Table.Body>
                </Table>
                <form className="flex max-w-md flex-col gap-4 mt-[24px]" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="name" value="Name" />
                        </div>
                        <TextInput id="name" type="text" onChange={handleInput} value={input.name} name='name' required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="course" value="Mata Kuliah" />
                        </div>
                        <TextInput id="course" type="text" onChange={handleInput} value={input.course} name='course' required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="score" value="Score" />
                        </div>
                        <TextInput id="score" type="number" onChange={handleInput} value={input.score} name='score' required />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </>
            
        </div>
    )
}

export default Tugas11