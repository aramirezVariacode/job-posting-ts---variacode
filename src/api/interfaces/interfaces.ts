
export interface GetJobsResponse {
    msg:       string;
    registros: RegistroJobs[];
}

export interface RegistroJobs {
    id:          string;
    description: string;
    position:    string;
    location:    string;
    recruiter:   string;
    modality:    string;
    accesstype:  string;
    createdat:   string;
}
