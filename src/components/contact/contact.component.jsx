import { Box, Tooltip, Link, Grid} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { LinkedIn } from '@mui/icons-material';
import { StyledIconButton, StyledLegend } from '../../utils/styledComponents';

const Contact = ({theme}) => {

    const padding = '4px'
    const iconSize= '30px'	
    const marginX = '40px'


    return (
            <Box component={Grid} container  sx={{ width:'60%', backgroundColor: theme.palette.additional.brown, padding:'3px', borderRadius: '10px'}} justifyContent='center'>   
                <Box component={Grid} item xs={12}>
                    <StyledLegend sx={{ marginLeft:'10px', marginY:'6px'}}> contact me </StyledLegend>            
                </Box>
    
                <Box component={Grid} item xs={12} display="flex" justifyContent='space-around' width="100%"> 
       
                <Tooltip title='Check out my GitHub'>
                    <StyledIconButton 
                        component={Link}
                        href='https://github.com/louderthanme/'
                        target="_blank"
                            el="noopener noreferrer"
                        sx={{ padding: padding,  }}
                        >
                        <GitHubIcon sx={{fontSize:iconSize}}/>
                    </StyledIconButton>
                </Tooltip>

                <Tooltip title='Send me an email'>
                    <StyledIconButton 
                        component={Link}
                        href='mailto:rubenaguirrelizcano@gmail.com'
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ padding: padding,}}
                        >
                        <EmailIcon sx={{fontSize:iconSize}}/>
                    </StyledIconButton>
                </Tooltip>
                <Tooltip title='Connect on LinkedIn'>
                    <StyledIconButton 
                        component={Link}
                        href='https://www.linkedin.com/in/ruben-aguirre-917278145/'
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ padding: padding,  }}
                        >
                        <LinkedIn sx={{fontSize:iconSize}}/>
                    </StyledIconButton>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Contact;