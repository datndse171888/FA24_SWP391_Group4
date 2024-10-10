import { Button, Container, Nav, Navbar, Image } from "react-bootstrap";
import "./header.css";
import Logo from "../../Image/logo/SWP391.png";
import Avatar from "../avatar/avatar.jsx";

const header = () => {
  const token = localStorage.getItem("token");

  return (
    <Navbar className="navbar p-0" data-bs-theme="light">
      <Container>
        <Image src={Logo} className='logo border' alt='Logo' roundedCircle />
        <Navbar.Brand style={{ color: '#3926CD' }} href="/">PawFund</Navbar.Brand>
        {/* <Navbar.Collapse className=''>
           <Nav className='mx-auto row'>
            <Nav.Link style={{color:'#3926CD'}} className='px-5 border col text-center' href="/">HOME</Nav.Link>
            <Nav.Link style={{color:'#3926CD'}} className='px-5 border col text-center' href="/petlist">PET</Nav.Link>
            <Nav.Link style={{color:'#3926CD'}} className='px-5 border col text-center' href="/donate">DONATE</Nav.Link>
            <Nav.Link style={{color:'#3926CD'}} className='px-5 border col text-center' href="/news">NEWS</Nav.Link>
            <Nav.Link style={{color:'#3926CD'}} className='px-5 border col text-center' href="/aboutus">ABOUT US</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
        <Navbar.Collapse className='d-flex justify-content-center'>
          <Nav className=''>
            <Nav.Link style={{ color: '#3926CD' }} className='px-5 py-3 nav-link' href="/">Trang chủ</Nav.Link>
            <Nav.Link style={{ color: '#3926CD' }} className='px-5 py-3 nav-link' href="/viewlist">Thú cưng</Nav.Link>
            <Nav.Link style={{ color: '#3926CD' }} className='px-5 py-3 nav-link' href="/donate">Ủng hộ</Nav.Link>
            <Nav.Link style={{ color: '#3926CD' }} className='px-5 py-3 nav-link' href="/news">Tin tức</Nav.Link>
            <Nav.Link style={{ color: '#3926CD' }} className='px-5 py-3 nav-link' href="/aboutus">Về chúng tôi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {token ?
          <Avatar /> :
          <Button href="/login" variant="outline-dark">
            Login
          </Button>
        }
      </Container>
    </Navbar>
  );
};

export default header;
