import React from 'react'
import Banner from "../Components/Banner";
import ClinicInnovation from "../Components/ClinicInnovation";
import OurServices from "../Components/OurServices";
import Spec from "../Components/Spec";
import Review from "../Components/Review";
import Subscribe from "../Components/Subscribe";

const Home = () => {
  return (
    <section>
      <Banner />
      <OurServices />
      <ClinicInnovation />
      <Spec />
      <Review />
      <Subscribe />
    </section>
  )
}

export default Home