import React from "react";

const Home = () => {
  return (
    <>
      <div id="home-container" className="container">
        <div className="row">
        <img
          id="logo-image"
          src="PngItem_834494.png"
          class="rounded"
          alt="studio ghibli logo"
          />
          </div>
      </div>
      <div className="container home-card text-center">
        <div class=" text-center card-body">
          <h2>Studio Ghibli Routing Lab</h2>
          <h5 className="mt-5">
            This is a lab to demonstrate my React capabilities. It utilizes
            conditional rendering, fetching data from REST API using useEffect
            hooks, managing multiple array maps utilizing useState hooks, and
            Bootstrap for styling.
          </h5>
          <h5>
            Click either button above to view the resources for Studio Ghibli
            and ENJOY!
          </h5>
        </div>
      </div>
      <div className="email">
        <h5>Email : HayleeHunter85@gmail.com</h5>
      </div>
    </>
  );
};

export default Home;
