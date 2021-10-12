import React from 'react'
import EventPage from '../pages/EventPage'
import LoginPage from '../pages/LoginPage'

export interface PageRoutes  {
    path: string
    component: React.ComponentType
    exact?: boolean
}
export enum RouteName  {
    LOGIN = '/login',
    EVENT = '/'
}
export const publicRoutes: PageRoutes[] = [
    {path: RouteName.LOGIN, component: EventPage, exact: true}
]
export const privateRoutes: PageRoutes[] = [
    {path: RouteName.EVENT, component: LoginPage, exact: true}
]