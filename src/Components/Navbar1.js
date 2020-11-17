import React from 'react'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import {NavLink,Route,Link} from 'react-router-dom'
function Navbar1(){
    return (
    
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Nav.Link>
            <NavLink to="/" className="navbar-item" activeClassName="is-active">Home</NavLink>
            </Nav.Link>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link> 
                        <NavLink className="navbar-item" activeClassName="is-active" to="/">Sản phẩm hot</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                         <NavLink className="navbar-item" activeClassName="is-active" to='/'>Bán chạy nhất</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                         <NavLink className="navbar-item" activeClassName="is-active" to="/news">Bài báo mới</NavLink>
                    </Nav.Link>
                   
                    <NavDropdown title="Đánh giá tốt nhất" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Dưới 3 triệu</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Dưới 5 triệu</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Dưới 8 triệu</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Trên 8 triệu</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link>
                         <NavLink className="navbar-item" activeClassName="is-active" to="/">Thông tin</NavLink>
                    </Nav.Link>
                   <Nav.Link>
                        <NavLink className="navbar-item" activeClassName="is-active"to="/">Liên hệ</NavLink>
                   </Nav.Link>
                   
                </Nav>
        </Navbar.Collapse>
</Navbar>
        
    );
}
export default Navbar1;