import * as React from 'react'
import { Outlet, createRootRoute, redirect } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: ({ location }) => {
    if(location.pathname === '/') {
      throw redirect({
        to: '/login',
      });
    }
  },
});

function RootComponent() {
  return (
    <div className=''>
      <Outlet />
    </div>
  )
}
