import { Routes,Route } from 'react-router-dom';
import NavBarIndex from './NavBar/NavBarIndex';
import Service from './Service';
import HomeIndex from './HomeIndex';

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
