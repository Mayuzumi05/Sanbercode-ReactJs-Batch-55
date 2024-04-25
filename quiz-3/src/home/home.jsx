"use client";

import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Home() {
    const [data, setData] = useState(null)

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
  return (
    <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* batas awal Content Section */}
        <section className="bg-gray-200 p-5">
            <div className="container mx-auto mt-10">
            <h1 className="text-xl font-bold ">Find your data that you need!</h1>
            </div>
            <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
            {/* Batas awal Card section */}
            { data !== null && data.map((res, number) => {
                return (
                    <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                        src={res.image_url}
                        className="w-1/3 bg-cover bg-center bg-landscape"
                        />
                        <div className="w-2/3 p-4">
                        <h1 className="text-gray-900 font-bold text-2xl">
                            {res.name}
                        </h1>
                        <small>{res.release_year}</small>
                        <p className="mt-2 text-gray-600 text-sm">
                            {res.description}
                        </p>
                        <div className=" item-center mt-2 text-gray-500">
                            <span>{res.category}</span>
                            <span>{res.size}</span>
                            <span>, {res.is_android_app} &amp; {res.is_ios_app}</span>
                        </div>
                        <div className="flex item-center justify-between mt-3">
                            <h1 className="text-gray-700 font-bold text-xl">Rp {res.price}</h1>
                            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                            {res.rating} Ratings
                            </button>
                        </div>
                        </div>
                    </div>
                )
            })}
            {/* Batas akhir Card section */}
            </div>
        </section>
        {/* batas akhir Content Section */}
        </>
  )
}

export default Home