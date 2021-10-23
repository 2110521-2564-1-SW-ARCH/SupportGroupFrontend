// /* eslint-disable react/prop-types */
// import React from 'react';
// import {Route, Redirect} from 'react-router-dom';
// import {useSelector} from 'react-redux';
// import {getAuthToken} from '../utils/storage';
// import * as routeName from './routes-name';

// const ProtectedRoute = ({component: Component, ...rest}) => {
//   const registerState = useSelector((state) => state.register.registerId._id);

//   if (rest.protectedVerify) {
//     return (
//       <Route
//         {...rest}
//         render={(props) =>
//           !registerState ? (
//             <Redirect
//               to={{
//                 pathname: routeName.ROUTE_MAIN,
//               }}
//             />
//           ) : (
//             <Component {...props} />
//           )
//         }
//       />
//     );
//   }

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         getAuthToken() ? (
//           <Redirect
//             to={{
//               pathname: routeName.ROUTE_MAIN,
//             }}
//           />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;
