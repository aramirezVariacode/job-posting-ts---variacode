import { GetJobsResponse } from "../interfaces/interfaces";
import jobPostingAPi from "../jobPostingApi";

export const getJobs = async () => {
    const res = await jobPostingAPi.get<GetJobsResponse>("/job");
    return res;
};


export const getRecentJobs = async () => {
 
    const res = await jobPostingAPi.get<GetJobsResponse>("/job/mostrecent");
    return res;
 
};


export const getJobsByIdRecruiter = async (id : string) =>{
  try{
    const res  = await  jobPostingAPi.get(`/job/recruiter/${id }`)
 return res
  }catch (error) {
    console.log(error);
    return error;
  }
}


export const getAccessTypeJob = async () =>{
  try {
    const res = await jobPostingAPi.get("jobAccessType");
    return res;
  } catch (error) {
    console.log(error);

    return error;
  }
}

