import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import {useNavigate, BrowserRouter, Routes, Route} from 'react-router-dom'
import {Sidebar} from "./Sidebar";

export default function App() {
    return (
            <BrowserRouter basename='msr'>
                <ThemeProvider theme={theme}>
                <CssBaseline />

                {/* Routes nest inside one another. Nested route paths build upon
                parent route paths, and nested route elements render inside
                parent route elements. See the note about <Outlet> below. */}
                <Routes>
                    <Route path="/" element={<Main />}>
                        {/*<Route element={<Main />} />*/}
                        {/*<Route path="about" element={<About />} />*/}
                        {/*<Route path="dashboard" element={<Dashboard />} />*/}

                        {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
                        {/*<Route path="*" element={<NoMatch />} />*/}
                    </Route>
                </Routes>
                </ThemeProvider>
            </BrowserRouter>
    );
}

function Main() {
    const navigate = useNavigate();
    return (
        <Box>
            <Sidebar />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            MSR
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Something short and leading about the collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so folks
                            don&apos;t simply skip over it entirely.
                        </Typography>
                    </Container>
                </Box>
            </main>
        </Box>
    );
}
