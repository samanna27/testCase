import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from '../main-page/main-page';
function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
