import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, StorePage, CartPage } from "../e-commers-app/pages";
import { Navbar } from "../ui/Navbar";

export function AppRouter () {
    return (
        <>
        <Navbar />
        <Routes>    
            <Route path="/home" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<Navigate to="/home" />} />
           
        </Routes>
    </>
    )
  
}
