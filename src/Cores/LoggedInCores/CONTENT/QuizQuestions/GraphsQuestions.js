import {InlineMath} from "react-katex";
function translate(raw){
    return <InlineMath math={raw}/>
}


export const GraphsQuestions = {
    "quizTitle": "Graphs and Equations Quiz",
    "quizSynopsis": "This quiz will test your knowledge of graphs and equations. All content being tested is from the related content area for Graphs and Equations",
    "nrOfQuestions": "4",
    "questions": [
        {
            "question": "What is the horizontal asymptote of the graph of (x^{2}-1)/(x-4)",
            "questionType": "text",
            "questionPic": "", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "y=1",
                "y=2",
                "y=-1",
                "There are none"
            ],
            "correctAnswer": "4",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "D",
            "point": "20"
        },
        {
            "question": "If f(x) = x + 3 and g (x) = x^{2}, find f ○ g (x)",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "x^{2} + 3",
                "x^{3} + 3",
                "x^{2} + 4",
                "x + 4"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "A",
            "point": "20"
        },
        {
            "question": "If f(x) = x + 3 and g (x) = x^{2}, find g ○ g (5)",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "x^{2}+2",
                "x^{2}+3",
                "625",
                "45"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "C",
            "point": "10"
        },
        {
            "question": "What is the gradient for the line 4x^2 - 3 at x = 3?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "2",
                "24",
                "x",
                "4",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "DIFFERENTIATE IT U NUMPTY",
            "point": "30"
        }
    ]
}
export const IntegrationQuiz = {
    "quizTitle": "Integration Quiz",
    "quizSynopsis": "This quiz will test your knowledge of Integration! All content being tested is from the related content area for Integration",
    "nrOfQuestions": "4",
    "questions": [
        {
            "question": "The indefinite integral of ∫(x^2)dx",
            "questionType": "text",
            "questionPic": "", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "(x^3)/3 + c",
                "(x^2) + 1 + c",
                "x + c",
                "IT DOESNT EXIST + c"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "i bet i got u with it doesnt exist :)",
            "point": "20"
        },
        {
            "question": "The definite integral of ∫(x^2)dx with top limit x = 9 and bottom limit x = 0",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "241",
                "243",
                "245",
                "247"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "A",
            "point": "20"
        },
        {
            "question": "The definite integral of ∫(x^2)dx with top limit x = 0 and bottom limit x = 3",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "-243",
                "0",
                "you can integrate that",
                "wait what, you cant integrate that!"
            ],
            "correctAnswer": "4",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "The top limit in this example is bigger than the bottom limit. This is not possible. although it is technically, just deal with it i never mentioned this in the content this was based on so i tricked u :)",
            "point": "10"
        },
        {
            "question": "The indefinite integral of ∫(3x^2 + 2x + 2)dx",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "6x^3 + 2x^2 + 2",
                "x^3 + x^2 + 2x + c",
                "{x^4}/2 + 2x + c",
                "4",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": ".",
            "point": "30"
        }
    ]
}