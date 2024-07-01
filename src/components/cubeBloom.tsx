

import { Inter } from "next/font/google";

import OnStagePixels from '@/assets/onStageProfile-nobackground'
import Cube from '@/assets/Cube'

const inter = Inter({ subsets: ["latin"] });



type Props = {
    circleWidth: number;
    spikeLength: number;
    width: number;
    originX: number;
    originY: number;
    bloomCount: number;
    bloomSizeRange: number;
    bloomSizeMin: number;
    color: string;
};



function getPointOnCircle (originX: number, originY: number, radius: number, at: number) {

    const percentageAroundCircle: number = 360*at;
    
    console.log({ percentageAroundCircle })
    const x = originX+ radius * Math.cos(percentageAroundCircle);
    const y = originY + radius * Math.sin(percentageAroundCircle);

    return {x, y}
}

export default function CubeBloom (props: Props) {

    const radius = props.circleWidth/2;
    
    return (
        <div style={{
            width: "100%",
            position: "absolute",
            height: 0,
        }}>
            {[...Array(props.bloomCount)].map((x, i) => {
                
                const coordinates = getPointOnCircle(props.originX, props.originY, radius, i / props.bloomCount)
                
                const size = Math.floor(Math.random() * props.bloomSizeRange)
                
                return <Cube key={i} top={coordinates.y} left={coordinates.x} size={props.bloomSizeMin + size} color={props.color}/>
            }
            )}
        </div>
    )
}