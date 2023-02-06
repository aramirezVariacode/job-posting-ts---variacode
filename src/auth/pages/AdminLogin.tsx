import { GoogleSigIn } from "../components/GoogleSigIn";

import { AuthLayout } from "../layout/AuthLayout";

export const AdminLogin = () => {



  return (
    <AuthLayout>
     <GoogleSigIn profile="admin"/>
    </AuthLayout>
  );
};
