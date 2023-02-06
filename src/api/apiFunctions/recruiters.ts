import jobPostingAPi from "../jobPostingApi";

export const getRecruiters = async () => {
  try {
    const res = await jobPostingAPi.get("/recruiter");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getRecruiterById = async (id : string) => {
  try {
    const res = await jobPostingAPi.get(`/recruiter/${id}`);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};


