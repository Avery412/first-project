import Header from './components/Header'
import MainPage from './components/MainPage'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MainPage />
      <About />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App