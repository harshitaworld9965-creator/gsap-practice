import "./Hero.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function Hero() {
    const eyebrowRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(eyebrowRef.current, {
            y:30,
            opacity:0,
            duration:1,
            ease:"power2.out",
        });

        tl.from(titleRef.current, {
            y:80,
            opacity:0,
            duration:1,
            ease:"power2.out",
            stagger:0.15,
        });

        tl.from(descriptionRef.current, {
            y:30,
            opacity:0,
            duration:1,
            ease:"power2.out",

        });
    })
    return (
        <section className="hero">

            <div className="hero-left">

                <p className="eyebrow" ref={eyebrowRef}>
                    A STUDY IN LIGHT
                </p>
                <h1 className="title" ref={titleRef} >
                   <span> AFTER </span>
                    <span>DARK.</span>
                </h1>

                <p className="description" ref={descriptionRef}>
                    Exploring the space between shadow, light and movement.
                </p>
            </div>

            <div className="hero-right">
                < div className="image-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1519608487953-e999c86e7455"
                        alt="Night landscape" />
                </div>

                <p className="image-caption">
                    40.7128° N / 74.0060° W
                </p>
            </div>
        </section>
    )
}
export default Hero;