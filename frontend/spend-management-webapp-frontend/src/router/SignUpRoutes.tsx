import { Route } from 'react-router-dom';
import SignUpMailSubmit from '../Paage/Authentication/SignUpMailSubmit';
import SignUpUserInfoInput from '../Paage/Authentication/SignUpUserInfoInput';
import SignUpUserInfoInputConfirm from '../Paage/Authentication/SignUpUserInfoInputConfirm';
import SignUpUserInfoInputComplete from '../Paage/Authentication/SignUpUserInfoInputComplete';

function SignUpRoutes() {
	return (
		<Route path='sign_up'>
			<Route index element={<SignUpMailSubmit />} />
			<Route path='user_info_input' element={<SignUpUserInfoInput />} />
			<Route path='user_info_input_confirm' element={<SignUpUserInfoInputConfirm />} />
			<Route path='user_info_input_complete' element={<SignUpUserInfoInputComplete />} />
			{/* <Route path='input' element={<SignUpComplete/>} /> */}
		</Route>
	);
}

export default SignUpRoutes;