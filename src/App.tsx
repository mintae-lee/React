import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductContainer from './containers/ProductContainer';
import FavouritesContainer from './containers/FavouritesContainer';
import SiteHeader from './components/SiteHeader';
import TopNavigation from './components/TopNavigation';
import Footer from './components/Footer';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <div className='App'>
			<BrowserRouter>
				<SiteHeader />
        <TopNavigation />
				<Routes>
					<Route path="/" element={<ProductContainer />}></Route>
					<Route path="/favourites/*" element={<FavouritesContainer />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
        <Footer />
			</BrowserRouter>
		</div>
  );
}

export default App;
