import {
    Card,
    createStyles,
    RingProgress,
    Group,
    Text,
    Grid,
    Container,
    Skeleton,
    SimpleGrid,
    Button,
    Affix,
    Accordion,
    Menu,
    UnstyledButton,
    Avatar,
    Space,
    Alert,
    RadioGroup,
    Radio,
    Pagination,
    Title,
    ScrollArea
} from "@mantine/core";
import Quiz from "react-quiz-component";

import {
    At
} from "tabler-icons-react";
import {GraphsQuestions, IntegrationQuiz} from "./QuizQuestions/GraphsQuestions";
import {useState} from "react";
import CanvasDraw from "react-canvas-draw";
import {InlineMath, BlockMath} from "react-katex";
import {Col, Row} from "react-bootstrap";

function mathIt(str) {
    return <InlineMath math={str}/>;
}
const PRIMARY_COL_HEIGHT = 1000;
const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    label: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        lineHeight: 1,
    },

    lead: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        fontSize: 22,
        lineHeight: 1,
    },

    inner: {
        display: 'flex',

        [theme.fn.smallerThan(30)]: {
            flexDirection: 'column',
        },
    },

    ring: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',

        [theme.fn.smallerThan(350)]: {
            justifyContent: 'center',
            marginTop: theme.spacing.md,
        },
    },
    canvas: {


    },
    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },

    name: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));
var allQuestions = [ {
    Header: <div>Can {mathIt("x^3+1 \\geq x^2+x")} {' '} Be written as {mathIt("x^3-x^2-x+1 \\geq 0")} </div>,
    Answers: [
        {
            text: "True",
            correct: true,
        },
        {
            text: "False",
            correct: false,
        },
    ],
    Answered: false
}];

const GQ = {
    "quizTitle": "React Quiz Component Demo",
    "quizSynopsis": "Do you want to learn more about graphs? well here we are. This quiz will test your knowledge of graphs.",
    "nrOfQuestions": "4",
    "questions": [
        {
            "question": "How can you access the state of a component from inside of a member function?",
            "questionType": "text",
            "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "this.getState()",
                "this.prototype.stateValue",
                "this.state",
                "this.values"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
        {
            "question": "ReactJS is developed by _____?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "Google Engineers",
                "Facebook Engineers"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
        {
            "question": "ReactJS is an MVC based framework?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "True",
                "False"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "10"
        },
        {
            "question": "Which of the following concepts is/are key to ReactJS?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "Component-oriented design",
                "Event delegation model",
                "Both of the above",
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "30"
        },
        {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "questionType": "photo",
            "answerSelectionType": "single",
            "answers": [
                "https://dummyimage.com/600x400/000/fff&text=A",
                "https://dummyimage.com/600x400/000/fff&text=B",
                "https://dummyimage.com/600x400/000/fff&text=C",
                "https://dummyimage.com/600x400/000/fff&text=D"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
        {
            "question": "What are the advantages of React JS?",
            "questionType": "text",
            "answerSelectionType": "multiple",
            "answers": [
                "React can be used on client and as well as server side too",
                "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
                "React components have lifecycle events that fall into State/Property Updates",
                "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
            ],
            "correctAnswer": [1, 2, 4],
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
    ]
}


class NewRadio {
    constructor(i, text, correct) {
        this.index = i;
        this.text = text;
        this.correct = correct;
        this.push();
    }
    push(){
        let potetialPush = {
            text: this.text,
            correct: this.correct
        }
        allQuestions.push(potetialPush);
    }

}


export const QuizCore = () => {
    const { classes, theme } = useStyles();
    const [completed, setCompleted] = useState(8);
    const [total, setTotal] = useState(10);
    const [currentQuestions, setCurrent] = useState(GraphsQuestions);
    const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;


    const ProgressCard = () => {
        return(
            <Card withBorder p="xl" width="100%" radius="md" className={classes.card}>
                <div className={classes.inner}>
                    <div>
                        <Text size="xl" className={classes.label}>
                            Quiz
                        </Text>

                        <div>
                            <Text className={classes.lead} mt={30}>
                                {3}
                            </Text>
                            <Text size="xs" color="dimmed">
                                Completed
                            </Text>
                        </div>
                        <Group mt="lg"></Group>
                    </div>

                    <div className={classes.ring}>
                        <RingProgress
                            roundCaps
                            thickness={6}
                            size={150}
                            sections={[{ value: (completed / total) * 100, color: theme.primaryColor }]}
                            label={
                                <div>
                                    <Text align="center" size="lg" className={classes.label} sx={{ fontSize: 22 }}>
                                        {((completed / total) * 100).toFixed(0)}%
                                    </Text>
                                    <Text align="center" size="xs" color="dimmed">
                                        Completed
                                    </Text>
                                </div>
                            }
                        />
                    </div>
                </div>
            </Card>

        )
    }


    var AccordianObjects = [];
    var options = [];
    const [selectedNum, setSelectedNum] = useState(0);
    const [selected, setSelected] = useState(currentQuestions[0]);

    return (
        <ScrollArea
            speed={0.8}
            className="area"
            smoothScrolling={true}
            default={true}
        height="65vh">
        <Quiz quiz={GraphsQuestions} shuffle={true}/>
            <Quiz quiz={IntegrationQuiz} shuffle={true}/>
            <Text>
                Please note: Math induction style questions are proving questions not solving so no test because that would
                basically be impossible
            </Text>
        </ScrollArea>
    )

    /*return(
        <div>
            <Affix position={{right:10, bottom:20}}>
            </Affix>
            <Affix
                position={{
                    bottom: 10,
                    right: 20,
                }}>
                <Pagination total={currentQuestions.length} onChange={(v)=>{
                    setSelected(currentQuestions[v-1]);
                    setSelectedNum(v-1);
                    new NewRadio(v-1, currentQuestions[v-1].Answers.text, currentQuestions[v-1].Answers.correct);
                    console.log(selected)}}/>
            </Affix>
            <div>
                <Space size="lg" />
                <RadioGroup label={<Title order={3}>{selected.Header}</Title>} onSelect={(v)=>{console.log(v)}} orientation="vertical">
                    {selected.Answers.map((v, i) => {
                        /*return(
                            <Radio
                                key={i}
                                label={v.text}
                                value={v.correct}
                                onChange={(e) => {
                                    console.log(e.target.value);

                                }}
                            />
                        )

                    {QUESTIONFORMAT[selectedNum].text.map((v, i) => {
                        return(
                            <Radio
                                key={selectedNum+""+i}
                                label={v.text}
                                value={v.text}
                                onChange={(e) => {
                                    console.log(e.target.value);

                                }}
                            />
                        )
                    })}
                </RadioGroup>
                

            </div>


        </div>
    )
}*/
}
