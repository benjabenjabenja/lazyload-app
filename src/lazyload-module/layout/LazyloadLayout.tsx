import { Link, Route, BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';
//Components:
import { Suspense } from "react";
import { CustomLoading } from "../../components";
import { User, Users } from '../pages';

export const LazyloadLayout = () => {
    const { pathname } = useLocation();
    const userId = 1232
    return (
        <>
            <h1>Lazyload Layout Page</h1>
            <Suspense fallback={<CustomLoading message="Loading..."/>}>
                <Router>
                    <div className="main-layout">
                        <ul>
                           <li><Link to={`${pathname}/users/${userId}`}>User profile</Link></li>
                           <li><Link to={`${pathname}/`}>Users</Link></li>
                        </ul>
                        <Switch>
                            <Route exact path={`${pathname}/users/:id`}>
                                <User id={userId} />
                            </Route>
                            <Route exact path="">
                                <Users />
                            </Route>
                            
                        </Switch>
                    </div>
                </Router>
            </Suspense>
        </>
    );
}
export default LazyloadLayout;
