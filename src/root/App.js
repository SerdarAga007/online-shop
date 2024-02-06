import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Home from '../components/admin/sidebar/Sidebar';
import Login from '../components/admin/auth/sigin';
import SidebarCom from '../components/admin/sidebar/Sidebar';
import Table from '../components/admin/categoriesCrud/Table';
import Nodecom from '../components/admin/node/node';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Login />} />
          <Route path='/admin/home' element={<SidebarCom />} />
          <Route path='/admin/categories' element={<Table/>}/>
          <Route path='/admin/node' element={<Nodecom/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
