import { Route, Switch } from "react-router-dom";
import { NavProps } from "./NavComponent";

export type SwitchProps = Pick<NavProps, "routes">;

export const SwitchComponent: React.FC<SwitchProps> = ({ routes }) => {
    console.log({routes})
    return (
	<Switch>
		{routes && routes.map(({ path, name }) => (<Route key={path} path={path ?? "-"} exact> <h1>{name ?? "-"}</h1> </Route>))}
	</Switch>
)};
export default SwitchComponent;