import {Accordion, Image, Tabs} from "@mantine/core";
import ReactPlayer from "react-player";
import {ChartArea, MathFunction} from "tabler-icons-react";
const ResourceKeys = {
    GRAPHS: {
        VideoUrl: "https://www.youtube.com/watch?v=O3vRXeE-iBI",
        PodUrl: "https://anchor.fm/breakingmathpodcast/episodes/61-Look-at-this-Graph--Graph-Theory-evl7cv/a-aiert9"
    },
    INTEGRATION: {
        VideoUrl: "https://www.youtube.com/watch?v=o75AqTInKDU",
        PodUrl: "https://anchor.fm/breakingmathpodcast/episodes/12-Math-Factory-Algorithms-e2hqtd/a-aiert9"
    }
}


export const VideosCore = () => {


    return(
        <div>
            <Tabs>
                <Tabs.Tab icon={<MathFunction />} label="Graphs and Equations">
                    <Accordion>
                        <Accordion.Item label="Videos">
                            <ReactPlayer url={ResourceKeys.GRAPHS.VideoUrl}/>
                        </Accordion.Item>
                        <Accordion.Item label="Podcast">
                            <iframe
                                src={ResourceKeys.GRAPHS.PodUrl}
                                height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
                        </Accordion.Item>
                    </Accordion>
                </Tabs.Tab>
                <Tabs.Tab icon={<ChartArea />} label="Integration">
                    <Accordion>
                        <Accordion.Item label="Videos">
                            <ReactPlayer url={ResourceKeys.INTEGRATION.VideoUrl}/>
                        </Accordion.Item>
                        <Accordion.Item label="Podcast">
                            <ReactPlayer
                                url={ResourceKeys.INTEGRATION.PodUrl}
                                >
                            </ReactPlayer>
                        </Accordion.Item>
                    </Accordion>
                </Tabs.Tab>
            </Tabs>
        </div>
    )
}