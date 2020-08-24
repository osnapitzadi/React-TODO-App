import React from 'react';
import { Navbar } from 'react-bootstrap';
import { DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai"

const Header = () => (

    <div>
        <Navbar expand="lg" variant="dark" bg="dark">
            <DiReact className='m-2'></DiReact>
            <Navbar.Brand className='text-center flex-grow-1'>TODO React Application</Navbar.Brand>
            <a href='https://github.com/osnapitzadi/React-TODO-App'><AiFillGithub href='https://github.com/osnapitzadi/React-TODO-App' className='m-2'></AiFillGithub></a>
        </Navbar>
    </div>
)

export default Header;