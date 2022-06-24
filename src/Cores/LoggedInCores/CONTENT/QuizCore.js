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


//Main quiz constructor core that retuns the quiz
export const QuizCore = () => {
    const { classes, theme } = useStyles();

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
}
