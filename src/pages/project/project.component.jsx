import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectDataContext } from "../../context/project-data.component";
import { ThemeValuesContext } from "../../context/theme-values.context";

import { Box } from "@mui/material";

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

    
    const technologyIcons = {
        'React': <SiReact />,
        'Node.js': <FaNodeJs />,
        'Firebase': <SiFirebase />,
        'Material UI': <SiMui />,
        'Cloudinary': <img src={cloudinaryIconSrc} alt="Cloudinary" style={{ width: '24px', height: '24px' }} />,
        'MongoDB': <SiMongodb />
      };
      
    
    
    return (   
        <Box>   
            <ProjectOverview project={project} technologyIcons={technologyIcons} checks={checks} theme={theme}/>
            <ProjectDetailed project={project} />        
        </Box>
        )
}

export default Project;