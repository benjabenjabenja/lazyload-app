import { NavLink } from "react-router-dom";

export interface CustomLinkProps {
    name: string;
    path: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ name, path }) => (<li> <NavLink to={path ?? "-"} activeClassName="nav-active" exact>{name ?? "-"}</NavLink> </li>);
export default CustomLink;