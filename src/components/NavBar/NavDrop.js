import { Nav } from 'react-bootstrap'

const NavDrop = ({ links, ...props }) => {
  if (links) {
    return (
      <Nav
        {...props}
        className="container justify-content-center custom-drop"
        activeKey="/home"
      >
        {links.map((link) => (
          <Nav.Item key={link.id} className="text-uppercase">
            <Nav.Link href={link.href} className="custom-drop-item m-1">
              {link.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    )
  }
}

export default NavDrop
