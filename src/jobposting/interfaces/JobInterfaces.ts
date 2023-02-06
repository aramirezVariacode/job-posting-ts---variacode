export interface Job {
  id?:string;
  position:string;
  description :string;
  location :string;
  recruiter :string;
  modality :string;
  postulationid :string;
}


export interface Postulants {
  id:string;
  email: string;
  jobid: string;
  jobposition: string;
  phone: string;
  postulant: string;
}