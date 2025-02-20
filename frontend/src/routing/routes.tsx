import { CustomRoute } from '@/domain/entities/CustomRoute';
import { PrivateRouteLists } from '@/domain/entities/PrivateRouteLists';
import LandingPage from "@/infraestructure/ui/pages/landing.page";

const PublicRoutes: CustomRoute[] = [
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <>login </>,
  },
  {
    path: '/register',
    element: <>register </>,
  },
  {
    path: "*",
    element: <>Not Found</>
  }
]

const PrivateRoutes: PrivateRouteLists = {
  user: [
    {
      path: '/history',
      element: <>history </>,
      roles: ['user'],
    },
  ],
  admin: [
    {
      path: '/dashboard',
      element: <>dashboard </>,
      roles: ['admin'],
    },
  ]
}


export { PublicRoutes, PrivateRoutes }