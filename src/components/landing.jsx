import React,{useRef} from "react";
import "../styles/landing.css"
import BlurText from "../importedcomponents/BlurText";
import Aurora from "../importedcomponents/Aurora"
import Navbar from "./navbar";

function Landing(){
    const Features = useRef(null);
    return(
        <>
        <div className="main">
            <div className="background">
                <Aurora
                    colorStops={['18337e', '#00e8fc', '#7a297a']}
                    blend={0.5}
                    amplitude={1.0}
                    speed={1}
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