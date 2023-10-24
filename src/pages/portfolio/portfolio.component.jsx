import { Box, Grid } from '@mui/material';
import { StyledTypography } from '../../utils/styledComponents';
import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';
import {SiReact,SiMui, SiFirebase} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';

import cloudinaryIconSrc from '../../assets/cloudinary.svg';

const Portfolio = ({theme, checks}) => {


    const imageSrc = 'https://res.cloudinary.com/recipeb00k/image/upload/v1696527867/R_r6jv9x.jpg'
    const title = 'Recipe Book';
    const description = 'A recipe book app built with React, Redux, and Firebase.';

    return (
        <Box>
            <StyledTypography variant="h2" sx={{ textAlign: 'center' }}>
                Portfolio
            </StyledTypography>            
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={3}>
                    <PortfolioItem
                        checks={checks} 
                        image={imageSrc}
                        title="Recipes 2.0"
                        description="An interactive recipe management application..."
                        technologies={[
                            { name: 'React', icon: <SiReact /> },
                            { name: 'Node.js', icon: <FaNodeJs /> },
                            { name: 'Firebase', icon: <SiFirebase /> },
                            { 
                                name: 'Cloudinary', 
                                icon: <img src={cloudinaryIconSrc} alt="Cloudinary" style={{ width: '24px', height: '24px' }} />
                            },
                            { name: 'Mui', icon: <SiMui /> },
                        ]}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <PortfolioItem
                            checks={checks} 
                            image={imageSrc}
                            title="Clothing Store"
                            description="An interactive recipe management application..."
                            technologies={[
                                { name: 'React', icon: <SiReact /> },
                                { name: 'Node.js', icon: <FaNodeJs /> },
                                { name: 'Firebase', icon: <SiFirebase /> },
                                { name: 'Material Ui', icon: <SiMui /> },
                            ]}
                        />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <PortfolioItem
                            checks={checks} 
                            image={imageSrc}
                            title="YelpCamp"
                            description="An interactive recipe management application..."
                            technologies={[
                                { name: 'React', icon: <SiReact /> },
                                { name: 'Node.js', icon: <FaNodeJs /> },
                                { name: 'Firebase', icon: <SiFirebase /> },
                                { name: 'Material Ui', icon: <SiMui /> },
                            ]}
                        />        
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <PortfolioItem
                            checks={checks} 
                            image={imageSrc}
                            title="Portfolio"
                            description="An interactive recipe management application..."
                            technologies={[
                                { name: 'React', icon: <SiReact /> },
                                { name: 'Node.js', icon: <FaNodeJs /> },
                                { name: 'Firebase', icon: <SiFirebase /> },
                                { name: 'Material Ui', icon: <SiMui /> },
                            ]}
                        />        
                </Grid>
            </Grid>      
        </Box>   
    )
    
}

export default Portfolio;