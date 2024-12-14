import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/ui/auth/layout";
import Authlogin from "./pages/auth/login"
import Authregister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminOrder from "./pages/admin-view/product";
import AdminProducts from "./pages/admin-view/product";
import Adminfeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/notfound";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import Shoppinghome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import CheckAuth from "./components/common/check-auth";

function App() {

  const isAuthenticated=false;
  const user=null;

  return (
   <div className="flex flex-col overflow-hidden bg-white">


      <Routes>

        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
       }>

          <Route path="login" element={<Authlogin/>}/>
          <Route path="register" element={<Authregister/>}/>
          
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
        }>

          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="orders" element={<AdminOrder/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="features" element={<Adminfeatures/>}/>

        </Route>

        <Route path="/shopping" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
          </CheckAuth>
        }>

          <Route path="account" element={<ShoppingAccount/>}/>
          <Route path="checkout" element={<ShoppingCheckout/>}/>
          <Route path="home" element={<Shoppinghome/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>

        </Route>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
   </div>

  )
}

export default App;
