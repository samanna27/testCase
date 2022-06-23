import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import CatalogPage from '../catalog-page/catalog-page';
// import { AppRoute } from '../../const';
// import NotFoundScreen from '../not-found-screen/not-found-screen';
// import {connect, ConnectedProps} from 'react-redux';
// import {State} from '../../types/state';
// import GuitarPage from '../guitar-page/guitar-page';
// import CartPage from '../cart-page/cart-page';
// import LoadingScreen from '../loading-screen/loading-screen';
import MainPage from '../main-page/main-page';

// const mapStateToProps = ({guitars, isDataLoaded}: State) => ({
//   guitars,
//   isDataLoaded,
// });

// const connector = connect(mapStateToProps);

// type PropsFromRedux = ConnectedProps<typeof connector>;
// type ConnectedComponentProps = PropsFromRedux;

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}>
        </Route>
        {/* <Route path={AppRoute.Guitar} element={<GuitarPage />}>
        </Route>
        <Route path={AppRoute.Cart} element={<CartPage />}>
        </Route>
        <Route path='*' element={<NotFoundScreen />}>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

// export {App};
// export default connector(App);
export default App;
