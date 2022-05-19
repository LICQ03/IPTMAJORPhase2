import functionPlot from "function-plot";
import Plot from "react-function-plot";
import {Button, Grid, Input, Paper, ScrollArea, Tabs, Text, Title, List, Divider, Space, createStyles, useMantineTheme } from "@mantine/core";
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


export const GraphsCore = () => {
    const { classes } = useStyles();
    //Chapters  
    const SignOfAFunction = () => {
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
                <Title>The Sign Of A Function</Title>
                <ScrollArea style={{ height: "65vh" }} type="always">
                    <Space h={"xl"}/>
                    <Text>
                        The main purpose of this section is to review briefly the method of finding the sign of a function by using a
                        table of signs with test values that dodge around zeroes and discontinuities.
                        This algorithm has the same two purposes as the whole chapter. First, when sketching a curve, we usually
                        want to know very early where the curve is above the x-axis and where it is below. Secondly, solving an
                        inequation is equivalent to finding the sign of a function, because we can always put all the terms on the left.
                        For example,
                        <Space h="md"/>
                        <InlineMath math="x^{3}+1 ≥ x^{2}+x" />
                        <Space w="md"/> {' '}can be written as{''} <Space w="md"/>
                        <InlineMath math="x^{3}-x^{2} - x+1≥0" />
                        <Space h="md"/>

                        Before all this, however, two extra pieces of notation need to be introduced.
                        • Bracket interval notation is an alternative to inequality interval notation.
                        • Composition of functions has an alternative notation f <inlineMath math="\circ" /> g.
                        <Title order={3}>Bracket interval notation </Title>
                        There is an alternative notation for intervals that will make the notation in this section and later a little more
                        concise. The notation encloses the endpoints of the interval in brackets, using a square bracket if the endpoint
                        is included and a round bracket if the endpoint is not included

                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>BRACKET INTERVAL NOTATION</Title>
                            <Text>
                                A square bracket means that the endpoint is included, and a round bracket means that the endpoint
                                is not included.
                                <List size="md">

                                    <List.Item>For {"a < b"}, we can form the four bounded intervals below. The
                                        first is closed, the last is open, and
                                        the other two are neither open nor closed.</List.Item>
                                    <Space h="md" />
                                    <Text align="center">[a, b] and [a, b) and (a, b] and (a, b).</Text>
                                    <Space h="md" />

                                    <List.Item>For any real number a, we can form the four unbounded intervals below. The first two
                                        are closed,
                                        and the last two are open.</List.Item>
                                    <Space h="md" />
                                    <Text align="center">[a, ∞) and (−∞, a] and (a, ∞) and (−∞, a).</Text>
                                    <Space h="md" />
                                    <List.Item>The notation (−∞, ∞) means the whole real number line .</List.Item>
                                    <List.Item>The notation [a, a] is the one-member set {"a"}, called a degenerate interval.</List.Item>
                                    <List.Item>An interval is called closed if it contains all its endpoints, and open if it doesn’t contain any of its endpoints.</List.Item>
                                </List>
                            </Text>
                        </Paper>

                        <Title order={3}>The Union of Intervals</Title>

                        The graph to the right is the quadratic y = x (x − 3). From the graph, we can see that
                        the inequation
                        x (x − 3) ≥ 0 has solution x ≤ 0 or x ≥ 3 .
                        This set is the union of the two intervals (−∞, 0] and [3, ∞), so when using bracket
                        interval notation, we write the set as
                        (−∞, 0] ∪ [3, ∞) .
                        Here are some further examples using both types of interval notation
                        Some alternative notation for composite functions:
                        If f(x) and g (x) are two functions, the composite g ( f(x)) of two function f(x) and g (x) can also be written
                        as g ○ f(x). Thus
                        <Space h="md" />

                        <Text align="center"><InlineMath math="g \circ f(x) = g(f(x))" /> for all <InlineMath math="x" /> for which <InlineMath math="f(x)" /> and <InlineMath math="g(f(x))" /> are defined.</Text>
                        <Space h="md" />

                        The advantage of this notation is that the composite function g ( f(x)) has a clear symbol g ○ f that displays
                        the composition of functions as a binary operator ○ on the set of functions, with notation analogous to
                        addition a + b, which is a binary operator on the set of numbers.
                        Be careful, however, when calculating g ○ f(2), to apply the function f before the function g, because
                        g ○ f(x) means g ( f(x)).
                        The composite g ○ f(x) is often written with extra brackets as (g ○ f) (x), and readers may prefer to add
                        these extra brackets.
                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>FINDING THE SIGN OF A FUNCTION USING A TABLE OF SIGNS</Title>
                            <Text>
                                A square bracket means that the endpoint is included, and a round bracket means that the endpoint
                                is not included.
                                <List size="md">

                                    <List.Item>The sign of a function tells us where its graph is above and below the x-axis.</List.Item>
                                    <List.Item>A function can only change sign (but might not) at a zero or a discontinuity.</List.Item>
                                    <List.Item>To examine the sign of a function, draw up a table of signs. This is a table of test values that dodge
                                        around any zeroes and discontinuities.</List.Item>
                                    <List.Item>When all the terms of an inequation are moved to the left, solving the inequation is equivalent to
                                        finding the sign of the LHS.</List.Item>
                                </List>
                            </Text>
                        </Paper>
                    </Text>
                </ScrollArea>

            </div>
        )
    }
    const Asymptotes = () => {
        return(
            <div>
                <Title>Vertical and Horizontal Asymptotes</Title>
                <Space h={"xl"}/>
                <ScrollArea style={{ height: "65vh" }} type="always">
                    <Title order={3}>Vertical Asymptotes</Title>
                    <Text>
                        It is usually best to draw up a table of signs first so that the behaviour near any vertical asymptote can be
                        quickly identified.
                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>TESTING FOR VERTICAL ASYMPTOTES</Title>
                            <Text>
                                Always factor the function first as far as possible.
                                <List size="md">

                                    <List.Item>If the denominator has a zero at x = a, and the numerator is not zero at x = a, then the vertical
                                        line x = a is an asymptote.
                                        </List.Item>
                                    <List.Item>The choice between y → ∞ and y → −∞ can be made by looking at a table of signs</List.Item>
                                </List>
                                Once vertical asymptotes have been identified, the behaviour of the curve near them can then be seen
                                from the table of signs and described using the notation <inlineMath math="x → a^{+}"/> and <inlineMath math="x → a^{−}" />
                            </Text>
                        </Paper>
                        <Space h={"xl"}/>
                        Be careful. The function <InlineMath math="y=" /> <InlineMath math=" {x^{2} - 4} \over {x - 2}"/>
                        is <InlineMath math="y = x + 2" />, for <InlineMath math="y = x ≠ 2" />. Its graph is the line <InlineMath math="y={x - 2}" />  with the
                        point (2, 4) removed. There is a discontinuity at x = 2, but no asymptote there — the equation has a zero at
                        x = 2 in the numerator as well as in the denominator.

                        <Space h={"xl"}/>
                        <Title order={3}>Horizontal asymptotes, and the behaviour as x → ∞ and as x → -∞</Title>
                        <Space h={"xl"}/>
                        It was very straightforward in the previous worked example to see that the x-axis is an asymptote to each
                        curve. But it is not so straightforward to find the horizontal asymptotes, if indeed they exist, for curves such as
                         <Space h={"xl"}/>
                        <InlineMath math="y="/> <InlineMath math="{x - 1} \over {x - 4}" /> or <InlineMath math="y="/> <InlineMath math="{x - 1} \over {x^{2} - 4}" />
                         <Space h={"xl"}/>
                        Such curves are called rational functions because they are the ratio of two polynomials. For rational
                        functions, dividing top and bottom by the highest power of x in the denominator makes the situation clear
                        <Space h="xl" />
                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>BEHAVIOUR FOR LARGE X</Title>
                            <Text>
                                Always factor the function first as far as possible.
                                <List size="md" >
                                    <List.Item>Divide top and bottom by the highest power of x in the denominator</List.Item>
                                    <List.Item> Then use the fact that <InlineMath math="1 \over x"/> → 0 as x → ∞ and as x → −∞.</List.Item>
                                </List>
                                Once vertical asymptotes have been identified, the behaviour of the curve near them can then be seen
                                from the table of signs and described using the notation <InlineMath math="x → a^{+}"/> and <inlineMath math="x → a^{−}" />
                            </Text>
                        </Paper>
                    </Text>

                </ScrollArea>
            </div>
        )
    }
    const subFunctions = {
        "SOF": {
            name: "Sign of a function",
            to: SignOfAFunction()
        }
    }

    //const ref = useRef<MathView.MathViewRef>(null);
    return(
        <>
            <Tabs>
                <Tabs.Tab label="The sign of a function">{SignOfAFunction()}</Tabs.Tab>
                <Tabs.Tab label="Vertical and horizontal asymptotes">{Asymptotes()}</Tabs.Tab>
                <Tabs.Tab label="A curve-sketching menu">A curve-sketching menu</Tabs.Tab>
                <Tabs.Tab label="Solving inequations">Solving inequations</Tabs.Tab>
            </Tabs>


        </>)
}
