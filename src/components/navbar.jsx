import { useState , useRef,  useLayoutEffect } from "react";
import "../styles/navbar.css"


function Navbar() {
  const [activeIndex,setActiveIndex] = useState(0);
  const highlightRef = useRef(null);
  const buttonRefs = useRef([]);
  const items = ["Home","features", "contact", "demo"]

  useLayoutEffect(()=>{
    const activeButton = buttonRefs.current[activeIndex];
    const highlight = highlightRef.current;

    if (!activeButton || !highlight) return;

    highlight.style.width = `${activeButton.offsetWidth}px`;
    highlight.style.transform = `translateX(${activeButton.offsetLeft}px)`;
  }, [activeIndex]);

  return (
      <div className="navbar">
        <div className="highlight" ref = {highlightRef}></div>
        {items.map((item,index)=> (
          <button
            key={item}
            ref={(el)=>(buttonRefs.current[index] = el)}
            className={`pill ${activeIndex === index ? "active":""}`}
            onClick={()=>setActiveIndex(index)}
          >
          {item}
          </button>
        ))}
      </div>
  );
}

export default Navbar;
