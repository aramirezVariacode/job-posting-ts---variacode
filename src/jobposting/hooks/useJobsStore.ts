import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../api/apiFunctions"
import { RegistroJobs } from "../../api/interfaces/interfaces";
import { onLoadJobs, onLogoutJobs, onSearchJobById, StoreReducers } from "../../store";

export const useJobsStore = () => {

    const { jobs, job,isLoadingJobs } = useSelector((state: StoreReducers) => state.jobs);
    const dispatch = useDispatch();

    const startLoadJobs = async () => {
       await getJobs()
          .then(({ data }) => {
           dispatch(onLoadJobs(data.registros));
          })
          .catch((error) => {
            console.log(error);
            dispatch(onLoadJobs(null))
          });
    } 

    const startSearchJob = (id:string) =>{
        const job = jobs.filter((job : RegistroJobs) => job.id === id )
         console.log(job)
        dispatch(onSearchJobById(job))
    }

    const startLogoutJobs = () =>{
      dispatch(onLogoutJobs());
    }
  return {
    job,
    jobs,
    isLoadingJobs,
    startLoadJobs,
    startSearchJob,
    startLogoutJobs
  };
}

