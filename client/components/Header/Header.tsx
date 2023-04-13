import React ,{useState}from 'react'
import {Wapper,HeaderWrapper, Logo, Nav, NavItem, Wrapper,Wrapper2, Lens, DropdownS,DropDownToggle, DropDownMenu, Input} from './styles'
import Link from "next/link";
import { RxHome } from "react-icons/rx";
import { FaNewspaper } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';




function Header() {
    const [show, setShow] = useState(false);
  return (
    <Wapper>
    <HeaderWrapper>
    <Wrapper>
        <Logo>logo</Logo>
        <Nav>
        <NavItem>
              <RxHome /><Link href='/'><span>Home</span></Link> 
        </NavItem>
      
        <NavItem>
              <FaNewspaper/><span>About us</span> 
        </NavItem>
        <NavItem className='loginBtn'><Link href='/signin'>
              <FaUser/><span>Signin {' '}/ {' '}Login</span> </Link>
        </NavItem>
        </Nav>
        </Wrapper>
    </HeaderWrapper>
       
    </Wapper>
  )
}

export default Header