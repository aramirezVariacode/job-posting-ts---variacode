import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useAuthStore } from "../auth/hooks";
import { JobPostingRoutes } from "../jobposting/routes/JobPostingRoutes";
import { CheckingAuthComponent } from "../ui/components";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const { checkAuthToken, checkAuthPostulantLogin } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token") || null;

    if (token !== null) {
      checkAuthToken();
    } else {
      checkAuthPostulantLogin();
    }
  }, []);

  const { status } = useAuthStore();
  if (status === "checking") return <CheckingAuthComponent />;

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoutes>
              <AuthRoutes />
            </PublicRoutes>
          }
        />

        <Route
          path="dashboard/*"
          element={
            <PrivateRoute>
              <JobPostingRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
