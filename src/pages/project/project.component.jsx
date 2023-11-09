import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectDataContext } from "../../context/project-data.component";
import { ThemeValuesContext } from "../../context/theme-values.context";

import { Grid, Box } from "@mui/material";
import { StyledHorizontalDivider } from "../../utils/styledComponents";

import ProjectOverview from "../../components/project-overview/project-overview.component";
import ProjectDetailed from "../../components/project-detailed/project-detailed.component";
import {SiReact,SiMui, SiFirebase, SiMongodb} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import cloudinaryIconSrc from '../../assets/cloudinary.svg';


const Project = () => {
    const { id } = useParams();
    const projects = useContext(ProjectDataContext);  
    const {checks, theme} = useContext(ThemeValuesContext);
    const project = projects.find((p) => p.id === parseInt(id, 10));

    const { isMobile, isTablet, isLaptop, isDesktop } = checks;
    
    const technologyIcons = {
        'React': <SiReact />,
        'Node.js': <FaNodeJs />,
        'Firebase': <SiFirebase />,
        'Material UI': <SiMui />,
        'Cloudinary': <img src={cloudinaryIconSrc} alt="Cloudinary" style={{ width: '24px', height: '24px' }} />,
        'MongoDB': <SiMongodb />
      };
      
    
    
    return (   
        <Grid 
        container 
        spacing={3}  
        alignItems="center" 
        sx={{
            margin: 'auto',
            padding: isMobile ? '0' : '0 20px', 
            width: '80%'
            
            }}>
            
            <ProjectOverview project={project} technologyIcons={technologyIcons} checks={checks} theme={theme}/>
            {/* Horizontal divider */}
            <Grid item xs={12} component={Grid} display="flex" justifyContent="center">
            <StyledHorizontalDivider checks={checks} sx={{marginBottom:'30px'}} />
            </Grid>
    
            <ProjectDetailed project={project} theme={theme} checks={checks} />      
    
  
        </Grid>
        )
}

export default Project;