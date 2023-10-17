import { Box, Grid } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './pages/navigation/navigation.component';
import Home from "./pages/home/home.component"
import About from "./pages/about/about.component"
import Resume from './pages/resume/resume.component';
import Portfolio from './pages/portfolio/portfolio.component';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Box style={{ paddingTop: '60px' }}>
        <Grid container justifyContent="center" alignItems="center" style={{ width: '100%' }}>
          <Grid item xs={false} sm={1} md={1} />
          <Grid item xs={12} sm={10} style={{ width: '100%' }}>
            <Grid container justifyContent="center" alignItems="center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Portfolio" element={<Portfolio/>} />
              </Routes>
            </Grid>
          </Grid>
          <Grid item xs={false} sm={1} md={1} />
        </Grid>
      </Box>
    </Router>
  );
};

export default App;
