import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const dashboard = () => {
  return (
    <div >
      <Navbar.Collapse className='d-flex justify-content-center'>
        <Nav className=''>
          <Nav.Link className='px-5 py-3 nav-link' href="/">User</Nav.Link>
          <Nav.Link className='px-5 py-3 nav-link' href="/viewlist">Donation</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  )
}

export default dashboard
