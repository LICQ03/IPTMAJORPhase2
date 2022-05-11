import {Form, Button, Container, Row, Col, InputGroup, FormText} from "react-bootstrap";
import {useState, useContext, createContext} from "react";
import './loginCSS.css';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {NavBar2Core} from "../NavBarCores/Nav2";
export const LoginCore = () => {
    const history = useHistory();
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
        axios.post("http://localhost:5000/users/loginIdentifier", userInputData).then(
            function (res){
                if(res.data.completion) {
                    console.log("correct input")
                    window.localStorage.setItem("LOGGED", true);
                    window.localStorage.setItem("USER", userInputData.username);
                    //window.dispatchEvent(new Event("storage"));
                    //NavBar2Core()

                    window.dispatchEvent(new Event("storage"));
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
                                <Button type="button" onClick={()=>{buttonClickSubmit()}}>Submit</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p3 className="text-dark text-sm">{errorMessage}</p3>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        </div>
    )
}