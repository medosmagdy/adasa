import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom'; // استيراد NavLink
import { SearchNormal1 } from 'iconsax-react';
import LogoPic from '../../assets/logo.png';
import './AppNavbar.css'

const AppNavbar = () => {
    return (
        <>
            <Navbar expand="lg" className="custom-navbar py-3 sticky-top">
                <Container>
                    {/* زر "ابدأ القراءة" */}
                    <div className="d-flex align-items-center order-lg-1">
                        <Button className="btn-start-reading rounded-pill px-4 py-3 fw-bold">
                            ابدأ القراءة
                        </Button>
                        <div className="search-icon-wrapper ms-3">
                            <SearchNormal1 size="20" color="#888" />
                        </div>
                    </div>

                    {/* القائمة المركزية */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none bg-secondary" />
                    <Navbar.Collapse id="basic-navbar-nav" className="order-lg-2">
                        <Nav className="mx-auto nav-links-container rounded-pill px-2 py-1">
                            {/* استخدمنا NavLink هنا مع كلاس nav-link الخاص بـ bootstrap */}


                            <Nav.Link as={NavLink} to="/about" className="nav-item-link px-4 fw-bold">من نحن</Nav.Link>
                            <Nav.Link as={NavLink} to="/blog" className="nav-item-link px-4 fw-bold">المدونة</Nav.Link>
                            <Nav.Link as={NavLink} to="/" className="nav-item-link px-4 fw-bold">الرئيسية</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                    {/* اللوجو */}
                    <Navbar.Brand href="/" className="ms-lg-5 order-lg-3 d-flex align-items-center">
                        <div className="text-end me-2">
                            <div className="brand-name fw-bold mb-0 text-white">عدسة</div>
                            <div className="brand-subtext text-warning xs mt-2">عالم التصوير الفوتوغرافي</div>
                        </div>
                        <div className="logo-icon">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                                <img alt="Photography Logo" className="m-auto" width={45} src={LogoPic} />
                            </div>
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
};

export default AppNavbar;