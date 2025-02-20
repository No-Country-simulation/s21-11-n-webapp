import { Layout } from '@/infraestructure/ui/components/Layout/Layout';
import { PrivateRoutes, PublicRoutes } from '@/routing/routes'
import { BrowserRouter, Route, Routes } from 'react-router';

// const generateRoutes = () => {
//   const { admin, user } = PrivateRoutes
//   return [...PublicRoutes, ...user, ...admin]
// }

// const router = createBrowserRouter(generateRoutes());

// const AppRouter = () => {
//   return <RouterProvider router={router} />;
// };

const publicRoutes = PublicRoutes;
const {
  admin: adminRoutes,
  user: userRoutes,
} = PrivateRoutes;

const AppRouter = () => {


  return <BrowserRouter>
    <Routes>

      <Route element={<Layout />}>

        {
          publicRoutes.map(({ path, element }) => {
            return <Route path={path} element={element} />
          })
        }
        {
          adminRoutes.map(({ path, element }) => {
            return <Route path={path} element={element} />
          })
        }
        {
          userRoutes.map(({ path, element }) => {
            return <Route path={path} element={element} />
          })
        }

      </Route>

    </Routes>
  </BrowserRouter>
}

export default AppRouter;