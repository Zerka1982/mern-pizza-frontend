
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import AdminScreen from './screens/AdminScreen';
import Userlist from './components/Admin/Userlist';
import Pizzalist from './components/Admin/Pizzalist';
import AddNewPizza from './components/Admin/AddNewPizza';
import Orderlist from './components/Admin/Orderlist';
import EditPizza from './components/Admin/EditPizza';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Homescreen />} />
          <Route path='/cart' exact element={<Cartscreen />} />
          <Route path='/register' exact element={<Registerscreen />} />
          <Route path='/login' exact element={<Loginscreen />} />
          <Route path='/orders' exact element={<Ordersscreen />} />
          <Route path="/forgot-password" exact element={<ForgotPassword />} />
          <Route path="/reset-password/:token" exact element={<ResetPassword />} />
          <Route path='/admin' element={<AdminScreen />}>
            <Route path='/admin/userlist' exact element={<Userlist />} />
            <Route path='/admin/pizzalist' exact element={<Pizzalist />} />
            <Route path='/admin/editpizza/:pizzaId' exact element={<EditPizza />} />
            <Route path='/admin/addnewpizza' exact element={<AddNewPizza />} />
            <Route path='/admin/orderlist' exact element={<Orderlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
