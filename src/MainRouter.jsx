import { Routes,Route } from 'react-router-dom';
import NavBarIndex from './NavBar/NavBarIndex';
import HomeIndex from './Home/HomeIndex';
import Service from './Service';

function MainRouter() {
  return (
   <Routes>
      <Route path='/' element={<NavBarIndex/>}>
       <Route index element={<HomeIndex/>}/>
       <Route path='/service' element={<Service/>}/>
        </Route>
   </Routes>
  )
}

export default MainRouter;
