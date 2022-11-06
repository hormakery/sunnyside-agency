import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {
    Logo,
    Menu,
    List,
    Title,
    Header,
    NavMenu,
    Maxwidth,
    NavWrapper,
    Arrowimage,
    HeaderSection,
    NavbarWrapper,
} from './Navbar.styles'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <Maxwidth>
    <Header>
    <NavbarWrapper>
        <Link to='/'><Logo src='../images/logo.svg' alt='logo'/></Link>

        <Menu onClick={()=>{setIsOpen(!isOpen)}}>
            {!isOpen ? 
            <img src='../images/icon-hamburger.svg' alt='burgermenu'/> 
            :
            <img src='../images/icon-hamburger.svg' alt='burgermenu'/>  
        }
        </Menu>

        <NavWrapper>
            <NavMenu className={
                isOpen ? 'nav-links-mobile' : 'links'
            }>
                <List>
                    <Link to='/about' className='links'>About</Link>
                </List>

                <List>
                    <Link to='/services' className='links'>Services</Link>
                </List>

                <List>
                    <Link to='/project' className='links'>Projects</Link>
                </List>

                <List>
                    {/* <div>
                    </div> */}
                    <Link to='/contact' className='links'>Contact</Link>
                </List>
            <div className='triangle'></div> 
            </NavMenu>
        </NavWrapper>
    </NavbarWrapper>

    <HeaderSection>
        <Title>We are creative</Title>
        <picture>
        <Arrowimage src='../image/icon-arrow-down.svg' alt='arrow down'  className='header-arrow' />
        </picture>
    </HeaderSection>
    </Header>
    </Maxwidth>
  )
}

export default Navbar


