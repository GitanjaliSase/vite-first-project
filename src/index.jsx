import { createRoot } from 'react-dom/client'
import './index.css'
import Mainpage from './views/Mainpage';
import Places from './views/Places';
import Location from './views/Location.jsx'; 
import Video from './views/Video.jsx'; 
import Images from './views/Images.jsx'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
const router=createBrowserRouter([
    {
        path:"/",
        element:<Mainpage/>,
    },
    {
        path:"/location",
        element:<Location/>,
    },
    {
        path:"/video",
        element:<Video/>,
    },
    {
        path:"/images",
        element:<Images/>,
    },
    {
        path:"/places",
        element:<Places/>,
    }
])
    
createRoot(document.getElementById('root')).render(
< div className='h-screen bg-neutral-50'>
<RouterProvider router={router}/>
    
    </div>
)
