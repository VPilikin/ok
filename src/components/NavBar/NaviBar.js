import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap'
import NavDrop from './NavDrop'
import { useState } from 'react'

const links = [
  {
    name: 'Услуги',
    href: '#services',
    childrens: [
      {
        name: 'Покупка',
        id: 'ser1',
        href: '/buy',
      },
      {
        name: 'Продажа',
        id: 'ser2',
        href: '/sell',
      },
      {
        name: 'Ипотека',
        id: 'ser3',
        href: '/credit',
      },
      {
        name: 'Аренда',
        id: 'ser4',
        href: '/rent',
      },
    ],
  },
  { name: 'Новостройки', href: '/newbuildings' },
  {
    name: 'Калининград',

    href: '/kaliningrad',
    childrens: [
      {
        name: 'Побережье',
        id: 'kd1',
        href: '/sea',
      },
      {
        name: 'Город',
        id: 'kd2',
        href: '/city',
      },
      {
        name: 'Область',
        id: 'kd3',
        href: '/region',
      },
    ],
  },
  {
    name: 'О компании',

    href: '/about',
    childrens: [
      {
        name: 'Информация',
        id: 'ab1',
        href: '/info',
      },
      {
        name: 'Контакты',
        id: 'ab2',
        href: '/contacts',
      },
    ],
  },
]

const NaviBar = () => {
  const [active, setActive] = useState('')

  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        variant="dark"
        className="px-4 py-0 custom-nav color-1 flex-column"
      >
        <Container className="">
          <Navbar.Brand className="me-4">
            <Container>
              <Image
                width="100"
                height="49"
                className="my-3 d-inline-block align-top logo-svg"
              />
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle
            className="custom-toggler"
            aria-controls="navbarScroll"
            onTouchStart={() => setActive('')}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              {links.map((link, i) => (
                <Nav.Link
                  key={'li' + i}
                  href={'childrens' in link ? '' : link.href}
                  onMouseEnter={() => setActive(link.href)}
                  onTouchStart={() => setActive(link.href)}
                  className="mx-2 text-white text-uppercase custom-nav-link"
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
            <Button
              className="my-3"
              href="tel:+7 (4012) 525-667"
              variant="outline-light"
              onMouseEnter={() => setActive('')}
            >
              <span>+7 (4012) 525-667</span>
            </Button>
          </Navbar.Collapse>
        </Container>
        {active && (
          <NavDrop
            className="custom-drop d-block"
            onMouseLeave={() => setActive('')}
            links={links.filter((el) => el.href === active)[0].childrens}
          />
        )}
      </Navbar>
    </>
  )
}

export default NaviBar
