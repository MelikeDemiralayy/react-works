import Food from "./Food"
import Footer from "./Footer"
import Header from "./Header"
import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"
import List from "./List"
import Click from "./Click"
import MyComponent from "./MyComponent"
import Counter from "./Counter"
import OnChange from "./onChange"
import ColorPicker from "./ColorPicker"
import UpdaterFunction from "./UpdaterFunction"
import UpdateObjects from "./UpdateObjects"
import UpdateArrays from "./UpdateArrays"


function App() {


  return (
    <>
     {/* <Header/>
     <Food/>
     <Card/>
     <Button/>
     <Student  name = "Spongebob" age={30} isStudent={true} />
     <Student  name = "Melike" age={24} isStudent={false} />
     <Student  name = "İrem" age={20} isStudent={true} />
     <Student/> 
     <UserGreeting isLoggedIn={false} username="Melike"/>
     <List/>
     <Click/>
     <MyComponent/> */}
     <Counter/>
    <OnChange/>
    <ColorPicker/>
    <UpdaterFunction/>
    <UpdateObjects/>
    <UpdateArrays/>
     {/* <Footer/> */}
   
    </>
  )
}

export default App
