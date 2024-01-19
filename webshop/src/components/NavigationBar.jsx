import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

function NavigationBar() {
    const { t, i18n } = useTranslation();

  const changeLangToEE = () => {
    i18n.changeLanguage("ee")
  }
  const changeLangToEN = () => {
    i18n.changeLanguage("en")
  }
  const changeLangToFIN = () => {
    i18n.changeLanguage("fin")
  }
  const changeLangToRUS = () => {
    i18n.changeLanguage("rus")
  }
  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Kristel's webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t('admin')}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t('shops')}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t('contact')}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t('cart')}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
            <img className='lang' onClick={changeLangToEE} src="/estonia.png" alt="" />
            <img className='lang' onClick={changeLangToEN} src="/english.png" alt="" />
            <img className='lang' onClick={changeLangToFIN} src="/finnish.png" alt="" />
            <img className='lang' onClick={changeLangToRUS} src="/russian.png" alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar