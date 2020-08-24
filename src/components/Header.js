import React from 'react';
import { Navbar } from 'react-bootstrap';
import {DiReact} from "react-icons/di";

const Header = () => (

    <div>
        <Navbar expand="lg" variant="dark" bg="dark">
            <DiReact className='m-2'></DiReact>
            <Navbar.Brand className='text-center'>TODO React Application</Navbar.Brand>
        </Navbar>
    </div>
)

export default Header;