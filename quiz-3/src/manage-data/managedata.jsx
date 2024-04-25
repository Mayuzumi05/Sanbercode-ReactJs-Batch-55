"use client";

import { Table } from "flowbite-react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function ManageData() {
    const [data, setData] = useState(null)
    const [currentId, setCurrentId] = useState(-1)

    const [input, setInput] = useState(
        {
            name: "",
            description: "",
            category: "",
            size: 0,
            price: 0,
            rating: 0,
            image_url: "",
            release_year: 0,
            is_android_app: 0,
            is_ios_app: 0,
        }
    )

    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
                .then((res) => {
                    setData([...res.data])
                })
                .catch((error) => {
                })
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === "name") {
            setInput({ ...input, name: value })
        } else if (name === "description") {
            setInput({ ...input, description: value })
        } else if (name === "category") {
            setInput({ ...input, category: value })
        } else if (name === "size") {
        setInput({ ...input, size: value })
        } else if (name === "price") {
        setInput({ ...input, price: value })
        } else if (name === "rating") {
        setInput({ ...input, rating: value })
        } else if (name === "image_url") {
        setInput({ ...input, image_url: value })
        } else if (name === "release_year") {
        setInput({ ...input, release_year: value })
        } else if (name === "is_android_app") {
        setInput({ ...input, is_android_app: value })
        } else if (name === "is_ios_app") {
        setInput({ ...input, is_ios_app: value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let {
            name,
            description,
            category,
            size,
            price,
            rating,
            image_url,
            release_year,
            is_android_app,
            is_ios_app
        } = input

        if (currentId === -1) {
            //create data
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', { name, description, category, size, price, rating, image_url, release_year, is_android_app, is_ios_app })
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
            .catch((error) => {
                console.log(error)
                console.log('error disini')
            })   
        } else {
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, { name, description, category, size, price, rating, image_url, release_year, is_android_app, is_ios_app })
            .then((res) => {
            setFetchStatus(true)
            })
        }

        //balikin indikator ke -1
        setCurrentId(-1)
        
        //clear input setelah create data
        setInput(
        {
            name: "",
            description: "",
            category: "",
            size: 0,
            price: 0,
            rating: 0,
            image_url: "",
            release_year: 0,
            is_android_app: 0,
            is_ios_app: 0,
        }
        )
    }

    console.log(data)

    const handleDelete = (event) => {

        let ID_MOBILE_APPS = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
        .then((res) => {
            setFetchStatus(true)
        })

    }

    const handleEdit = (event) => {
        let ID_MOBILE_APPS = parseInt(event.target.value)

        setCurrentId(ID_MOBILE_APPS)

        axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
        .then((res) => {
            let data = res.data
            setInput(
                {
                    name: data.name,
                    description: data.description,
                    category: data.category,
                    size: data.size,
                    price: data.price,
                    rating: data.rating,
                    image_url: data.image_url,
                    release_year: data.release_year,
                    is_android_app: data.is_android_app,
                    is_ios_app: data.is_ios_app
                }
            )
        })
    }

    return (
    <>
        <section className="bg-white px-2 sm:px-4 py-2.5">
        <p>Manage Data</p>
        <Table striped >
            <Table.Head>
                <Table.HeadCell className="bg-purple-500 text-white">NO.</Table.HeadCell>
                <Table.HeadCell className="bg-purple-500 text-white">NAMA</Table.HeadCell>
                <Table.HeadCell className="bg-purple-500 text-white">KATEGORI</Table.HeadCell>
                <Table.HeadCell className="bg-purple-500 text-white">DESCRIPTION</Table.HeadCell>
                <Table.HeadCell className="bg-purple-500 text-white">PRICE</Table.HeadCell>
                <Table.HeadCell className="bg-purple-500 text-white">RATING</Table.HeadCell>
                <Table.HeadCell className="bg-purple-500 text-white">RELEASE YEAR</Table.HeadCell>
                <Table.HeadCell className="bg-purple-500 text-white">SIZE</Table.HeadCell>
                <Table.HeadCell className="bg-purple-500 text-white">IS_ANDROID_APP</Table.HeadCell>
                <Table.HeadCell className="bg-purple-500 text-white">IS_IOS_APP</Table.HeadCell>
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
                            <Table.Cell>{res.category}</Table.Cell>
                            <Table.Cell>{res.description}</Table.Cell>
                            <Table.Cell>{res.price}</Table.Cell>
                            <Table.Cell>{res.rating}</Table.Cell>
                            <Table.Cell>{res.release_year}</Table.Cell>
                            <Table.Cell>{res.size}</Table.Cell>
                            <Table.Cell>{res.is_android_app}</Table.Cell>
                            <Table.Cell>{res.is_ios_app}</Table.Cell>
                            <Table.Cell className="flex">
                                <button color="failure" className="ml-[16px]" onClick={handleEdit} value={res.id}>Edit</button>
                                <button color="failure" className="ml-[16px]" onClick={handleDelete} value={res.id}>Delete</button>
                            </Table.Cell>
                        </Table.Row>
                    </>
                )
            })}
            </Table.Body>
        </Table>
        <form className="flex flex-col mt-[24px]" onSubmit={handleSubmit}>
            <p className="text-lg">Create Data</p>
            <p>Gambar data Game</p>
            <div className="border border-gray-300"></div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="image_url" value="Image URL" />
                </div>
                <TextInput id="image_url" type="text" onChange={handleInput} value={input.image_url} name='image_url' required />
            </div>
            <p>Data Game</p>
            <div className="border border-gray-300"></div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
                </div>
                <TextInput id="name" type="text" onChange={handleInput} value={input.name} name='name' required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="category" value="Category" />
                </div>
                <TextInput id="category" type="text" onChange={handleInput} value={input.category} name='category' required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
                </div>
                <TextInput id="description" type="text" onChange={handleInput} value={input.description} name='description' required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="price" value="Price" />
                </div>
                <TextInput id="price" type="number" onChange={handleInput} value={input.price} name='price' required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="rating" value="Rating" />
                </div>
                <TextInput id="rating" type="number" onChange={handleInput} value={input.rating} name='rating' required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="release_year" value="Release Year" />
                </div>
                <TextInput id="release_year" type="number" onChange={handleInput} value={input.release_year} name='release_year' required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="size" value="Size" />
                </div>
                <TextInput id="size" type="number" onChange={handleInput} value={input.size} name='size' required />
            </div>
            <p>Jenis Perangkat</p>
            <div className="border border-gray-300"></div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="is_android_app" value="Android?" />
                </div>
                <TextInput id="is_android_app" type="number" onChange={handleInput} value={input.is_android_app} name='is_android_app' required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="is_ios_app" value="IOS?" />
                </div>
                <TextInput id="is_ios_app" type="number" onChange={handleInput} value={input.is_ios_app} name='is_ios_app' required />
            </div>
            <Button className="bg-blue-500 w-max p-[8px]" type="submit">Submit</Button>
        </form>
        </section>
    </>
    )
}

export default ManageData