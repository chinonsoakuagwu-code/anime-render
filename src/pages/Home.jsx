import { Link, NavLink } from "react-router-dom"

function Home() {
  return (
    <>
        <div className="container">
          <div className="banner-container">
            <div className="banner">
              <h2>Anime Wiki</h2>
              <Link to="/anime">
                <div className="btn">View your favourite anime</div>
              </Link>
            </div>
          </div>
        </div>

    </>
  )
}

export default Home