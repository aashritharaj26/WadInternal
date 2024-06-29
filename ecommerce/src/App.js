
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Catalogue from './components/Catalogue/Catalogue';
import Kart from './components/Kart/Kart';
import Contact from './components/Contact/Contact';
import Signin from './components/Signin/Signin';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import Rootlayout from './components/Rootlayout/Rootlayout';
function App() {
  let router=createBrowserRouter([
     {
       path:'',
       element:<Rootlayout/>,
       children:[
         {
           path:'',
           element:<Home/>
     
         },
         {
           path:'signup',
           element:<Signup/>
         },
         {
           path:'signin',
           element:<Signin/>
         },
         {
          path:'catalogue',
          element:<Catalogue/>
         },
         {
          path:'kart',
          element:<Kart/>
         },
         {
          path:'contactus',
          element:<Contact/>
         }
       ]
 
     }
     
    ])
   return (
     <div >
    <RouterProvider router={router}/>
     </div>
   );
}

export default App;
