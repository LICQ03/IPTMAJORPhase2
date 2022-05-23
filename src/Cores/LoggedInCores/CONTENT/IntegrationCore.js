import functionPlot from "function-plot";
import Plot from "react-function-plot";
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
    Image,
    Space,
    createStyles,
    useMantineTheme,
    Center
} from "@mantine/core";
import {useState, useEffect} from "react";
import newDefiniteIntegral from "./img/definiteIntegralGraph.png"
import {InlineMath, BlockMath} from "react-katex";
import {Circle1, Circle2, Line} from "tabler-icons-react";
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
export const IntegrationCore = () => {


    const { classes } = useStyles();
    //Chapters  
    const Areas = () => {
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
                <Title>Areas and the definite integral</Title>
                <ScrollArea style={{ height: "60vh" }} type="always">
                    <Space h={"xl"}/>
                    <Text>
                        All area formulae and calculations of area are based on two principles:
                        <List>
                            <List.Item icon={ <Circle1/> }>Area of a rectangle = length × breadth.</List.Item>
                            <List.Item icon={ <Circle2/> }>When a region is dissected, the area is unchanged.</List.Item>
                        </List>
                        A region bounded by straight lines, such as a triangle or a trapezium, can be cut up and rearranged into
                        rectangles with a few well-chosen cuts. Dissecting a curved region into rectangles, however, requires an
                        infinite number of rectangles, and so must be a limiting process, just as differentiation is.
                        <Space h="md"/>
                        <Title order={3}>A new symbol — the definite integral</Title>
                        <Space h="md"/>
                        Some new notation is needed to reflect this process of infinite dissection as it applies to functions and their graphs. <Space h="xs"/>
                        The diagram on the left below shows the region contained between a given curve y = f(x) and the x-axis, from
                        x = a to x = b, where a ≤ b. The curve must be continuous and, for the moment, never go below the x-axis.
                        <Space h="xs"/>
                        <Image src={newDefiniteIntegral} shadow="xl" radius="lg"  width="50vw" />
                        <Space h="xs"/>
                        In the middle diagram, the region has been dissected into a number of thin strips. Each strip is approximately
                        a rectangle, but only roughly so, because the upper boundary is curved. The area of the region is the sum of
                        the areas of all the strips.<Space h="xs"/>
                        The third diagram shows just one of the strips, above the value x on the x-axis. Its height at the left-hand end
                        is f(x), and provided the strip is very thin, the height is still about f(x) at the right-hand end. Let the width of
                        the strip be δx, where δx is, as usual in calculus, thought of as being very small. Then, roughly,
                        <Space h="sm"/>
                        {/*area of strip ≑ height × width*/}
                        <InlineMath math="area of strip \div height × width"/>
                        <Space h="sm"/>
                        <InlineMath math="\div f(x) δ x"/>
                        <Space h="sm"/>
                        Adding up all the strips, using sigma notation for the sum,
                        <Space h="sm"/>
                        area of shaded region ≑ <InlineMath math="\displaystyle\sum_{x=a}^{b}"/>
                        (area of each strip)
                        <Space h="sm"/>
                        <Title order={3}>The definite integral</Title>
                        <Space h="sm"/>
                        This new object <InlineMath math="\int_{a}^{b} f(x)\,dx"/> is called a definite integral. The rest of the chapter is concerned with evaluating
                        definite integrals and applying them.


                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>THE DEFINITE INTEGRAL</Title>
                            <Text>
                                Let f(x) be a function that is continuous in a closed interval [a, b], where a ≤ b.
                                For the moment, suppose that f (x) is never negative in the interval.
                                <List size="md">

                                    <List.Item>For {"a < b"}, The definite integral <InlineMath math="\int_{a}^{b} f(x)\,dx"/> is defined to be the area of the region between the curve and the
                                        x-axis, from x = a to x = b</List.Item>
                                    <List.Item>The function f(x) is called the integrand, and the values x = a and x = b are called the lower
                                        and upper limits (or bounds) of the integral.</List.Item>
                                </List>

                            </Text>
                        </Paper>
                        The name ‘integration’ suggests putting many parts together to make a whole. The notation arises from
                        building up the region from an infinitely large number of infinitesimally thin strips. Integration is ‘making a
                        whole’ from these thin slices.
                        <Space h="sm"/>
                        <Title order={3}>Evaluating definite integrals using area formulae</Title>
                        <Space h="sm"/>
                        When the function is linear or circular, the definite integral can be calculated from the graph using
                        well-known area formulae, although a quicker method will be developed later for linear functions.
                        Here are the relevant area formulae:

                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>AREA FORMULAE FOR TRIANGLE, TRAPEZIUM AND CIRCLE</Title>
                            <Text>
                                A square bracket means that the endpoint is included, and a round bracket means that the endpoint
                                is not included.
                                <List size="md">
                                    <List.Item icon={<strong>Triangle: </strong>}><InlineMath math="Area = {1 \over 2} bh \xRightarrow{or} {1 \over 2} × base × height" /> </List.Item>
                                    <List.Item icon={<strong>Trapezium: </strong>}><InlineMath math="Area = {1 \over 2}(a+b)h \xRightarrow{or} average of parallel sides × width" /> </List.Item>
                                    <List.Item icon={<strong>Circle: </strong>}><InlineMath math="Area = \pi {r^{2}} \xRightarrow{or} \pi {× square of the radius}" /> </List.Item>

                                </List>
                            </Text>
                        </Paper>
                    </Text>
                </ScrollArea>

            </div>
        )
    }
    const Fundamental = () => {
        return(
            <div>
                <Title>The Fundamental Theorem of Calculus</Title>
                <Space h={"xl"}/>
                <ScrollArea style={{ height: "60vh" }} type="always">
                    <Text>
                        There is a remarkably simple formula for evaluating definite integrals, based on taking the primitive of the
                        function. The formula is called the fundamental theorem of calculus because the whole of calculus depends
                        on it.
                        <Title order={3}>Primatives</Title>

                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>PRIMITIVES</Title>
                            <Text>
                                <List size="md">

                                    <List.Item>A function F(x) is called a primitive or anti-derivative of a function f (x) if its derivative is f (x):
                                        F(x) is a primitive of f (x) if F′(x) = f (x).
                                    </List.Item>
                                    <List.Item>To find the general primitive of a power <InlineMath math="x^{n}" />, where n ≠ −1:</List.Item>
                                    <Space w="xl"/> If <InlineMath math="{dy \over dx}=x^n"/> then <InlineMath math="y = { {x^{n+1}} \over {n+1}  } + " /> c for any constant c
                                </List>
                                ‘Increase the index by 1 and divide by the new index.’
                            </Text>
                        </Paper>
                        <Title order={3}>Statement of the fundamental theorem</Title>
                        The fundamental theorem says that a definite integral can be evaluated by writing down any primitive F(x)
                        of f (x), then substituting the upper and lower limits into it and subtracting.

                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>THE FUNDAMENTAL THEOREM OF CALCULUS</Title>
                            <Text>
                                Let f (x) be a function that is continuous in a closed interval [a, b]. Then
                                <BlockMath math="\int_{a}^{b} f(x)\,dx = F(b) - F(a)" /> <Center>Where F(x) is any primative of f(x)</Center>
                            </Text>
                        </Paper>
                        <Space h={"xl"}/>
                        This result is extraordinary because it says that taking areas and taking tangents are inverse processes, which
                        is not obvious.

                        <Space h={"xl"}/>
                        <Title order={3}>Using the fundamental theorem to evaluate an integral</Title>
                        <Space h={"sm"}/>

                        The conventional way to set out these calculations is to enclose the primitive in square brackets, writing the
                        lower and upper limits as subscript and superscript respectively

                        <Space h={"xl"}/>
                        <Title order={3}>Expanding brackets in the integrand</Title>
                        <Space h={"sm"}/>

                        As with differentiation, it is often necessary to expand the brackets in the integrand before finding a
                        primitive. With integration, there is no ‘product rule’ that could avoid the expansion.

                        <Space h={"xl"}/>
                        <Title order={3}>Writing the integrand as separate fractions</Title>
                        <Space h={"sm"}/>

                        If the integrand is a fraction with two or more terms in the numerator, it should normally be written as
                        separate fractions, as with differentiation. With integration, there is no ‘quotient rule’ that could avoid this.

                        <Space h={"xl"}/>
                        <Title order={3}>Negative indices</Title>
                        <Space h={"sm"}/>

                        The fundamental theorem also works when the indices are negative. Care is needed when converting between
                        negative powers of x and fractions.
                    </Text>
                </ScrollArea>
            </div>
        )
    }
    const Definite = () => {
        return(
            <div>
                <Title>The Definite Integral and its Properties</Title>
                <Space h={"xl"}/>
                <ScrollArea style={{ height: "60vh" }} type="always">
                    <Text>
                        This section will first extend the theory to functions with negative values. Then some simple properties of the
                        definite integral will be established using arguments about the dissection of regions.
                        <Space h="xl"/>
                        <Title order={3}>Integrating functions with negative values</Title>
                        When a function has negative values, its graph is below the x-axis, so the ‘heights’ of the little rectangles in
                        the dissection are negative numbers. This means that any areas below the x-axis should contribute negative
                        values to the value of the final integral
                        <Space h="md"/>
                        For example, in the diagram above, where a {'< h < k < b'}, the region B is below the x-axis because the
                        function f(x) is negative in [h, k]. So the heights of all the infinitesimal strips making up B are negative, and
                        B therefore contributes a negative number to the definite integral,
                        <BlockMath math="\int_{a}^{b} f(x)\,dx = area(A) - area(B) + area(C)" />
                        Thus we attach the sign + or − to each area, depending on whether the curve, and therefore the region, is
                        above or below the x-axis. For this reason, the three terms in the sum above are often referred to as signed
                        areas under the curve, because a sign has been attached to the area of each region.

                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>THE DEFINITE INTEGRAL AS THE SUM OF SIGNED AREAS</Title>
                            <Text>
                                Let f (x) be a function continuous in the closed interval[a, b], where a ≤ b,
                                and suppose that we are taking the definite integral over[a, b].
                                <List size="md">
                                    <List.Item> For regions where the curve is above the x-axis, we attach + to the area.
                                        For regions where the curve is below the x-axis, we attach − to the area.
                                        These areas, with signs attached, are called signed areas under the curve.
                                    </List.Item>
                                    <List.Item>The definite integral <InlineMath math="\int_{a}^{b} f(x)\,dx"/> is the sum of these signed areas under the curve in the
                                        interval [a, b].</List.Item>
                                </List>
                            </Text>
                        </Paper>
                        <Space h={"xl"}/>
                        The whole definite integral <InlineMath math="\int_{a}^{b} f(x)\,dx"/>is often also referred to as the signed area under the curve.
                        Finding the domain and finding the zeroes may both require factoring, which is the reason why the
                        preparatory Step 0 is useful. Factoring, however, may not always be possible, even with the formula for the
                        roots of a quadratic, and in such cases approximation methods may be useful.
                        <Space h="xl"/>
                        <Title order={3}>Odd and even functions</Title>
                        <Space h="xl"/>

                        In the first example below, the function {mathIt("y = x^{3} - 4x")} is an odd function, with point symmetry in the origin.
                        Thus the area of each shaded hump is the same. Hence the whole integral from {mathIt("x = ")} {mathIt("-2")} to {mathIt("x = 2")} is zero,
                        because the equal humps above and below the x-axis cancel out.
                        In the second diagram, the function {mathIt("y = x^{2} + 1")} is even, with line symmetry in the y-axis. Thus the areas to
                        the left and right of the y-axis are equal, so there is a doubling instead of a cancelling.
                        <Space h="xl"/>

                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>INTEGRATING ODD AND EVEN FUNCTIONS</Title>
                            <Text>
                                <List size="md">
                                    <List.Item>
                                        If {mathIt("f(x)")} is odd, then <InlineMath math="\int_{-a}^{a} f(x)\,dx=0"/>
                                    </List.Item>
                                    <List.Item>If {mathIt("f(x))")} is even then <InlineMath math="\int_{-a}^{a} f(x)\,dx=2 \int_{0}^{a} f(x)\,dx"/></List.Item>
                                </List>
                            </Text>
                        </Paper>
                        <Space h="xl"/>

                        <Title order={3}>Dissection of the interval</Title>
                        <Space h="sm"/>

                        When a region is dissected, its area remains the same. In particular, we can always
                        dissect the region by dissecting the interval a ≤ x ≤ b over which we are integrating.
                        Thus if f (x) is being integrated over the closed interval[a, b] and the number
                        c lies in this interval, then:
                        <Space h="xl"/>

                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>DISSECTION OF THE INTERVAL</Title>
                                <BlockMath math="\int_{a}^{b} f(x)\,dx=\int_{a}^{c} f(x)\,dx+\int_{c}^{b} f(x)\,dx"/>
                        </Paper>
                        <Space h="xl"/>
                        <Title order={3}>Intervals of zero width</Title>
                        Suppose that a function is integrated over an interval a ≤ x ≤ a of width zero,
                        and that the function is defined at x = a. In this situation, the region also
                        has width zero, so the integral is zero.
                        <Space h="xl"/>

                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>DISSECTION OF THE INTERVAL</Title>
                            <BlockMath math="\int_{a}^{a} f(x)\,dx=0"/>
                        </Paper>
                        <Title order={3}>Running an integral backwards from right to left</Title>
                        A further small qualification must be made to the definition of the definite integral. Suppose that the limits
                        of the integral are reversed, so that the integral ‘runs backwards’ from right to left over the interval. Then its
                        value reverses in sign:
                        <Space h="xl"/>
                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>REVERSING THE INTERVAL</Title>
                            Let f (x) be continuous in the closed interval[a, b], where a ≤ b. Then we define
                            <BlockMath math="\int_{b}^{a} f(x)\,dx=-\int_{a}^{b} f(x)\,dx"/>
                        </Paper>
                        <Space h="xl"/>

                        <Title order={3}>Sums of functions</Title>
                        When two functions are added, the two regions are piled on top of each other, so that:
                        <Space h="xl"/>
                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>INTEGRAL OF A SUM</Title>
                            <BlockMath math="\int_{a}^{b} (f(x)+g(x))\,dx=\int_{a}^{b} f(x)\,dx+\int_{a}^{b} g(x)\,dx"/>
                        </Paper>
                        <Space h="xl"/>
                        <Title order={3}>Multiples of functions</Title>
                        Similarly, when a function is multiplied by a constant, the region is stretched vertically by that constant, so that
                        <Space h="xl"/>
                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>INTEGRAL OF A MULTIPLE</Title>
                            <BlockMath math="\int_{a}^{b} kf(x)\,dx=k\int_{a}^{b} f(x)\,dx"/>
                        </Paper>
                        <Space h="xl"/>
                        <Title order={3}>Inequalities with definite integrals</Title>
                        Suppose that a curve y = f (x) is always underneath another curve y = g (x) in an interval a ≤ x ≤ b. Then
                        the area under the curve y = f (x) from x = a to x = b is less than the area under the curve y = g (x).
                        In the language of definite integrals:
                        <Space h="xl"/>
                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>INEQUALITY</Title>
                            If f (x) ≤ g (x) in the closed interval [a, b], then
                            <BlockMath math="\int_{a}^{b} f(x)\,dx \leq \int_{a}^{b} g(x)\,dx"/>
                        </Paper>
                    </Text>
                </ScrollArea>
            </div>
        )
    }
    const Proving = () => {
        return(
            <div>
                <Title>Proving the fundamental theorem</Title>
                <Space h={"xl"}/>
                <ScrollArea style={{ height: "60vh" }} type="always">
                    <Text>
                        <Space h={"xl"}/>
                        <Title order={3}>The definite integral as a function of its upper limit</Title>
                        The value of a definite integral {mathIt("\\int_{a}^{b} f(x)\\,dx")} changes when the value of b changes.
                        This means that it is a function of its upper limit b. When we want to emphasise
                        the functional relationship with the upper limit, we usually replace the letter b
                        by the letter x, which is conventionally the variable of a function.
                        In turn, the original letter x needs to be replaced by some other letter, usually t.
                        Then the definite integral is clearly represented as a function of its upper limit x,
                        as in the first diagram above. This function is called the signed area function
                        for f (x) starting at x = a, and is defined by
                        <BlockMath math="A(x) = \int_{a}^{x} f(t)\,dt"/>
                        The function A(x) is always zero at x = a. For the function sketched above, A(x)
                        increases at an increasing rate — see the second sketch. A(x) is also defined to the left
                        of a, where it is negative because the integrals run backwards.
                        <Space h={"xl"}/>
                        <Title order={3}>The signed area function</Title>
                        The function in the sketch above was never negative. But the definite integral is the signed area under the
                        curve, meaning that a negative sign is attached to areas of regions below the x-axis (provided that the integral
                        is not running backwards). <Space h={"xs"}/>
                        The upper graph of f(t) to the right is a parabola with axis of symmetry x = b.
                        The four areas marked B are all equal. Here are some properties of the signed area
                        function
                        <BlockMath math="A(x) = \int_{a}^{x} f(t)\,dt"/>
                        <List size="md" >
                            <List.Item>A(a) = 0, as always</List.Item>
                            <List.Item>In the interval [a, b], f(t) is negative and decreasing, so A(x) decreases at an increasing rate</List.Item>
                            <List.Item>In the interval [b, c], f(t) is negative and increasing, so A(x) decreases at a decreasing rate</List.Item>
                            <List.Item>In the interval [c, ∞), f(t) is positive and increasing, so A(x) increases at an increasing rate.</List.Item>
                            <List.Item>A(b) = −B and A(c) = −2B and A(d) = −B</List.Item>
                            <List.Item>A(x) is also defined in the interval (−∞, a] to the left of a, where it is negative because the integrals run backwards and the curve is above the x-axis.</List.Item>

                        </List>
                        <Paper shadow="md" p="md" m={3} radius="md" className={classes.defineNewEquation}>
                            <Title order={5}>THE SIGNED AREA FUNCTION</Title>
                            <Text>
                                Suppose that f (x) is a function defined in some interval I containing a. The signed area function for
                                f(x) starting at a is the function defined by the definite integral
                                <BlockMath math="A(x) = \int_{a}^{x} f(t)\,dt \text {, for all x in the interval, } I"/>

                            </Text>
                        </Paper>
                        <Space h="xl"/>
                        <Title order={3}>The fundamental theorem — differential form</Title>
                        We can now state and prove the differential form of the fundamental theorem of calculus, from which we will
                        derive the integral form used already in Sections 2B and 2C.
                        <Space h="md"/>
                        <List size="md" >
                            <List.Item icon={<strong>Theorem:</strong>}>If f(x) is continuous, then the signed area function for f (x) is a primitive of f(x). That is,</List.Item>
                                <BlockMath math="A'(x) = {d \over dx} \int_{a}^{x} f(t)\,dt=f(x)"/>
                            <List.Item icon={<strong>Proof:</strong>}> Because the theorem is so fundamental, its proof must begin with the definition of the derivative as a limit,</List.Item>
                            <BlockMath math="A'(x) = \lim_{h \to 0}{A(x+h)-A(x) \over h}"/>

                        </List>
                        <Title order={3}>The fundamental theorem — differential form</Title>
                        We can now state and prove the differential form of the fundamental theorem of calculus, from which we will
                        derive the integral form used already in Sections 2B and 2C.
                        <Space h="md"/>
                        <List size="md" >
                            <List.Item icon={<strong>Theorem:</strong>}>: Suppose that f(x) is continuous in the closed interval [a, b], and that F(x) is a primitive of f (x). Then, </List.Item>
                                <BlockMath math="\int_{a}^{b} f(t)\,dt=F(b)-F(a)"/>
                            <List.Item icon={<strong>Proof:</strong>}>We now know that F(x) and {mathIt("\\int_{a}^{x} f(t)\\,dt")} f(t) dt are both primitives of f(x)</List.Item>
                            Because any two primitives differ only by a constant,
                            <BlockMath math="\int_{a}^{x} f(t)\,dt=F(x)+C, \text { For some constant C}"/>

                        </List>

                    </Text>
                </ScrollArea>
            </div>
        )
    }


    //const ref = useRef<MathView.MathViewRef>(null);
    return(
        <>
            <Tabs>
                <Tabs.Tab label="Areas and the definite integral">{Areas()}</Tabs.Tab>
                <Tabs.Tab label="The fundamental theorem of calculus">{Fundamental()}</Tabs.Tab>
                <Tabs.Tab label="The definite integral and its properties">{Definite()}</Tabs.Tab>
                <Tabs.Tab label="Proving the fundamental theorem">{Proving()}</Tabs.Tab>
            </Tabs>


        </>)
}
