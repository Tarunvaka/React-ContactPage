import './App.css'
import ContactForm from './components/contactForm/ContactForm'
import ContactHeader from './components/contactHeader/ContactHeader'
import Navigation from './components/navigation/Navigation'

const App = ()=>{
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  )
}

export default App