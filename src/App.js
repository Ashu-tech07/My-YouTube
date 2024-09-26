
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ErrorPage from './components/ErrorPage';

export const appRouter=createBrowserRouter([{
  path:'/',
  element: <App />,
  errorElement: <ErrorPage />,
  children:[{
    path:'/',
    element:<MainContainer/>
  },
  {
    path:'watch',
    element: <WatchPage/>
  }
]
}])

function App() {
  return (
    
    <div className="App">
      <Header />
      <Body />
    </div>
   
  );
}

export default App;
