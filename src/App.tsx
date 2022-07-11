import React from 'react';
// import {HomePage} from "./pages/HomePage";
import {FilePage} from "./pages/FilePage";
import {Navbar} from './components/Navbar';
import {HomePage} from './pages/HomePage';
import {ForumPage} from './pages/ForumPage/ForumPage';

export const App=()=> {
  return (
    <div>
      {/*<HomePage/>*/}
      {/*<HomePage/>*/}
      {/*<FilePage/>*/}
      <ForumPage/>
    </div>
  );
}

export default App;
