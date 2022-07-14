import React from 'react';
// <<<<<<< HEAD
// // import {HomePage} from "./pages/HomePage";
// import {FilePage} from "./pages/FilePage";
// import {Navbar} from './components/Navbar';
// import {HomePage} from './pages/HomePage';
// import {LoginPage} from "./pages/LoginPage";
//
// export const App=()=> {
//   return (
//     <div>
//       {/*<HomePage/>*/}
//       {/*<HomePage/>*/}
//       {/*<FilePage/>*/}
//       <LoginPage/>
//     </div>
// =======
import AppRouter from './routers/AppRouter';

export const App=()=> {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
