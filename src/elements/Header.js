import React, { useContext } from 'react'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import { AuthContext } from '../auth'

const Header = () => {

    const auth = useContext(AuthContext)

    if (auth.user === null) {
        return <Redirect to='/' />
    }
    
    const { displayName } = auth.user
   
    const [alternativeDisplayName] = auth.user.email.split('@')
    const dn = displayName || alternativeDisplayName

    return (
        <div className='container'>
            <Navbar color='light' light expand='md'>
                <NavbarBrand tag={Link} to='/comment'>Comentaki Service</NavbarBrand>
                <Nav className='ml-auto d-flex justify-content-center align-items-center style={{ flexDirection: "row" }}'>
                    <NavItem>
                        <NavLink>Olá {dn} !</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/userconfig'>Perfil</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/' onClick={auth.signout}>Logout</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header