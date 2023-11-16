import {SiReact,SiMui, SiAmazonaws, SiSass, SiFirebase,SiMapbox, SiMongodb, SiRender, SiPassport, SiBootstrap, SiExpress, SiNetlify, SiVercel} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import cloudinaryIconSrc from '../assets/cloudinary.svg'

export const technologyIcons = {
    'React': <SiReact />,
    'Node.js': <FaNodeJs />,
    'Firebase': <SiFirebase />,
    'Material UI': <SiMui />,
    'Cloudinary': <img src={cloudinaryIconSrc} alt="Cloudinary" style={{ width: '24px', height: '24px' }} />,
    'MongoDB': <SiMongodb />,
    'Passport.js': <SiPassport />,
    'Bootstrap': <SiBootstrap />,
    'Express': <SiExpress />,
    'Netlify': <SiNetlify />,
    'Vercel': <SiVercel />,
    'AWS': <SiAmazonaws />,
    'Render': <SiRender />,
    'Mapbox': <SiMapbox />,
    'Sass': <SiSass />
  };
  