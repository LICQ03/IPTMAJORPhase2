import functionPlot from "function-plot";
import Plot from "react-function-plot";
import imgExample from "./img/mathinductionexample.png";
import {
    Button,
    Grid,
    Input,
    Paper,
    ScrollArea,
    Tabs,
    Text,
    Title,
    List,
    Divider,
    Space,
    createStyles,
    useMantineTheme,
    Image
} from "@mantine/core";
import {useState, useEffect} from "react";

import {InlineMath, BlockMath} from "react-katex";
import {Line} from "tabler-icons-react";
//import {FunctionPlot} from "function-plot/dist/stories/FunctionPlot";
//import {derivative} from 'mathjs';
const useStyles = createStyles((theme) => ({
    defineNewEquation: {
        backgroundColor: theme.fn.rgba('#f7e3d0', 0.4),
        width: '65%',
    },
}));
function mathIt (txt){
    return <InlineMath math={txt}/>
}
function blockIt (txt){
    return <BlockMath math={txt}/>
}

export const InductionCore = () => {
    const { classes } = useStyles();
    //Chapters  
    const InductionForSeries = () => {
        const [functionI, setFunctionI] = useState("y=(x+3)(x^2-1)");
        let contentsBounds = document.body.getBoundingClientRect();
        let width = "100%";
        let height = "50%";
        let ratio = contentsBounds.width / width;
        width *= ratio;
        height *= ratio;
        var options = {
            target: "#graph",
            width,
            height,
            yAxis: { label: "Y Axis", domain: [-9, 9] },
            xAxis: { label: "X Axis", domain: [-9, 9] },
            grid: true,
            data: [
                {
                    fn: functionI,
                }
            ]
        }
        try {
            functionPlot(options);
            console.log(functionI)
        }
        catch (e) {
            console.log(e);
        }
        useEffect(() => {
            functionPlot(options);
        }, [setFunctionI]);
        return(
            <div>
                <Title>Using mathematical induction for series</Title>
                <ScrollArea style={{ height: "65vh" }} type="always">
                    <Space h={"xl"}/>
                    <Text>
                        The logic of mathematical induction is most easily understood when it is applied to sums of series.
                        In this course, proof by mathematical induction can only be applied after we already have a clear statement
                        of the theorem to be proven. The example below examines a typical situation in which a clear pattern is
                        easily generated, but no obvious explanation emerges for why that pattern occurs.


                        <Title order={3}>An example proving a formula for the sum of a series</Title>
                        Find a formula for the sum of the first n cubes, and prove it by mathematical induction.
                        Some calculations for low values of n: Here is a table of values of the first 10 positive cubes and their
                        partial sums.
                        The surprising thing here is that the last row consists of the squares of the triangular numbers, where the nth
                        triangular number is the sum of all the positive integers up to n,
                        <BlockMath math="1 + 2 = 3, 1 + 2 + 3 = 6, 1 + 2 + 3 + 4 = 10, 1 + 2 + 3 + 4 + 5 = 15"/>.
                        Using the formula for the sum of an AP (the number of terms times the average of first and last term), the
                        formula for the nth triangular number is: {blockIt("{1 \\over 2} n (n + 1)")}.
                        Hence the sum of the first n cubes seems to be: {blockIt("{1 \\over 4} n^2 (n + 1)^2")}.
                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>MATHEMATICAL INDUCTION</Title>
                            <Text>
                                Suppose that a statement is to be proven for all integers n greater than or equal to some starting
                                value n1. Suppose also that two things have been proven:
                                <List size="md" type="ordered">
                                    <List.Item>The statement is true for {mathIt("n = n_{1}")}</List.Item>
                                    <List.Item>Whenever the statement is true for some positive integer {mathIt('k ≥ n_{1}')}. then it is also true for the next
                                        integer {mathIt('k + 1')}.
                                    </List.Item>
                                    <List.Item>Then the statement is true for all integers {mathIt('n ≥ n_{1}')}</List.Item>
                                </List>
                            </Text>
                        </Paper>
                    </Text>
                </ScrollArea>

            </div>
        )
    }
    const ProvingDivisibility = () => {
        return(
            <div>
                <Title>Proving divisibility by mathematical induction</Title>
                <Space h={"xl"}/>
                <ScrollArea style={{ height: "65vh" }} type="always">
                    <Text>
                        Divisibility is another standard situation where mathematical induction can be used to prove a result. The
                        example below again uses low values of n to establish a hypothesis, and then proves that hypothesis using
                        mathematical induction.
                         <Title order={3}>An example proving divisibility</Title>
                        Find the largest integer that is a divisor of {mathIt("3^{4n} - 1")} for all integers n ≥ 0. Then prove the result by
                        mathematical induction.
                        It seems likely from this that 80 is a divisor of all the numbers — remember that every number is a divisor of
                        zero. Certainly no number greater than 80 can be a divisor of all of them. So we write down the likely theorem
                        and try to provide a proof. Various proofs are available, but here is the proof by mathematical induction:
                    <Image src={imgExample} shadow="xl" radius="lg"  width="50vw"/>


                    </Text>
                </ScrollArea>
            </div>
        )
    }


    const subFunctions = {
        "SOF": {
            name: "Sign of a function",}
    }


    //const ref = useRef<MathView.MathViewRef>(null);
    return(
        <>
            <Tabs>
                <Tabs.Tab label="Using Mathematical Induction for Series">{InductionForSeries()}</Tabs.Tab>
                <Tabs.Tab label="Proving divisibility by mathematical induction">{ProvingDivisibility()}</Tabs.Tab>
            </Tabs>
        </>)
}
