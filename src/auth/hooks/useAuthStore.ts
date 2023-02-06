import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jobPostingAPi from "../../api/jobPostingApi";
import { alertError } from "../../helpers/alertHandler";
import { StoreReducers } from "../../store";
import {
  clearErrorMessage,
  onCheking,
  onLogin,
  onLogout,
} from "../../store/auth/authSlice";

export const useAuthStore = () => {
  
  const { status, user, errorMessage } = useSelector((state : StoreReducers) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startLoginGoogle = async (googleResponse : any) => {
       localStorage.removeItem("lastPath");
    try {
      dispatch(onCheking());

      const resLogin = await jobPostingAPi.post(`/recruiter/login`, {
        accessToken: googleResponse.tokenId,
      });

      const { data } = resLogin;
      localStorage.setItem("token", data.token);

      dispatch(onLogin(data.user));
    } catch (error) {
      console.log(error);
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };


   

  const startLoginUser = async (credenciales : any) => {
     /*   localStorage.removeItem("lastPath"); */
    try {
      
      dispatch(onCheking());
        const lastPath = localStorage.getItem("lastPath") || "/dashboard/user";
      const { data } = await jobPostingAPi.post(
        "/postulant/login",
        credenciales
      );
      console.log(data)
      localStorage.setItem("postulantToken", data.token);
      dispatch(onLogin(data.userWithoutPass));
      navigate(lastPath, { replace: true });
    } catch (error) {
      alertError('Error revise sus credenciales de usuario o dirijase a su bandeja de entrada para verificar su cuenta')
      dispatch(onLogout({}));
    }
  };

  const checkAuthPostulantLogin = async () => {
    try {
      const lastPath = localStorage.getItem('lastPath') || '/dashboard/user';
      const token = localStorage.getItem("postulantToken");
      if (!token) return dispatch(onLogout({}));

      dispatch(onCheking());
  
      const { data } = await jobPostingAPi.get("/renew/postulant");
     
      navigate(lastPath, { replace: true });
      dispatch(onLogin(data.user));

    } catch (error) {
      localStorage.removeItem("postulantToken");
      console.log(error);
      dispatch(onLogout({}));
    }
  };

  //utilizada en AppRouter
  const checkAuthToken = async () => {
    
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout({}));

    try {
      dispatch(onCheking());
      const lastPath = localStorage.getItem("lastPath") || "/";
      const { data } = await jobPostingAPi.get("/renew/recruiter", {
        headers: {
          "x-token": token,
        },
      });

      navigate(lastPath, { replace: true });
      dispatch(onLogin(data.user));
    } catch (error) {
      localStorage.removeItem("token");

      console.log(error);
      dispatch(onLogout({}));
    }
  };

  const startLogoutGoogle = () => {
     
    try {
    
      dispatch(onLogout({}));
        localStorage.removeItem("lastPath");
      localStorage.removeItem("token");
      localStorage.removeItem("postulantToken");
     
    } catch (error) {
      console.log(error);
    }
  };

  return {
    status,
    user,
    errorMessage,
    startLoginGoogle,
    startLoginUser,
    startLogoutGoogle,
    checkAuthToken,
    checkAuthPostulantLogin,
  };
};
