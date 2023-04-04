import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Copyright from "./Copyright";
import theme from "./theme";
import {useNavigate, BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar} from "./Navbar";

const cards = [
    {
        id: 1,
        label: 'PCAR',
        route: '/pcar'
    },{
        id: 2,
        label: 'MSR',
        route: '/msr'
    },{
        id: 3,
        label: 'MSA',
        route: '/msa'
    },{
        id: 4,
        label: 'Performance',
        route: '/performance'
    },
];

export default function App() {
    return (
            <BrowserRouter>
                {/* Routes nest inside one another. Nested route paths build upon
                parent route paths, and nested route elements render inside
                parent route elements. See the note about <Outlet> below. */}
                <Routes>
                    <Route path="/" element={<Main />}>
                        {/*<Route index element={<Home />} />*/}
                        {/*<Route path="about" element={<About />} />*/}
                        {/*<Route path="dashboard" element={<Dashboard />} />*/}

                        {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
                        {/*<Route path="*" element={<NoMatch />} />*/}
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

function Main() {
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <Box>
            <CssBaseline />
            <Navbar />
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
                            Portal
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Something short and leading about the collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so folks
                            don&apos;t simply skip over it entirely.
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="xl">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    onClick={() => navigate(card.route)}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            p: 2,
                                        }}
                                        image="/vite.svg"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.label}
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}

            </Box>
        </ThemeProvider>
    );
}
