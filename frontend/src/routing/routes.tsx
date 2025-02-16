
import LandingPage from "@/infraestructure/ui/pages/landing.page";

const PublicRoutes = [
  {
    path: "/",
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

const PrivateRoutes = {
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