import { Routes, Route, Navigate } from "react-router-dom";

import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/Signin";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
