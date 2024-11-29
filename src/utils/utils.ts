export interface IRoute {
	path: string;
	name: string;
	Component: React.FC;
	to: string;
	children?: IRoute[];
}