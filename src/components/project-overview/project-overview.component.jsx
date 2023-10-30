import {Paper, Grid, Typography, Link} from '@mui/material'
import { StyledTypography, StyledButton } from '../../utils/styledComponents'

const ProjectOverview = ({ project }) => {

    const { title, image, description, techStack, highlights } = project

    return (
        <Grid container spacing={3}>
        {/* Left Side - Image */}
        <Grid item xs={6}>
          <Paper style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>IMAGE</Typography>
          </Paper>
        </Grid>
  
        {/* Right Side */}
        <Grid item xs={6}>
          {/* Title */}
          <Typography variant="h5">Title</Typography>
          
          {/* Links */}
          <Typography>
            <Link href="#">Link</Link>
          </Typography>
          <Typography>
            <Link href="#">Link</Link>
          </Typography>
  
          {/* Tech Stack */}
          <Typography variant="h6">Tech Stack</Typography>
          <Grid container spacing={1}>
            {['Tech', 'Tech', 'Tech'].map((tech, index) => (
              <Grid item key={index}>
                <Paper style={{ padding: '5px 10px', borderRadius: 20 }}>
                  <Typography>{tech}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
                  {/* Highlights */}
        <Grid item xs={12}>
          <Typography variant="h6">Highlights</Typography>
        </Grid>
  
        </Grid>
  

        {/* Description */}
        <Grid item xs={12}>
          <Typography variant="h6">Description</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </Typography>
        </Grid>
      </Grid>
    );
  }
  
export default ProjectOverview