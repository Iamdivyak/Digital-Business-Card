import './App.css'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import profile from "./assets/divya.jpg"


function App() {

  return (
    <div className="App">
      <div className="app--container">
      <Header img={profile}/>
      <Main />
      <Footer />
      </div>
    </div>
  )
}

export default App
