import { GoogleSigIn } from "../components/GoogleSigIn";

import { AuthLayout } from "../layout/AuthLayout";

export const VariacodeLogin = () => {

  return (
    <AuthLayout>
     <GoogleSigIn profile="recruiter"/>
    </AuthLayout>
  );
};
