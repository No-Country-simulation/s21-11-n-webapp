import { JSX } from 'react';
import { RolRouteType } from './RolRouteType';

export interface CustomRoute {
  path: string,
  element: JSX.Element,
  roles?: RolRouteType[]
}
