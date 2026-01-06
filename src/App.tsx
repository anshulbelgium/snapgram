
import SignIn from "./_auth/forms/SignIn"
import Signup from "./_auth/forms/Signup"
import "./global.css"
import {Routes , Route} from "react-router-dom"
import { Home } from "./root/pages"



function App() {
  return (
   <main className="flex h-screen">
     <Routes>
      {/* public route */}
      <Route path = "/sign-up" element = {<Signup/>}/>
      <Route path = "/sign-in" element = {<SignIn/>}/>

       {/* private route */}
       <Route index element = {<Home/>}/>
     </Routes>
   </main>
  )
}

export default App
