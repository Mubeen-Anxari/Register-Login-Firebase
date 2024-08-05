"use client"

import Image from "next/image";
import SignUp from "./Login/page";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Register/page";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={ <SignUp/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
     
    </div>
  );
}
