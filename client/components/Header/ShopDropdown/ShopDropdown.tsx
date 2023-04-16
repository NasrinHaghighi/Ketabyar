import React ,{useState}from 'react'
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import {DropDownMenuShop,DropdownSS,  DropDownToggle, DropdownItem,Top, Bottom, Off, Shop, ImageDiv, First, Second, Third, Fourth} from './styles'

import {Images} from '../../../helpers/Image'
//import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
//import {selectedScroll} from '../../../features/scrollTo'


function ShopDropdown() {
    const [show, setShow] = useState(false);
// const dispatch=useAppDispatch()
//     const handelScroll=(f:string)=>{
//         //e.prventDefault()
//         //dispatch(selectedScroll(f))
    
//     }

  return (
    <DropdownSS
    onMouseOver={() => setShow(true)}
    onMouseLeave={() => setShow(false)}
    >
    <DropDownToggle variant="success" id="dropdown-basic">
      Shop
    </DropDownToggle>

    <DropDownMenuShop show={show}>
        <Top>
            <First>
                <DropdownItem ><Link href='/shop'>Art</Link></DropdownItem>
               <DropdownItem href="/"        
                ><Link href='/shop'>Biography</Link></DropdownItem>

                <DropdownItem href="/"
                ><Link href='/shop'>Children Books</Link></DropdownItem>
                <DropdownItem href="/shop"
                ><Link href='/shop'>Craft & Hobbies</Link></DropdownItem>
            </First>
           
            <Second>
            <DropdownItem ><Link href='/shop'>Romance</Link></DropdownItem>
               <DropdownItem href="/"        
                ><Link href='/shop'>Fantasy</Link></DropdownItem>

                <DropdownItem href="/"
                ><Link href='/shop'>Historical fiction</Link></DropdownItem>
                <DropdownItem href="/shop"
                ><Link href='/shop'>War</Link></DropdownItem>
            </Second>
            <Third>
            <DropdownItem ><Link href='/shop'>Short stories</Link></DropdownItem>
               <DropdownItem href="/"        
                ><Link href='/shop'>Women’s fiction</Link></DropdownItem>

                <DropdownItem href="/"
                ><Link href='/shop'>Mystery</Link></DropdownItem>
                
            </Third>
            <Fourth>
            <Images src='/books/23.jpg' width={200} height={250}   alt="book"/>
            </Fourth>
        </Top>
        <Bottom>
            <ImageDiv>
        <Images src='/images/drop.png' width={600} height={200}   alt="book"/></ImageDiv>
        <Off>
            <span>20%  Off Select Books</span>
            <h1>Summer’s Most Anticipated Reads</h1>
            <Shop>Shop Now</Shop>
        </Off>

        </Bottom>
   

      {/* <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
    </DropDownMenuShop>
  </DropdownSS>
  )
}

export default ShopDropdown


// onClick={()=>handelScroll('featuers')}