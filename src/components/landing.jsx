import React,{useRef} from "react";
import "../styles/landing.css"
import BlurText from "../importedcomponents/BlurText";
import PixelBlast from '../importedcomponents/PixelBlast';
import Navbar from "./navbar";

function Landing(){
    const Features = useRef(null);
    return(
        <>
        <div className="main">
            <div className="background">
                <PixelBlast
                    variant="square"
                    pixelSize={4}
                    color="rgb(35, 39, 114)"
                    patternScale={2}
                    patternDensity={1}
                    pixelSizeJitter={0}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.5}
                    edgeFade={0.25}
                    transparent
                />
            </div>               

            <div className="heading">
                <h1><BlurText
                    text="Welcome to MergeSpace"
                    delay={200}
                    animateBy="words"
                    direction="top"
                /> </h1>
                <h3><BlurText
                    text="Real time collaborative coding"
                    delay={400}
                    animateBy="words"
                    direction="top"
                /></h3>
            <div>

            </div>
            </div>
            </div>
            <div className="nav">
                <Navbar/>
            </div>
        </>
    )
}

export default Landing