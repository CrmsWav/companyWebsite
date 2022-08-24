import React from "react";
import NavBar from "../../components/Navbar";
import PageTitle from "../../components/PagesTitle";

const Team = () => {
  return (
    <div>
      <NavBar />

      <PageTitle name="Team" />

      <p>
        This is the team page. You can find more information about us on our
        <a href="https://www.dropteam.fr"> website</a>.
      </p>
    </div>
  );
}

export default Team;
