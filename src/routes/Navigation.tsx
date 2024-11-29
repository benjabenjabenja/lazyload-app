import { BrowserRouter as Router } from 'react-router-dom';
//Components:
import NavComponent from '../components/NavComponent';
import SwitchComponent from '../components/SwitchComponents';
//Routes:
import { routes } from './routes';

export const Navigation = () => {
	return (
		<Router>
			<div className="main-layout">
				<NavComponent routes={routes} />
				<SwitchComponent routes={routes} />		
			</div>
		</Router>
	);
}