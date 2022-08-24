import React from "react";
import PagesTitle from "../../components/PagesTitle";

const Dashboard = () => {
  return (
    <div>
      <PagesTitle name="Dashboard"/>
      <p>
        This is the dashboard page. You can find more information about us on our
        <a href="https://www.dropteam.fr"> website</a>.
      </p>
    </div>
  );
}

export default Dashboard;
