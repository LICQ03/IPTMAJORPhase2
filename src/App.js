import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
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
import {NavBar2Core} from "./NavBarCores/Nav2";
import {MoonStars, Sun} from "tabler-icons-react";
import { MantineProvider, ColorSchemeProvider, Blockquote } from '@mantine/core';
import {GraphsCore} from "./Cores/LoggedInCores/CONTENT/GraphsCore";

const WelcomePage = () => {
    localStorage.clear();
    return (
        <div>
            <h1>Welcome to Maths 4 You</h1>
            <hr/>
            <h2>Please login to get started</h2>
            <hr/>
            <Blockquote cite="– Ghandi">
                I had a dream
            </Blockquote>
        </div>)
}

function App() {
    const [colorTheme, setColorTheme] = useState("dark");
    const dark = colorTheme === 'dark';
    const [opened, setOpened] = useState(false);

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
                        <Text>  |  Maths 4 You!</Text>
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
                </Switch>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
