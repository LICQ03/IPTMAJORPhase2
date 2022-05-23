import logo from './logo.svg';
import './App.css';
import {render} from "react-dom";
import {Route, Switch, useHistory} from "react-router-dom";
import {useState, useContext, createContext} from "react";
import {LoginCore} from "./Cores/LoginCore"
import {LoggedHomeCore} from "./Cores/LoggedInCores/LoggedHomeCore";
import {
    AppShell,
    Header,
    useMantineTheme,
    MantineTheme,
    Navbar,
    Aside,
    Footer,
    MediaQuery,
    Text,
    ActionIcon,
    useMantineColorScheme,
    Grid,
    Space
} from '@mantine/core';
import { createStyles, Title, Button, Container } from '@mantine/core';
import {Dots} from "tabler-icons-react";
import {NavBar2Core} from "./NavBarCores/Nav2";
import {MoonStars, Sun} from "tabler-icons-react";
import { MantineProvider, ColorSchemeProvider, Blockquote } from '@mantine/core';
import {GraphsCore} from "./Cores/LoggedInCores/CONTENT/GraphsCore";
import {IntegrationCore} from "./Cores/LoggedInCores/CONTENT/IntegrationCore";
import {InductionCore} from "./Cores/LoggedInCores/CONTENT/InductionCore";
import {ErrorCore} from "./404Core";
import {QuizCore} from "./Cores/LoggedInCores/CONTENT/QuizCore";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: 120,
        paddingBottom: 80,

        '@media (max-width: 755px)': {
            paddingTop: 80,
            paddingBottom: 60,
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    dots: {
        position: 'absolute',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

        '@media (max-width: 755px)': {
            display: 'none',
        },
    },

    dotsLeft: {
        left: 0,
        top: 0,
    },

    title: {
        textAlign: 'center',
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: -1,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        '@media (max-width: 520px)': {
            fontSize: 28,
            textAlign: 'left',
        },
    },

    description: {
        textAlign: 'center',

        '@media (max-width: 520px)': {
            textAlign: 'left',
            fontSize: theme.fontSizes.md,
        },
    },

    controls: {
        marginTop: theme.spacing.lg,
        display: 'flex',
        justifyContent: 'center',

        '@media (max-width: 520px)': {
            flexDirection: 'column',
        },
    },

    control: {
        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        '@media (max-width: 520px)': {
            height: 42,
            fontSize: theme.fontSizes.md,

            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },
}));





function App() {
    const [colorTheme, setColorTheme] = useState("light");
    const dark = colorTheme === 'dark';
    const [opened, setOpened] = useState(false);
    const WelcomePage = () => {
        const history = useHistory();
        localStorage.clear();
        const {classes} = useStyles();
        const theme = useMantineTheme();
        const particlesInit = async (main) => {
            console.log(main);

            await loadFull(main);
        };

        const particlesLoaded = (container) => {
            console.log(container);
        };


        return (
            <Container className={classes.wrapper} size={1400}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.9,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: colorTheme === 'dark' ? '#ffffff' : '#000000',
                            },
                            links: {
                                color: colorTheme === 'dark' ? '#ffffff' : '#000000',
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 3,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />

                <div className={classes.inner} style={{pointerEvents: "none", userSelect: "none"}}>
                    <Title className={classes.title}>
                        Your Easy {' '}
                        <Text component="span" color={theme.primaryColor} inherit>
                            Maths 4 You!
                        </Text>{' '}
                        for any level of maths
                    </Title>

                    <Container p={0} size={600}>
                        <Text size="lg" color="dimmed" className={classes.description}>
                                Is a capable learning platform for students who want to learn maths from a set course in the syllabus.
                        </Text>
                    </Container>

                    <div className={classes.controls} style={{pointerEvents: "all", userSelect: "all"}}>
                        <Button className={classes.control} onClick={()=>{history.push("/login")}} size="lg" variant="default" color="gray">
                            Get Started
                        </Button>
                    </div>
                </div>

            </Container>)
    }
    return (
        <MantineProvider theme={{ colorScheme: colorTheme }} withGlobalStyles withNormalizeCSS>
            <AppShell
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                fixed
                navbar={
                    <NavBar2Core />
                }

                footer={
                    <Footer height={60} p="md">
                        Math 4 You © 2022 - {new Date().getUTCDay()}/{new Date().getMonth()}/{new Date().getFullYear()}
                    </Footer>
                }
                header={<Header height={70} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <ActionIcon
                            variant="outline"
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => setColorTheme(dark ? "light":"dark")}
                            title="Toggle color scheme"
                        >
                            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
                        </ActionIcon>
                        <Space w="md" /> <Text> Maths 4 You!</Text>
                    </div>


                </Header>}
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}

            >
                <Switch>
                    <Route exact path="/" component={WelcomePage} />
                    <Route path="/login" component={LoginCore}/>
                    <Route path="/home" component={LoggedHomeCore}/>
                    <Route path="/graphs" component={GraphsCore}/>
                    <Route path="/integration" component={IntegrationCore}/>
                    <Route path="/induction" component={InductionCore}/>
                    <Route path="/quiz" component={QuizCore}/>

                    <Route path="*" component={ErrorCore} />

                </Switch>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
