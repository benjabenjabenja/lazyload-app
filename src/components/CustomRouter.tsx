import { BrowserRouter as Router } from 'react-router-dom';
import NavComponent, { IRoute } from './NavComponent';
import SwitchComponent from './SwitchComponents';

export interface RouterProps {
	routes: IRoute[];
}

export const CustomRouter: React.FC<RouterProps> = ({ routes }) => {
    return (<Router>
        <div className="main-layout">
            <NavComponent routes={routes} />
            <SwitchComponent routes={routes} />
        </div>
    </Router>);
}

export default CustomRouter;
