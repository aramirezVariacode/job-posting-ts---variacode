import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useAuthStore } from '../../auth/hooks';
import { JobPostingLayout } from '../../jobposting/layout/JobPostingLayout';



export const UserPage = () => {

  const {user} = useAuthStore();
  return (
    <JobPostingLayout>
      <Grid
        container
        sx={{ height: "85vh", display: { md: "flex", xs: "block" } }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} textAlign="center" sx={{ mb: { xs: 2 } }}>
          <Typography
            className="animate__animated
                animate__lightSpeedInLeft"
            variant="h4"
            sx={{ mb: 2 }}
          >
            Datos de usuario
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6} textAlign="center">
          <img
            style={{ width: "50%" }}
            src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png"
            alt="foto"
          />
        </Grid>
        <Grid item md={6} xs={12} textAlign="start">
          <Card sx={{ width:{md:'60%',xs:'100%'} }}>
            <CardContent sx={{display:'grid',justifyContent:'center'}} >
              <Box paddingBottom={2}>
                <Typography
                  gutterBottom
                 
                >
                  Nombre : <span>{user.postulant}</span>
                </Typography>
                <Divider />
              </Box>
              <Box paddingBottom={2}>
                <Typography
                  gutterBottom
                 
                >
                  Email :<span> {user.email}</span>
                </Typography>
                <Divider />
              </Box>

              <Box paddingBottom={2}>
                <Typography gutterBottom>Telefono : {user.phone}</Typography>
                <Divider />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </JobPostingLayout>
  );
}
