import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteName } from '../router/routerPages'

const AppRouter = () => {
    const isAuth = useTypedSelector(state => state.auth.auth)
    return (
        isAuth ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path} />
                )}
                <Redirect to={RouteName.EVENT} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path} />
                )}
                <Redirect to={RouteName.LOGIN} />
            </Switch>
    )
}
export default AppRouter