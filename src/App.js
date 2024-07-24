import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'animate.css'
import Main from './components/Main'
import NaviBar from './components/NavBar/NaviBar'
import Services from './components/sections-main/Services'
import AboutSec from './components/AboutSec'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <NaviBar />
      <Main />
      <AboutSec className="d-none" />
      <Services />
      <Footer />
    </>
  )
}

export default App
