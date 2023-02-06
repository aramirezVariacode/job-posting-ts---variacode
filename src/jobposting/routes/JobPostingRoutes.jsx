
import { Navigate, Route, Routes } from 'react-router-dom';
import { CreateRecruiter,UserList } from '../../admin/pages';
import { useAuthStore } from '../../auth/hooks';
import { MyPostulations } from '../../user/pages/MyPostulations';
import { UserPage } from '../../admin/pages/UserPage';
import { CreateJob, JobAplicant, JobPostingPage, Jobs, LinkedinPage,MyCreatedJobs, PostulantsByJob } from '../pages';




export const JobPostingRoutes = () => {
    
  const {user} = useAuthStore();

  return (
    <Routes>
      {user.role === "postulant" ? (
        <>
          <Route path="jobApplicant/:id" element={<JobAplicant />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="postulations" element={<MyPostulations />} />

          {/* user */}
          <Route path="user" element={<UserPage />} />
          <Route path="/" element={<Navigate to={"./user"} />} />
          <Route path="*" element={<Navigate to="./user" />} />
        </>
      ) : (
        <>
          <Route path="jobPosting" element={<JobPostingPage />} />
          <Route path="linkedin" element={<LinkedinPage />} /> */
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobsByRecruiter" element={<MyCreatedJobs />} />
          <Route path="postulantsByJob/:id" element={<PostulantsByJob />} />
          <Route path="createJob" element={<CreateJob />} />
          {/*  //admin */}
       {/*    <Route path="createRecruiter" element={<CreateRecruiter />} /> */}
          <Route path="userList" element={<UserList />} />
          <Route path="/" element={<Navigate to={"./jobs"} />} />
          <Route path="*" element={<Navigate to="./jobs" />} />
        </>
      )}
    </Routes>
  );
}
