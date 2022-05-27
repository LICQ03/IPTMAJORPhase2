import {Button, Navbar, ScrollArea, Text, useMantineTheme, Stack, Menu, Divider} from '@mantine/core';
import {Link, useHistory} from "react-router-dom";
import {useState, useEffect, useContext, createContext} from "react";
import {ChartAreaLine, MathFunction, Math, QuestionMark, Video} from "tabler-icons-react";




export const NavBar2Core = () => {
    const loginVal = createContext(localStorage.getItem("LOGGED"));
    const loginValue = useContext(loginVal);
    const history = useHistory();
    //window.addEventListener("")
    const navItemsNoLogin =() => {
        return(
            <Navbar.Section mx="-xs" px="xs">
                <Stack spacing="xs">
                    <Button style={{width:"100%", margin:"auto"}} variant="outline" onClick={()=>{history.push("/")}}>Home</Button>
                    <Button style={{width:"100%", margin:"auto"}} variant="outline" onClick={()=>{history.push("/login")}}>Login</Button>
                </Stack>
            </Navbar.Section>
        )
    }

    const navLoggedIn = () => {
        return(
            <Navbar.Section mx="-xs" px="xs">
                <Stack spacing="xs">
                    <Button style={{width:"100%", margin:"auto"}} variant="outline" onClick={()=>{history.push("/home")}}>Home</Button>
                    <Menu control={<Button style={{width:"100%", margin:"auto"}} variant="outline">Content</Button>} position="right" transition="scale-x"
                          transitionDuration={100}
                          transitionTimingFunction="ease"
                          placement="center">
                        <Menu.Label>Chapters</Menu.Label>
                        <Menu.Item style={{width:"100%", margin:"auto"}}
                                   icon={<MathFunction size={24}/>} variant="outline" onClick={()=>{history.push("/graphs")}}>
                            Graphs and Equations
                        </Menu.Item>
                        <Menu.Item style={{width:"100%", margin:"auto"}}
                                   icon={<ChartAreaLine size={24}/>} variant="outline" onClick={()=>{history.push("/integration")}}>
                            Integration
                        </Menu.Item>
                        <Menu.Item style={{width:"100%", margin:"auto"}}
                                   icon={<Math size={24}/>} variant="outline" onClick={()=>{history.push("/induction")}}>
                            Math Induction
                        </Menu.Item>
                        <Divider/>
                        <Menu.Label>Resources</Menu.Label>
                        <Menu.Item style={{width:"100%", margin:"auto"}}
                               icon={<QuestionMark size={24}/>} variant="outline" onClick={()=>{history.push("/quiz")}}>
                            Quiz
                        </Menu.Item>
                        <Menu.Item style={{width:"100%", margin:"auto"}}
                               icon={<Video size={24}/>} variant="outline" onClick={()=>{history.push("/video")}}>
                            Extras
                        </Menu.Item>
                    </Menu>
                    <Button style={{width:"100%"}} variant="outline" onClick={()=>{
                        setNavItems(navItemsNoLogin());
                        history.push("/login");
                    }}>Log Out</Button>
                </Stack>
            </Navbar.Section>
        )

    }

    const [navItems, setNavItems] = useState(localStorage.getItem("LOGGED") !== "true" ? navLoggedIn() : navItemsNoLogin());
    function handleUserLogin(e){
        setNavItems(navLoggedIn());
        console.log("logged in");
        //window.dispatchEvent("storage");
    }
    /* if(localStorage.getItem("LOGGED") === "true"){
     if(localStorage.getItem("LOGGED") === "true" && navItems !== navLoggedIn()){
         setNavItems(navLoggedIn());
     }else{
        // setNavItems(navItemsNoLogin());
     }
     */

    useEffect(() => {
        window.removeEventListener('loggedIn', (e)=>handleUserLogin(e));

        window.addEventListener('loggedIn', (e)=>handleUserLogin(e));

    }, []);

    return(
        <Navbar height="100%" p="xs" padding="md" width={{sm: 200, lg: 300, base: 100}}>
            {navItems}
        </Navbar>)
}
