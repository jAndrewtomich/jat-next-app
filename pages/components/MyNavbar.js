import Image from 'next/image'
import Logo from '../../public/images/niceColors1.svg'

// export default function MyNavbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dar" id="mainNav">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
            // <Image src={ Logo } height="30" width="30" />
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/album">Album</a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Dropdown
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li><a className="dropdown-item" href="#">Action</a></li>
//                   <li><a className="dropdown-item" href="#">Another action</a></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled">Disabled</a>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     )
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" style={{ fontSize: 20 }} id="mainNav">
      <Container fluid style={{ height: 35 }}>
        <Navbar.Brand href="/">
            <Image src={ Logo } height="45" width="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href='/about'>About</NavLink>
            <NavDropdown title="Work" id="basic-nav-dropdown" menuVariant='dark'>
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item> */}
              <NavDropdown.Item href="/album">Data</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.2">
                Other 
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink href='/contact'>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar; 
