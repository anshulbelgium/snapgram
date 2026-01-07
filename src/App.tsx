
import "./global.css"
import {Routes , Route} from "react-router-dom"
import { Home } from "./root/pages"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./root/RootLayout"
import SignInForm from "./_auth/forms/SignInForm"
import SignupForm from "./_auth/forms/SignupForm"


function App() {
  return (
   <main className="flex h-screen">
     <Routes>
      {/* public route */}
      <Route element = {<AuthLayout/>}>
        <Route path = "/sign-up" element = {<SignupForm/>}/>
        <Route path = "/sign-in" element = {<SignInForm/>}/>
      </Route>
       {/* private route */}
       <Route  element = {<RootLayout/>}>
        <Route index element = {<Home/>}/>
       </Route>
     </Routes>
   </main>
  )
}

export default App
