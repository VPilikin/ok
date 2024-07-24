import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FaTelegram, FaWhatsapp, FaViber } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer>
      <Container className="color-1 p-0" fluid>
        <Container className="pt-2 separator" fluid />
        <Container className="d-flex justify-content-center">
          <Image
            width="140"
            height="68"
            className="my-3 align-top logo-svg-max"
          />
        </Container>
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="my-3 d-none d-lg-block">
              <Row>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa8c4c520232b868551fc8f3cfbe7153320026e1a886fbc516425fbaefa23251c&amp;source=constructor"
                  width="100%"
                  height="240"
                  frameborder="0"
                ></iframe>
              </Row>
            </Col>
            <Col md={12} lg={2}>
              <Row className="justify-content-center">
                <Button
                  href="#"
                  className="text-white custom-nav-link button-footer"
                >
                  Услуги
                </Button>
              </Row>
              <Row className="justify-content-center">
                <Button
                  href="#"
                  className="text-white custom-nav-link button-footer"
                >
                  Контакты
                </Button>
              </Row>
              <Row className="justify-content-center">
                <Button
                  href="#"
                  className="text-white custom-nav-link button-footer"
                >
                  Вакансии
                </Button>
              </Row>
            </Col>
            <Col md={12} lg={2}>
              <Row className="justify-content-center">
                <Button
                  href="#"
                  className="text-white custom-nav-link button-footer"
                >
                  Новостройки
                </Button>
              </Row>
              <Row className="justify-content-center">
                <Button
                  href="#"
                  className="text-white custom-nav-link button-footer"
                >
                  О Нас
                </Button>
              </Row>
              <Row className="justify-content-center">
                <Button
                  href="#"
                  className="text-white custom-nav-link button-footer"
                >
                  Вакансии
                </Button>
              </Row>
            </Col>
          </Row>
          <Row className="align-items-top pb-3">
            <Col sm={8}>
              <p className="text-white">
                г. Калининград, пер. Парковый 7 корпус 3, тел. 525-667 <br />
                Время работы ПН-ПТ с 10:00 до 18:00
              </p>
            </Col>

            <Col sm={4} className="text-white d-flex justify-content-center">
              <div className="footer-icon">
                <FaTelegram />
              </div>
              <div className="footer-icon">
                <FaWhatsapp />
              </div>
              <div className="footer-icon">
                <FaViber />
              </div>
              <div className="footer-icon">
                <SlSocialVkontakte />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  )
}

export default Footer
