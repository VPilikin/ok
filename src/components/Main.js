import { Container, Button, Row, Col } from 'react-bootstrap'
import ReactTyped from 'react-typed-component'
import 'react-typed-component/dist/animatedCursor.css'
import CarouselMain from './sections-main/Carousel'
import { useInView } from 'react-intersection-observer'

const Main = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  return (
    <Container
      ref={ref}
      className={`container-main ${inView ? 'show' : 'content-off'}`}
    >
      <Row className="align-items-center">
        <Col xs={12} lg={7}>
          <h1 className="d-none">
            Помогаем купить, Помогаем продать, Помогаем оформить ипотеку
          </h1>
          <ReactTyped
            strings={[
              'Помогаем купить',
              'Помогаем продать',
              'Помогаем оформить ипотеку',
            ]}
            typeSpeed={100}
            className="main-head_1 "
            loop
          />

          <h2 className="main-head_2">
            Агентство недвижимости О'КЕЙ <br /> Профессионалы на рынке
            недвижимости
          </h2>
          <div>
            <Button className="button-main" variant="primary">
              Оставить заявку
            </Button>
            <Button className="button-main--info" variant="link">
              Информация
            </Button>
          </div>
        </Col>
        <Col className="d-none d-lg-block" lg={5}>
          <CarouselMain />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
