import Card from 'react-bootstrap/Card'
import { useInView } from 'react-intersection-observer'

const CardService = ({ children, img }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  return (
    <Card
      ref={ref}
      className={`service-card ${inView ? 'show' : 'content-off'}`}
    >
      <div className="service-card-img" style={{ backgroundImage: img }}></div>
      <div className="service-card-name">
        <p className="service-card-text">{children}</p>
      </div>
    </Card>
  )
}

export default CardService
