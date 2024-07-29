import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Insert from "./Component/Insert";
import Contact from "./Component/Contact";
import Display from "./Component/Display";
import Search from "./Component/Search";
import Update from "./Component/Update";
import EditData from "./Component/EditData";
import Login from "./Component/Login";
import Registration from "./Component/Registration";

const App = () => {
  return ( 
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="display" element={<Display/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="update" element={<Update/>}/>
        <Route path="conatct" element={<Contact/>}/>
        <Route path="editdata/:id" element={<EditData/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Registration/>}/>

        </Route>
      </Routes>
    </BrowserRouter>

    </>
   );
}
 
export default App;