import { useState } from "react";
import {
  Button,
  ButtonToggle,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  Spinner,
  UncontrolledDropdown,
} from "reactstrap";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1 className="display-3">สวัสดี ชาวโลก!</h1>
          <Spinner color="primary" />
          <Spinner color="secondary" />
          <Spinner color="success" />
          <Spinner color="danger" />
          <Spinner color="warning" />
          <Spinner color="info" />
          <Spinner color="light" />
          <Spinner color="dark" />
          <h1 className="display-3">????????</h1>
        </Jumbotron>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">หน้าแรก</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">หมวดหมู่การ์ตูน</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.youtube.com/watch?v=MQQHIl0XpbY">
                  ดูชินจัง
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ตัวเลือกเล่น
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>youtube</DropdownItem>
                  <DropdownItem>line tv</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>ชินจังงง ขอนแก่น ^_^</NavbarText>
          </Collapse>
        </Navbar>
        <h1>Home Page</h1>
      </Container>
      <Button outline color="primary">
        Enter Site
      </Button>{" "}
    </div>
  );
};

export default Home;
