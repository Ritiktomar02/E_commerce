import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/ui/auth/layout";
import Authlogin from "./pages/auth/login"
import Authregister from "./pages/auth/register"

function App() {

  return (
   <div className="flex flex-col overflow-hidden bg-white">


      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<Authlogin/>}/>
          <Route path="register" element={<Authregister/>}/>
        </Route>
      </Routes>
   </div>

  )
}

export default App;
