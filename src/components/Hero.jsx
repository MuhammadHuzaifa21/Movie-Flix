import { Link } from "react-router-dom"

function Hero({ title, subtitle, buttonText = "Explore", buttonLink = "/movies" }) {
  return (
    <>
      <section>
        <div
          className="text-white text-center text-md-start py-5"
          style={{
            background: "linear-gradient(135deg, #0f0f1a 0%, #1e1b4b 100%)"
          }}
        >
          <div className="container py-5">
            <div className="row py-5">
              <div className="col-12 col-md-8 col-lg-7">
                <h1 className="display-3 fw-bold mb-3">{title}</h1>
                <p className="lead text-white-50 mb-4">{subtitle}</p>
                <Link to={buttonLink} className="btn btn-primary btn-lg mt-3">
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
