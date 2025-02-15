// import { useQuery } from '@tanstack/react-query';
// import { getUsers } from '../../../application/use-cases/getUsers';
// import { userRepository } from '../../repositories/userRepository';

// export const UsersList: React.FC = () => {
//   const { data, isLoading, error } = useQuery(['users'], () => getUsers(userRepository));

//   if (isLoading) return <div>Cargando...</div>;
//   if (error) return <div>Error al cargar los usuarios</div>;

//   return (
//     <div>
//       <h1>Lista de Usuarios</h1>
//       <ul>
//         {data?.map(user => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };