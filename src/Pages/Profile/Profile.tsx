import React from "react";
import PagesTitle from "../../components/PagesTitle";

const Profile = () => {
  return (
    <div>
      <PagesTitle name="Profile"/>
      <p>
        This is the profile page. You can find more information about us on our
        <a href="https://www.dropteam.fr"> website</a>.
      </p>
    </div>
  );
}

export default Profile;
