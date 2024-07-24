import Carousel from 'react-bootstrap/Carousel'

function CarouselMain() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/310x400"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/310x400"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/310x400"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselMain
