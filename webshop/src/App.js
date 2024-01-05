import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import NotFound from './pages/global/NotFound';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

function App() {
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
    <div className="App">

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

      <Routes>
        <Route path='' element={ <HomePage /> } /> 
        <Route path='cart' element={ <Cart /> } /> 
        <Route path='contact' element={ <ContactUs /> } /> 
        <Route path='shops' element={ <Shops /> } /> 
        <Route path='product' element={ <SingleProduct /> } /> 
        <Route path='admin' element={ <AdminHome /> } />
        <Route path='admin/add' element={ <AddProduct /> } />
        <Route path='admin/edit/:product_id' element={ <EditProduct /> } />
        <Route path='admin/products' element={ <MaintainProducts /> } />
        <Route path='admin/categories' element={ <MaintainCategories /> } />
        <Route path='admin/shops' element={ <MaintainShops /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>


      <ToastContainer
       position="top-right"
       theme="dark"/>

    </div>
  );
}

export default App;
