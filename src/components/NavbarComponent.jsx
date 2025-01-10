import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FavoritesContext } from '../context/FavoritesContext';
import { isEmpty } from 'lodash';
import { NavLink, Link } from 'react-router';
import { Badge } from 'react-bootstrap';

export const NavbarComponent = () => {

    const { favorites, deleteFavorite } = useContext(FavoritesContext)

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to={"/"}>
                    <Navbar.Brand>SWAPI</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {!isEmpty(favorites) && (
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                {favorites.map((favorite) => {
                                    return (
                                        <NavDropdown.Item key={favorite.type + favorite.id}>
                                            <Link to={`/${favorite.type}/${favorite.id}`}>
                                                {favorite.name}
                                            </Link>
                                            <Badge onClick={() => deleteFavorite(favorite.id, favorite.type)}>❌</Badge>
                                        </NavDropdown.Item>
                                    )
                                })}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                )}
            </Container>
        </Navbar>
    )
}