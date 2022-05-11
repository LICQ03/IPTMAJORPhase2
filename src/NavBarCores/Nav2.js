import {Button, Navbar, ScrollArea, Text, useMantineTheme, Stack} from '@mantine/core';
import {Link, useHistory} from "react-router-dom";
import {useState, useEffect, useContext, createContext} from "react";




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
                    <Button style={{width:"100%"}} variant="outline" onClick={()=>{
                        setNavItems(navItemsNoLogin());
                        history.push("/login");
                    }}>Log Out</Button>
                </Stack>
            </Navbar.Section>
        )

    }

    const [navItems, setNavItems] = useState(navItemsNoLogin);
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

    }, [navItemsNoLogin]);
    window.addEventListener('storage', (e)=>handleUserLogin(e));

    return(
        <Navbar height="100%" p="xs" padding="md" width={{sm: 200, lg: 300, base: 100}}>
            {navItems}
        </Navbar>)
}
