import React from "react";
import "../styles/features.css"
import GlareHover from '../importedcomponents/GlareHover'
import LogoLoop from '../importedcomponents/LogoLoop';

import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiGo,
  SiRust,
  SiPhp,
  SiSwift,
} from 'react-icons/si';

import { FaJava } from "react-icons/fa";

const techLogos = [
  { node: <SiJavascript color="white"/>, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiPython color="white"/>, title: "Python", href: "https://www.python.org" },
  { node: <SiCplusplus color="white"/>, title: "C++", href: "https://isocpp.org" },
  { node: <FaJava color="white"/>, title: "Java", href: "https://www.java.com" },
  { node: <SiGo color="white"/>, title: "Go", href: "https://go.dev" },
  { node: <SiRust color="white"/>, title: "Rust", href: "https://www.rust-lang.org" },
  { node: <SiPhp color="white"/>, title: "PHP", href: "https://www.php.net" },
  { node: <SiSwift color="white"/>, title: "Swift", href: "https://www.swift.org" },
];

function Features(){
    return(
        <div className="features-main">
            <div className="lefttwo">
                <div className="logocard">
                <GlareHover 
                    style={{ height:'100%', position:'relative' , width:'100%'}}
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#cccccc', margin: 0 }}>
                    we support over 60+ languages
                    </h2>
                </GlareHover>
                </div>
                    <div className="logoloop">
                        <LogoLoop
                            logos={techLogos}
                            speed={100}
                            direction="left"
                            logoHeight={60}
                            gap={40}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#000000"
                            ariaLabel="Popular programming languages"
                        />
                    </div>
                    <div className="videoplayback">
                        <div className="videocard">
                            <h2>intervalve allows you to edit your own test cases </h2>
                        </div>
                        <div className="videocard-2">
                              
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Features;