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
    Button, Affix, Accordion, Menu, UnstyledButton, Avatar, Space, Alert, RadioGroup, Radio
} from "@mantine/core";
import {
    At
} from "tabler-icons-react";
import {useState} from "react";
import CanvasDraw from "react-canvas-draw";
import {InlineMath, BlockMath} from "react-katex";

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
const GraphsQuestions = [
    {
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
    },
    {
        Header: <div>If {mathIt("f(x) = x + 3")} and { mathIt("g(x) = x^2")}, find {mathIt("f \\circ g (x)")}</div>,
        Answers: [
            {
                text: <diV>{mathIt("x^2+4")}</diV>,
                correct: false,
            },
            {
                text: <diV>{mathIt("x^2+3")}</diV>,
                correct: true,
            },
            {
                text: <diV>{mathIt("x^3+4")}</diV>,
                correct: false,
            },
            {
                text: <diV>{mathIt("x^3+3")}</diV>,
                correct: false,
            },
        ],
        Answered: false
    },
    {
        Header: <div>Find the horizontal asymptotes in, { mathIt("y={x^{2}-1 \\over x-4}")}</div>,
        Answers: [
            {
                text: <diV>{mathIt("y=0")}</diV>,
                correct: false,
            },
            {
                text: <diV>{mathIt("y=1")}</diV>,
                correct: false,
            },
            {
                text: <diV>{mathIt("y=-1")}</diV>,
                correct: false,
            },
            {
                text: <diV>There are none</diV>,
                correct: true,
            },
        ],
        Answered: false
    },

];

class NewRadio {
    constructor(value, question) {
        this.value = value;
        this.question = question;
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




    return(
        <div>
            <Affix position={{right:10, bottom:20}}>
                <CanvasDraw canvasHeight={SECONDARY_COL_HEIGHT} brushRadius={2}  />
            </Affix>
            <div>
                QUIZ
                <Space size="lg" />
                <Accordion iconPosition="right" disableIconRotation iconSize={90}>

                    {currentQuestions.map((question, index) => {
                        // var ButtonGradient = question.Answered ? { from: 'teal', to: 'lime', deg: 105 } : { from: 'orange', to: 'red' };
                        return(
                            <Accordion.Item label={<Text size="md" weight="bold">
                                {question.Header}
                            </Text>} icon={<Avatar id={"$ID"+index} color={question.Answered ? "orange":"orange"} size={80}>Q{index+1}</Avatar>}>
                                <RadioGroup label="Select your answer"
                                            description="NOTE: Use the canvas to draw up some working out"
                                            color="lime"
                                            required
                                            orientation="vertical"

                                >

                                    {question.Answers.map((answer, qNum) => {

                                        options.push(new NewRadio(answer, question.Header));
                                        return(
                                            <Radio label={answer.text} id={'RID' + index} value={answer.text} />
                                        )
                                    })}

                                </RadioGroup>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            </div>


        </div>
    )
}