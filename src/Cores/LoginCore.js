import {Form, Button, Container, Row, Col, InputGroup, FormText} from "react-bootstrap";
import {useState, useContext, createContext} from "react";
import './loginCSS.css';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {NavBar2Core} from "../NavBarCores/Nav2";
import {Text, useMantineTheme} from "@mantine/core";
const event = document.createEvent("CustomEvent");
    event.initCustomEvent("loggedIn", true, true);
export const LoginCore = () => {
    const history = useHistory();
    const theme = useMantineTheme();
    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    const [userInputData, setUserInputData] = useState(
        {
            username: "",
            password: ""
        });
    const [errorMessage, setErrorMessage] = useState("");
    function changeUserData(username, password){
        setUserInputData({
            username: username,
            password: password
        })
        console.log(userInputData)
    }
    function buttonClickSubmit(){

        axios.post("http://ipt-api.herokuapp.com/users/loginIdentifier", userInputData).then(
            function (res){
                if(res.data.completion) {
                    console.log("correct input")
                    window.localStorage.setItem("LOGGED", "true");
                    window.localStorage.setItem("USER", userInputData.username);
                    //window.dispatchEvent(new Event("storage"));
                    //NavBar2Core()

                    document.dispatchEvent(event);

                    history.push("/home")

                }
                else{
                    setErrorMessage("Incorrect Username and Password")
                }
            });

    }
    localStorage.setItem("LOGGED", false);
    return(
        <div>
            <div>
                <Form>
                    <Container className="rounded justify-content-md-center loginMain">
                        <Row>
                            <Col>
                                <InputGroup><FormText>Login</FormText></InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" onChange={(v)=>{
                                        changeUserData(v.target.value, userInputData.password)
                                    }} placeholder="Username" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control type="password" onChange={(v)=>{
                                        changeUserData(userInputData.username, v.target.value)
                                    }} placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text className="text-sm" color={secondaryColor}>{errorMessage}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button type="button" onClick={()=>{buttonClickSubmit()}}>Submit</Button>
                            </Col>
                        </Row>

                    </Container>
                </Form>
            </div>
        </div>
    )
}