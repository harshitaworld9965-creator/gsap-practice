import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-left">

                <p className="eyebrow">
                    A STUDY IN LIGHT
                </p>
                <h1 className="title">
                    AFTER
                    <span>DARK.</span>
                </h1>

                <p className="description">
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