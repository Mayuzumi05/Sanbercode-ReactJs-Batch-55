import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <Navbar fluid rounded className="bg-[#F3F4F8]">
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="https://sanbercode.com/logo-horizontal.png" className="mr-3 h-6 mobile:h-9" alt="Sanbercode Logo" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/dashboard" className="text-[#003366]">
                    Home
                </Navbar.Link>
                <Navbar.Link href="/dashboard/list-job-vacancy" className="text-[#003366]">Jov Vacancy</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav