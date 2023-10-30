import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { StyledTypography } from '../../utils/styledComponents';
import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';
import {SiReact,SiMui, SiFirebase, SiMongodb} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import cloudinaryIconSrc from '../../assets/cloudinary.svg';

import { ProjectDataContext } from '../../context/project-data.component';

const Portfolio = ({ checks}) => {

    const projectsData = useContext(ProjectDataContext);

    const {isMobile} = checks;   
    
    const technologyIcons = {
        'React': <SiReact />,
        'Node.js': <FaNodeJs />,
        'Firebase': <SiFirebase />,
        'Material UI': <SiMui />,
        'Cloudinary': <img src={cloudinaryIconSrc} alt="Cloudinary" style={{ width: '24px', height: '24px' }} />,
        'MongoDB': <SiMongodb />
      };
      
    


    const imageSrc = 'https://res.cloudinary.com/recipeb00k/image/upload/v1696527867/R_r6jv9x.jpg'

    return (
        <Box component={Grid} item xs={12} sm={12} md={12} lg={10} xl={8}>
        <StyledTypography variant={ isMobile ? 'h3': 'h2'} sx={{ textAlign: 'center', marginBottom:'20px' }}>
                Portfolio
            </StyledTypography>            
            <Grid container spacing={4}>
                {projectsData.map((project) => (
                <Grid item xs={12} md={6} lg={4} key={project.id}>
                    <PortfolioItem project={project} checks={checks} technologyIcons={technologyIcons}/>
                </Grid>
                ))
                }
            </Grid>      
        </Box>   
    )
    
}

export default Portfolio;