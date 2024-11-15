import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import './dashboard.css'
const dashboard = () => {
  return (
    <div className='row dashboardbig' >
      <div className='col-3 dashboardbar'>
        <div className='titleDashboard'>
          <h1>
            Dashboard
          </h1>
        </div>
        <div>
          <Nav className=' flex-column'>
            <Nav.Link className='nav-link bodyDashboard' href="/">User</Nav.Link>
            <Nav.Link className='nav-link bodyDashboard' href="/">Donation</Nav.Link>
            <Nav.Link className='nav-link bodyDashboard' href="/">Cat</Nav.Link>
            <Nav.Link className='nav-link bodyDashboard' href="/">Donor</Nav.Link>
          </Nav>
        </div>
      </div>
      <div className='col-9 '>
        <div className='row dashboardMain'>
          <div className='col-6 col1Dashboard' >
            <div className='DboardUser'>
              <h1 className='titleUser'>User</h1>
              <Button className='btnUser' variant="outline-primary" href="/">User</Button>
            </div>

            <div className='DboardDonation'>
              <h1>Donation</h1>
              <Button variant="outline-primary" href="/">Donation</Button>
            </div>

          </div>
          <div className='col-6' >
            <div className='DboardCat'>
              <h1>Number of cat</h1>
              <Button variant="outline-primary" href="/">Cat</Button>
            </div>

            <div className='DboardDonor'>
              <h1>Donor</h1>
              <Button variant="outline-primary" href="/">Donor</Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default dashboard
