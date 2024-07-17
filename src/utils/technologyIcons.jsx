import {
  SiReact,
  SiMui,
  SiReactrouter,
  SiOpenai,
  SiVite,
  SiCreatereactapp,
  SiAmazonaws,
  SiFirebase,
  SiSass,
  SiMapbox,
  SiMongodb,
  SiRender,
  SiPassport,
  SiBootstrap,
  SiNetlify,
  SiVercel,
  SiPuppeteer,
  SiLinkedin,
  SiTailwindcss,
  SiNextdotjs,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiLibreoffice,
  SiGooglecloud,
  SiGooglecalendar,
  SiGooglecloudstorage,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import cloudinaryIconSrc from "../assets/cloudinary.svg";

export const technologyIcons = {
  React: <SiReact />,
  "Node.js": <FaNodeJs />,
  "Next.js": <SiNextdotjs />,
  Firebase: <SiFirebase />,
  Firestore: <SiFirebase />,
  "Material UI": <SiMui />,
  Cloudinary: (
    <img
      src={cloudinaryIconSrc}
      alt="Cloudinary"
      style={{ width: "24px", height: "24px" }}
    />
  ),
  MongoDB: <SiMongodb />,
  "Passport.js": <SiPassport />,
  Bootstrap: <SiBootstrap />,
  Express: <SiExpress />,
  Netlify: <SiNetlify />,
  Vercel: <SiVercel />,
  AWS: <SiAmazonaws />,
  Render: <SiRender />,
  "Tailwind CSS": <SiTailwindcss />,
  Mapbox: <SiMapbox />,
  Sass: <SiSass />,
  OpenAi: <SiOpenai />,
  Vite: <SiVite />,
  "Mui/Joy": <SiMui />,
  "Create React App": <SiCreatereactapp />,
  "React Router": <SiReactrouter />,
  Puppeteer: <SiPuppeteer />,
  LinkedIn: <SiLinkedin />,
  "Chakra UI": <SiChakraui />,
  Docker: <SiDocker />,
  LibreOffice: <SiLibreoffice />,
  GoogleCloud: <SiGooglecloud />,
  FullCalendar: <SiGooglecalendar />,
  SendGrid: <MdEmail />,
  GoogleCloudStorage: <SiGooglecloudstorage />,
};
