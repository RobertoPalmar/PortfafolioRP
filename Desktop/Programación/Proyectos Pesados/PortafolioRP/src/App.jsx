import 'aos/dist/aos.css';
import './App.css'
import AOS from 'aos'
import { Button, Carousel, Col, Container, Image, Nav, Navbar, Row, Stack } from 'react-bootstrap'

function App() {
  AOS.init()
  return (
    <Container
      fluid
      className='p-0 w-100 m-0'
    >
      <Stack
        id="0"
        data-aos="fade-up"
        data-aos-duration="1000"
        direction="vertical"
        className='col-lg-7 col-10 mx-auto align-items-center justify-content-center vh-100'
      >
        <img
          data-aos="zoom-in"
          data-aos-duration="1200"
          src="../public/img/LOGO CORTO.png"
          className='w-75 logo mt-1'
        />
        <div
          className='text-center my-2 text-dark'
        >
          <h1 className='fw-bold title outline'>ROBERTO PALMAR</h1>
          <h2 className='m-0 fw-bold '>Ingeniero en Informática</h2>
          <h3 className='m-0 fw-nor'>Programador FullStack</h3>
        </div>
        <Button
          href='../public/files/Roberto Palmar CV.pdf'
          download="Roberto Palmar CV.pdf"
          className='fw-bold'
          variant='outline-secondary'
        >
          Descarga CV
        </Button>
      </Stack>

      {/* <img className="transition" src="../public/img/TRANSICION 1.svg" alt="" /> */}

      <Navbar
        expand="lg"
        sticky="top"
        className='bg-primary px-1 py-0'
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#0">
            <img src="../public/img/LOGO CORTO 2.png" className='brand' />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              <Nav.Link className='pb-0' href='#1'>HABILIDADES</Nav.Link>
              <Nav.Link className='pb-0' href='#2'>PROYECTOS</Nav.Link>
              <Nav.Link className='pb-1' href='#3'>CONTACTO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row
        id="1"
        className='bg-dark mx-0 justify-content-center section-1 py-5'
      >
        <h1 className='subtitle outline dark text-center'>HABILIDADES</h1>
        <Col
          xs={10} md={5}
          className='m-1 p-2 box shadow'
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className='text-white mb-2 text-center'>FRONTEND</h2>
          <Stack direction='horizontal' className='flex-wrap justify-content-center'>
            <div className='item'>
              <img src='public/img/icons/css.png' />
              <p className='text-white'>CSS</p>
            </div>
            <div className='item'>
              <img src='public/img/icons/html.png' />
              <p className='text-white'>HTML</p>
            </div>
            <div className='item'>
              <img src='public/img/icons/js.png' />
              <p className='text-white'>JS</p>
            </div>
            <div className='item'>
              <img src='public/img/icons/react.png' />
              <p className='text-white'>REACT</p>
            </div>
            <div className='item'>
              <img src='public/img/icons/sass.png' />
              <p className='text-white'>SASS</p>
            </div>
            <div className='item mx-2 mx-md-1'>
              <img src='public/img/icons/bootstrap.png' />
              <p className='text-white'>BOOTSTRAP</p>
            </div>
          </Stack>
          <h5 className='text-white text-center'>Desarrollo de diseños responsive, manejo de eventos, estilos personalizados, logica de componentes react</h5>
        </Col>
        <Col
          xs={10} md={5}
          className='m-1 p-2 box shadow'
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className='text-white mb-2 text-center'>BACKEND</h2>
          <Stack direction='horizontal' className='flex-wrap justify-content-center'>
            <div className='item'>
              <img src='public/img/icons/nodejs.png' />
              <p className='text-white'>NODEJS</p>
            </div>
            <div className='item'>
              <img src='public/img/icons/express.png' />
              <p className='text-white'>EXPRESS</p>
            </div>
            <div className='item large'>
              <img src='public/img/icons/mysql 2.png' />
              <p className='text-white'>MYSQL</p>
            </div>
            <div className='item'>
              <img src='public/img/icons/mongodb.png' />
              <p className='text-white'>MONGODB</p>
            </div>
            <div className='item large'>
              <img src='public/img/icons/php.png' />
              <p className='text-white'>PHP</p>
            </div>
          </Stack>
          <h5 className='text-white text-center'>Creacion y configuracion de APIs con Express, maquetado, conexion y consulta de BDDs, validaciones y seguridad </h5>
        </Col>
      </Row>

      <Row
        id="2"
        className='bg-info mx-0 justify-content-center py-5'
      >
        <h1 className='subtitle outline dark text-center opacity-75'>PROYECTOS</h1>
        <Col
          xs={11}
          className='m-2 p-2 bg-dark-o'
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Row
          >
            <Col xs={12} md={6}
              className='d-flex flex-column justify-content-center'
            >
              <Image src='../public/img/mockups/BROKLINE MOCKUP 1.jpg' fluid
              />
            </Col>
            <Col xs={12} md={6}
              className='my-1 d-flex flex-column justify-content-center'
            >
              <h2 className='text-white my-1'>BROKLINEAPP</h2>
              <h5 className='text-white'>Aplicacion Web para gestion de corretaje de seguros medicos y medicina prepagada</h5>
              <div>
                <Button variant='outline-secondary' className='tag'>HTML</Button>
                <Button variant='outline-secondary' className='tag'>CSS</Button>
                <Button variant='outline-secondary' className='tag'>REACT</Button>
                <Button variant='outline-secondary' className='tag'>BOOTSTRAP</Button>
                <Button variant='outline-secondary' className='tag'>NODEJS</Button>
                <Button variant='outline-secondary' className='tag'>EXPRESS</Button>
                <Button variant='outline-secondary' className='tag'>MYSQL</Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          xs={11}
          className='m-2 p-2 bg-dark-o'
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <Row>
            <Col xs={12} md={6}
              className='my-1 mb-2 d-flex flex-column justify-content-center text-end'
            >
              <h2 className='text-white my-1'>PLANTILLAS FRONT</h2>
              <h5 className='text-white'>Diseños front varios para paginas web con distintas temáticas y estilo</h5>
              <div>
                <Button variant='outline-secondary' className='tag'>HTML</Button>
                <Button variant='outline-secondary' className='tag'>SASS</Button>
                <Button variant='outline-secondary' className='tag'>JS</Button>
                <Button variant='outline-secondary' className='tag'>BOOTSTRAP</Button>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Carousel
                variant='dark'
                indicators={false}
                className='shadow'
              >
                <Carousel.Item>
                  {/* <a href="https://capstyle.netlify.app"> */}
                  <Image src='../public/img/mockups/CAPSTYLE MOCKUP.jpg' fluid />
                  {/* </a> */}
                </Carousel.Item>
                <Carousel.Item>
                  {/* <a href="https://cocinahogar.netlify.app"> */}
                  <Image src='../public/img/mockups/COCINA HOGAR MOCKUP.jpg' fluid />
                  {/* </a> */}
                </Carousel.Item>
                <Carousel.Item>
                  {/* <a href="https://criptoworld.netlify.app"> */}
                  <Image src='../public/img/mockups/CRIPTOWORLD MOCKUP.jpg' fluid />
                  {/* </a> */}
                </Carousel.Item>
                <Carousel.Item>
                  {/* <a href="https://degrademarket.netlify.app"> */}
                  <Image src='../public/img/mockups/DEGRADE MARKET MOCKUP.jpg' fluid />
                  {/* </a> */}
                </Carousel.Item>
                <Carousel.Item>
                  {/* <a href="https://goturismo.netlify.app"> */}
                  <Image src='../public/img/mockups/GO TURISMO MOCKUP.jpg' fluid />
                  {/* </a> */}
                </Carousel.Item>
                <Carousel.Item>
                  {/* <a href="https://shoespeed.netlify.app"> */}
                  <Image src='../public/img/mockups/SHOESPEED MOCKUP.jpg' fluid />
                  {/* </a> */}
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        id="3"
        className='bg-primary mx-0 justify-content-center py-5'
      >
        {/* <h1 className='subtitle text-white text-center opacity-75'>CONTACTOS</h1> */}
        <Col
          xs={11}
        >
          <Row>
            {/* <Col xs={12} className='my-2'>
              <Image src='../public/img/CONTACTOS.jpg' fluid/>
            </Col> */}
            <Col xs={12}>
              <div className='m-2'>
                <h3 className='text-white text-center fw-bold m-1'>¿Necesitas ayuda con algun proyecto?</h3>
                <h2 className='text-white fw-bold text-center'>CONTÁCTAME</h2>
              </div>
              <Stack direction='horizontal' className='justify-content-center'>
                <a href="mailto:roberto.palmar.c@gmail.com?Subject=Quisiera%20Contactarte" target='_blank' className='icon mx-1'>
                  <i className="bi bi-envelope"></i>
                </a>
                <a href="https://github.com/RobertoPalmar" target='_blank' className='icon mx-1'>
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://wa.me/qr/OPJN4VMJDRVQG1" target='_blank' className='icon mx-1'>
                  <i className="bi bi-whatsapp"></i>
                </a>
              </Stack>
              <a href="mailto:roberto.palmar.c@gmail.com?Subject=Quisiera%20Contactarte" target='_blank' className="contact my-0">ROBERTO.PALMAR.C@GMAIL.COM</a>
              <a href="https://github.com/RobertoPalmar" target='_blank' className="contact my-0">@ROBERTOPALMAR</a>
              <a href="https://wa.me/qr/OPJN4VMJDRVQG1" target='_blank' className="contact my-0">+58 412 763 5070</a>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  )
}

export default App
