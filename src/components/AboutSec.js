import About from './sections-main/About'
import { useInView } from 'react-intersection-observer'
import { Container } from 'react-bootstrap'
import MediaQuery from 'react-responsive'

const AboutSec = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  })

  return (
    <MediaQuery minWidth={768}>
      <Container
        ref={ref}
        className={`py-5 color-1 my-5 ${inView ? 'show' : 'content-off'}`}
        fluid
      >
        <About />
      </Container>
    </MediaQuery>
  )
}

export default AboutSec
