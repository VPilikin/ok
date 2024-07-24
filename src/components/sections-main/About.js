import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import mainCard from '../../images/main-card.jpg'
import { useInView } from 'react-intersection-observer'
import MediaQuery from 'react-responsive'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  })

  return (
    <MediaQuery minWidth={768}>
      <Container className={inView ? 'about-animation' : 'about-off'}>
        <Row className="align-items-center">
          <Col md={12} lg={6} className="about-img">
            <Image ref={ref} src={mainCard} rounded fluid />
          </Col>
          <Col md={12} lg={6} className="about-description">
            <div className="mb-5">
              <h4>
                Почему <strong>нам доверяют</strong>!
              </h4>
            </div>
            <div>
              <p>
                Ежедневно наши специалисты помогают
                <strong> безопасно и выгодно</strong> совершать сделки с
                недвижимостью
              </p>
              <p>
                Мы работаем над самыми <strong>сложными кейсами</strong> и
                сводим все риски к нулю для наших клиентов
              </p>
              <p>
                Полное сопровождение <strong>на каждом</strong> этапе сделки
              </p>
            </div>
            <Button className="text-uppercase about-button" variant="link">
              <strong href="#services">Наши услуги</strong>
            </Button>
          </Col>
        </Row>
      </Container>
    </MediaQuery>
  )
}

export default About
