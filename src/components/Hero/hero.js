import "./hero.css";
import HeroRight from "../../content/img/hero.png";
import customer_Images from "../../images_function/customer_images";
import bottom from "../../content/img/Bottom.png";
function hero() {
  return (
    <>
      <section className="section-hero">
        <div className="hero container">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#" className="btn btn-full margin-right-sm">
              Start Eating Well
            </a>
            <a href="#" className="btn btn-outline">
              Learn More &darr;
            </a>

            <div className="delivered-meals">
              <div className="delivered-images">
                {Object.values(customer_Images).map((value, index) => {
                  return (
                    <img
                      src={value}
                      alt="Customer_Image"
                      className="customer_image"
                      key={value + " " + index}
                    />
                  );
                })}
              </div>
              <a className="Delivered_Text">
                <span>250,000+</span> meals delivered last year!
              </a>
            </div>
          </div>
          <div className="hero-image-box">
            <img
              className="hero-img"
              src={HeroRight}
              alt="Woman Enjoying Food , Meals in storage container"
            />
          </div>
        </div>
      </section>

      <img className="bottom" src={bottom} />
    </>
  );
}

export default hero;
