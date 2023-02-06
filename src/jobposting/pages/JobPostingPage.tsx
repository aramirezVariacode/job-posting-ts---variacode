import { Button } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import jobPostingAPi from '../../api/jobPostingApi';

import { JobPostingLayout } from '../layout/JobPostingLayout';

export const JobPostingPage = () => {
 
   const [params] = useSearchParams();
   
  const getCodeLinkedin = async () =>{
   try {
      const { data } = await jobPostingAPi.get("/auth");
      console.log(data.link);
     window.location.href = data.link;
   } catch (error) {
    console.log(error)
   }
  }

 const handleUrlParams = async () => {
  const code  = params.get('code');

  await jobPostingAPi.post('/auth',{code})
  
 };

  return (
    <JobPostingLayout>
      <Button onClick={getCodeLinkedin}>Prueba</Button>

      <Button onClick={handleUrlParams}>Obtener code</Button>
    </JobPostingLayout>
  );
}
