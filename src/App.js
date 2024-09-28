
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

import { createBrowserRouter} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ErrorPage from './components/ErrorPage';
import SearchResultsContainer from './components/SearchResultsContainer';

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
  },
  {
    path:'results',
    element: <SearchResultsContainer />
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
