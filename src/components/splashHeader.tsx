'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";

import { ReactSVG } from "react-svg";
import OnStagePixels from '@/assets/onStageProfile-nobackground'
import Cube from '@/assets/Cube'
import CubeBloom from "./cubeBloom";


const inter = Inter({ subsets: ["latin"] });

const styles = {

    mainWrapper: {
        // width: "100%",
        // height: 500,
       
    }
}

type Props = {
    widthPercentage: number;
}

function ImageAndCube (props:Props) {

    const circumferance = window.innerWidth * props.widthPercentage;
    const radius = circumferance/2
    return (<div style={{ justifyContent: "center", alignItems: "center"}}>
        <OnStagePixels />
        <div style={{ position: "absolute", height: 0, top: 0, left: window.innerWidth * props.widthPercentage*2}}>
            <CubeBloom circleWidth={window.innerWidth * props.widthPercentage} spikeLength={50} originX={radius} originY={window.innerWidth * props.widthPercentage/2} width={50} bloomCount={12} bloomSizeMin={20} bloomSizeRange={5} color={"white"}/>
            <CubeBloom circleWidth={window.innerWidth * props.widthPercentage*0.7} spikeLength={50} originX={radius} originY={window.innerWidth * props.widthPercentage/2} width={50} bloomCount={9} bloomSizeMin={20} bloomSizeRange={5} color={"black"} />
            <CubeBloom circleWidth={window.innerWidth * props.widthPercentage * 0.5} spikeLength={50} originX={radius} originY={window.innerWidth * props.widthPercentage / 2} width={50} bloomCount={7} bloomSizeMin={15} bloomSizeRange={5} color={"black"} />
            <CubeBloom circleWidth={window.innerWidth * props.widthPercentage * 0.3} spikeLength={50} originX={radius} originY={window.innerWidth * props.widthPercentage / 2} width={50} bloomCount={5} bloomSizeMin={10} bloomSizeRange={5} color={"black"} />
            <CubeBloom circleWidth={window.innerWidth * props.widthPercentage * 0.1} spikeLength={50} originX={radius} originY={window.innerWidth * props.widthPercentage / 2} width={50} bloomCount={3} bloomSizeMin={5} bloomSizeRange={5} color={"black"} />
        </div>
    </div>)
}

export default function SplashHeader () {

    console.log(window.innerHeight)
    return (
        <div style={{ backgroundImage: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ImageAndCube widthPercentage={0.2} />
        </div>
    )
}