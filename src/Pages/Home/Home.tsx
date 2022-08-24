import React from "react";
import NavBar from "../../components/Navbar";
import PageTitle from "../../components/PagesTitle";

const Home = () => {
  return (
    <div>
      <NavBar />

      <PageTitle name="Home" />

      <p>
        This is the home page. You can find more information about us on our
        <a href="https://www.dropteam.fr"> website</a>.
      </p>
    </div>
  );
}

export default Home;
