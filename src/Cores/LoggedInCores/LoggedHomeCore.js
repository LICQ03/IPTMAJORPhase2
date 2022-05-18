import {Redirect, useHistory} from "react-router-dom";
//import {Toast, ToastContainer, Card, Button, Container, Col, Row, CardGroup} from "react-bootstrap";
import {
    Dialog,
    TextInput,
    Card,
    Image,
    Text,
    Badge,
    Button,
    Group,
    useMantineTheme,
    Table,
    Grid,
    ScrollArea
} from '@mantine/core';
import * as url from "url";
import {useEffect, useState} from "react";
const cardWidth = 300;
const cardHeight = "55vh";
const cardScrollHeight = "20vh";
export const LoggedHomeCore = () => {
    var loginVal = false;
    const [DialogState, setDialogState] = useState(true);
    const theme = useMantineTheme();
    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];
    const history = useHistory();
    if(localStorage.getItem("LOGGED") === "true") loginVal = true;
    return(
        <div>
            {loginVal ? <h1>Welcome {localStorage.getItem("USER")}</h1> : <Redirect to="/login" />}
            <Dialog
                opened={DialogState}
                withCloseButton
                onClose={() => setDialogState(false)}
                size="lg"
                radius="md"
            >
                <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
                    Maths 4 You!
                </Text>

                <Group align="flex-end">
                    <Text>Click top right to open your navbar</Text>
                </Group>
            </Dialog>
            <Group grow spacing={5}>
                <>
                    <div style={{ width: {cardWidth}, margin: 'auto' }}>
                        <Card shadow="sm" p="lg" style={{width: cardWidth, margin: 'auto', height: cardHeight}}>
                            <Card.Section>
                                <Image src="https://saylordotorg.github.io/text_intermediate-algebra/section_11/36dccf1e26f02f048fbd1d877667a147.png" height={140}/>
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Graphs and Equations</Text>
                            </Group>
                            <ScrollArea
                                style={{ height: cardScrollHeight, zIndex:0 }}
                                speed={0.8}
                                horizontal={false}
                                smoothScrolling>
                                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Chapter Name</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1A</td>
                                            <td>The sign of a function</td>
                                        </tr>
                                        <tr>
                                            <td>1B</td>
                                            <td>Vertical and horizontal asymptotes</td>
                                        </tr>
                                        <tr>
                                            <td>1C</td>
                                            <td>A curve-sketching menu</td>
                                        </tr>
                                        <tr>
                                            <td>1D</td>
                                            <td>Solving inequations</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Text>
                            </ScrollArea>

                            <Button fullWidth
                                    style={{
                                        position: "absolute",
                                        bottom: theme.spacing.md,
                                        left: 0,
                                        zIndex: 1
                                    }}
                                    variant="light"
                                    color="blue"
                                    size="md"
                                    onClick={()=>{history.push("/graphs")}}
                            >
                                Go to Graphs and Equations
                            </Button>
                        </Card>
                    </div>
                </>
                <>
                    <div style={{ width: {cardWidth}, margin: 'auto' }}>
                        <Card shadow="sm" p="lg" style={{width: cardWidth, margin: 'auto', height: cardHeight}}>
                            <Card.Section>
                                <Image src="https://www.mathsisfun.com/calculus/images/integral-area.svg" height={140} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Integration</Text>
                            </Group>
                            <ScrollArea
                                style={{ height: cardScrollHeight, zIndex:0 }}
                                speed={0.8}
                                horizontal={false}
                                smoothScrolling>
                            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Chapter Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2A</td>
                                        <td>Areas and the definite integral</td>
                                    </tr>
                                    <tr>
                                        <td>2B</td>
                                        <td>The fundamental theorem of calculus</td>
                                    </tr>
                                    <tr>
                                        <td>2C</td>
                                        <td>The definite integral and its properties</td>
                                    </tr>
                                    <tr>
                                        <td>2D</td>
                                        <td>The indefinite integral</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Text>
                            </ScrollArea>
                            <Button variant="light" color="blue" fullWidth style={{
                                position: "absolute",
                                bottom: theme.spacing.md,
                                left: 0,
                                zIndex: 2
                            }}
                            onClick={()=>{history.push("/integration")}}
                            >
                                Go to Integration
                            </Button>
                        </Card>
                    </div>
                </>
                <>
                    <div style={{ width: {cardWidth}, margin: 'auto' }}>
                        <Card shadow="sm" p="lg" style={{width: cardWidth, margin: 'auto', height: cardHeight}}>
                            <Card.Section>
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuLoEn0P2_VJQ7wgifoAlTZG1kMt9zXaN1A&usqp=CAU" height={140} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Math Induction</Text>
                            </Group>
                            <ScrollArea
                                style={{ height: cardScrollHeight, zIndex:0 }}
                                speed={0.8}
                                horizontal={false}
                                smoothScrolling>
                            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Chapter Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>3A</td>
                                        <td>Using mathematical induction for series</td>
                                    </tr>
                                    <tr>
                                        <td>3B</td>
                                        <td>Proving divisibility by mathematical induction</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Text>
                            </ScrollArea>
                            <Button variant="light" color="blue" fullWidth style={{
                                position: "absolute",
                                bottom: theme.spacing.md,
                                left: 0,
                                zIndex: 1
                            }}
                                    onClick={()=>{history.push("/induction")}}
                            >
                                Go to Math Induction
                            </Button>
                        </Card>
                    </div>
                </>

            </Group>
        </div>
    )
}