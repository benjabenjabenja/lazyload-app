//Assets:
import logo from '../logo.svg';
//Components:
import CustomLink from "./CustomLink";

export interface IRoute {
	path: string;
	name: string;
	Component: React.FC;
	to: string;
	children?: IRoute[];
}

export interface NavProps {
	routes: IRoute[];
}

export const NavComponent: React.FC<NavProps> = ({ routes }) => {
	return (
		<nav>
			<img src={logo} alt="React Logo" />
			<ul>
				{routes && routes?.map(({ path, name }) => (<CustomLink name={name} path={path} key={path} />) )}
			</ul>
		</nav>
	);
}
export default NavComponent;