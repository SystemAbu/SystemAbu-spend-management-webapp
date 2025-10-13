import { Outlet } from 'react-router-dom';
import GuestHeader from '../../component/GuestHeader';

function GuestLayout() {
	return (
		<>
			<GuestHeader />
			<main id='guest-main'>
				<Outlet />
			</main>
		</>
	);
}

export default GuestLayout;