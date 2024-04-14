"use client";

import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import React from 'react'

function Tugas9() {
  return (
    <div className="w-3/4 m-auto">
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
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {1}
                </Table.Cell>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Algoritma</Table.Cell>
                <Table.Cell>80</Table.Cell>
                <Table.Cell>A</Table.Cell>
                <Table.Cell className="flex">
                    <Button color="light">Edit</Button>
                    <Button color="failure" className="ml-[16px]">Delete</Button>
                </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {2}
                </Table.Cell>
                <Table.Cell>Doe</Table.Cell>
                <Table.Cell>Matematika</Table.Cell>
                <Table.Cell>70</Table.Cell>
                <Table.Cell>B</Table.Cell>
                <Table.Cell className="flex">
                    <Button color="light">Edit</Button>
                    <Button color="failure" className="ml-[16px]">Delete</Button>
                </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {3}
                </Table.Cell>
                <Table.Cell>Frank</Table.Cell>
                <Table.Cell>Kalkulus</Table.Cell>
                <Table.Cell>60</Table.Cell>
                <Table.Cell>C</Table.Cell>
                <Table.Cell className="flex">
                    <Button color="light">Edit</Button>
                    <Button color="failure" className="ml-[16px]">Delete</Button>
                </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {4}
                </Table.Cell>
                <Table.Cell>Jason</Table.Cell>
                <Table.Cell>Basis Data</Table.Cell>
                <Table.Cell>90</Table.Cell>
                <Table.Cell>A</Table.Cell>
                <Table.Cell className="flex">
                    <Button color="light">Edit</Button>
                    <Button color="failure" className="ml-[16px]">Delete</Button>
                </Table.Cell>
            </Table.Row>
            </Table.Body>
      </Table>
    </div>
  )
}

export default Tugas9