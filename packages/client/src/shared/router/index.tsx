import { ComponentType, FunctionComponent } from 'react'
import { BrowserRouter, Route as RrRoute, Switch } from 'react-router-dom'

export interface Route {
  path: string
  component: ComponentType
}

interface Props {
  routes: Array<Route>
}

export const RouteRenderer: FunctionComponent<Props> = ({
  routes
}) => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <RrRoute
          key={route.path}
          path={route.path}
          exact
          component={route.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
)
