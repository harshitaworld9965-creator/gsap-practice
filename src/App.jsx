import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";

function App() {
  const container = useRef();

 useGSAP(() => {
  const tl = gsap.timeline();

  tl.to(".box", {
    x: 200,
    duration: 1,
  });

  tl.to(".box", {
    y: 100,
    duration: 1,
  }, "-=0.5");

  tl.to(".box", {
    rotation: 180,
    duration: 1,
  }, "-=0.5");
}, { scope: container });

  return (
    <main className="app" ref={container}>
      <div className="boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </main>
  );
}

export default App;