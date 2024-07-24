import { Col, Container, Row } from 'react-bootstrap'
import CardService from './CardService'
import { useInView } from 'react-intersection-observer'

function Services() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })
  return (
    <Container id="services">
      <Row>
        <Col
          ref={ref}
          className={`service-card main-service-card ${
            inView ? 'show' : 'content-off'
          }`}
          sm={12}
          lg={6}
          xl={4}
        >
          <h3 className="text-center text-nowrap">
            Риэлторские услуги с <br /> <strong>полным</strong> сопровождением
          </h3>
        </Col>
        <Col sm={12} lg={6} xl={4}>
          <CardService img="url('./images/kaliningrad.jpg')">
            Покупка
          </CardService>
        </Col>
        <Col sm={12} lg={6} xl={4}>
          <CardService img="url('./images/kaliningrad-2.jpg')">
            Продажа
          </CardService>
        </Col>

        <Col sm={12} lg={6} xl={4}>
          <CardService img="url('./images/kaliningrad.jpg')">
            Новостройки
          </CardService>
        </Col>
        <Col sm={12} lg={6} xl={4}>
          <CardService img="url('./images/kaliningrad-2.jpg')">
            Ипотека
          </CardService>
        </Col>
        <Col sm={12} lg={6} xl={4}>
          <CardService img="url('./images/sea.jpg')">Оценка</CardService>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
