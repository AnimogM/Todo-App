import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Completed from "./pages/Completed";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Pending from "./pages/Pending";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/complete' element={<Completed/>}/>
        <Route path='/pending' element={<Pending/>}/>
      </Routes>
    </>
  );
}

export default App;
