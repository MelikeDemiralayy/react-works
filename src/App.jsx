import Food from "./Food"
import Footer from "./Footer"
import Header from "./Header"
import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student"


function App() {


  return (
    <>
     <Header/>
     <Food/>
     <Card/>
     <Button/>
     <Student  name = "Spongebob" age={30} isStudent={true} />
     <Student  name = "Melike" age={24} isStudent={false} />
     <Student  name = "İrem" age={20} isStudent={true} />
     <Student/> 
     <Footer/>
   
    </>
  )
}

export default App
