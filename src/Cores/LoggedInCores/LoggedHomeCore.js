import {Redirect} from "react-router-dom";
//import {Toast, ToastContainer, Card, Button, Container, Col, Row, CardGroup} from "react-bootstrap";
import {Dialog, TextInput, Card, Image, Text, Badge, Button, Group, useMantineTheme, Table, Grid} from '@mantine/core';
import * as url from "url";
import {useEffect, useState} from "react";
const cardWidth = 250;

export const LoggedHomeCore = () => {
    var loginVal = false;
    const [DialogState, setDialogState] = useState(true);
    const theme = useMantineTheme();
    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

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
            <Group grow spacing="1">
                <>
                    <div style={{ width: {cardWidth}, margin: 'auto' }}>
                <Card shadow="sm" p="lg">
                    <Card.Section>
                        <Image src="https://saylordotorg.github.io/text_intermediate-algebra/section_11/36dccf1e26f02f048fbd1d877667a147.png" height={160}/>      </Card.Section>

                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Text weight={500}>Graphs and Equations</Text>
                    </Group>

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
                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    Go to Graphs and Equations
                    </Button>
                </Card>
            </div>
                </>
                <>
                    <div style={{ width: {cardWidth}, margin: 'auto' }}>
                <Card shadow="sm" p="lg">
                    <Card.Section>
                        <Image src="https://www.mathsisfun.com/calculus/images/integral-area.svg" height={160} />
                    </Card.Section>

                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Text weight={500}>Integration</Text>
                    </Group>

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
                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    Go to Integration
                    </Button>
                </Card>
            </div>
                </>
                <>
                    <div style={{ width: {cardWidth}, margin: 'auto' }}>
                        <Card shadow="sm" p="lg">
                            <Card.Section>
                                <Image src="https://www.mathsisfun.com/calculus/images/integral-area.svg" height={160} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Integration</Text>
                            </Group>

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
                            <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                Go to Graphs and Equations
                            </Button>
                        </Card>
                    </div>
                </>

            </Group>
        </div>
    )
}