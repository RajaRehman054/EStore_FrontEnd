import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Nav from './components/Nav';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Jwt from './components/Jwt';
import Admin from './components/Admin';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import DashboardItems from './pages/DashboardItems';
import DashboardItemsEdit from './pages/DashboardItemsEdit';
import DashboardAddItem from './pages/DashboardAddItem';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route element={<Jwt />}>
						<Route path='/' element={<Nav />}>
							<Route path='/' element={<Login />} />
							<Route path='/signup' element={<SignUp />} />
						</Route>
						<Route path='/home' element={<Navbar />}>
							<Route path='/home' element={<Home />} />
							<Route path='/home/cart' element={<Cart />} />
						</Route>
					</Route>
					<Route element={<AdminLogin />} path='/admin' />
					<Route element={<Admin />}>
						<Route path='/admin/dash' element={<Dashboard />} />
						<Route
							path='/admin/dash/items'
							element={<DashboardItems />}
						/>
						<Route
							path='/admin/dash/items/:item'
							element={<DashboardItemsEdit />}
						/>
						<Route
							path='/admin/dash/itemsadd'
							element={<DashboardAddItem />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
