import { Helmet } from "react-helmet-async";
import Hero from "../Pages/Home/Hero/Hero";
import TopCategory from "../Pages/Home/TopCategory/TopCategory";
import PopularClass from "../Pages/Home/PopularClass/PopularClass";
import PopularInstructor from "../Pages/Home/PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PPA | Home</title>
      </Helmet>
      <div className="dark:bg-gray-900">
        <Hero></Hero>
        <TopCategory></TopCategory>
        <PopularClass />
        <PopularInstructor />
      </div>
    </>
  );
};

export default Home;
