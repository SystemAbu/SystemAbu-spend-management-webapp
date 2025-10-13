import { Routes, Route } from 'react-router-dom';
import GuestLayout from '../Paage/Authentication/GuestLayout';
import GuestHome from '../Paage/Authentication/GuestHome';
import SignUpRoutes from './SignUpRoutes';
import Login from '../Paage/Authentication/Login';

function AppRoutes() {
	// TODO: ログイン前後でisLoginの値が変化するようにする。
	let isLogin = false;
	return (
		<Routes>
			{
				isLogin ? (
					<Route>
					</Route>
				) : (
					<Route element={<GuestLayout />} >
						<Route path='/' element={<GuestHome />} />
						<Route path='/login' element={<Login />} />
						{SignUpRoutes()}
					</Route>
				)
			}
		</Routes>
	);
}

export default AppRoutes;