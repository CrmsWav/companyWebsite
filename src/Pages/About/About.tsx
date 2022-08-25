import React from 'react';
import PageTitle from "../../components/PagesTitle";
import Carousel from "../../components/Carousel/Carousel";

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <PageTitle name="About" />

      <Carousel />
    </div>
  )
}

export default About;
