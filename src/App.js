import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Menu from './components/Menu';
// main app layout

const App=()=>
{
    return(
        <div className='app'>
          <Header/>
          <Outlet/>
           <Footer/>
        </div>

    );
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/menu",
                element:<Menu/>,
            },
            {
                path:"/about",
                element:<About/>,
                errorElement:<Error/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
                errorElement:<Error/>,
            },
            

        ]
    },
    

]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);