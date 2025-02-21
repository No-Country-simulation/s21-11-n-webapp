import LandingPage from "@/infraestructure/ui/pages/landing.page";
import { Layout } from '@/infraestructure/ui/components/Layout/Layout';
import { RouteList } from '@/domain/entities/RouteList';

export const routeList: RouteList = {
  publicRoutes: {
    path: '/',
    element: <Layout />,
    children: [
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
  },

  userRoutes: {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/history',
        element: <>history </>,
      },
    ],
  },

  adminRoutes: {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <>dashboard </>,
      },
    ]
  }
}
