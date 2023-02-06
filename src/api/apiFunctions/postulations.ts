import jobPostingAPi from "../jobPostingApi"


export const getMyPostulations = async (id : string) =>{

    const res = await jobPostingAPi.get(`/postulation/postulant/${id}`);
    return res;

}


export const getPostulantsByJob = async (id:string) => {
  const res = await jobPostingAPi.get(`/postulation/job/${id}`);
  return res;
};

export const sedMessageWhatsAppPostulant = async (data:any) =>{
const res = await jobPostingAPi.post("/webhook/sendmessage", data);
return res;
}