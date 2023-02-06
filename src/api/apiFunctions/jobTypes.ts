import jobPostingAPi from "../jobPostingApi";

export const getJobTypes = async () => {
  try {
    const res = await jobPostingAPi.get("/jobType");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getJobTypesById = async (id : string) => {
  try {
    const res = await jobPostingAPi.get(`/jobType/${id}`);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
