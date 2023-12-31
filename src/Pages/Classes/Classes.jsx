import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Banner from "../../Shared/Banner/Banner";
import ClassCard from "./ClassCard";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const { loading } = useAuth();
  const { data: classes, isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axios.get(
        "https://polyglot-pioneers-academy-server.vercel.app/classes/home"
      );
      return res.data;
    },
    enabled: !loading,
  });
  // const displayClasses = classes.filter(
  //   (singleClass) => singleClass.status === "approve"
  // );
  // console.log(displayClasses);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="dark:bg-slate-900">
      <Helmet>
        <title>PPA | Classes</title>
      </Helmet>
      <div>
        <Banner
          title="Explore Our Diverse Range of Classes"
          description="Discover new skills and expand your knowledge with our wide selection of classes."></Banner>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid lg:grid-cols-3 gap-8">
        {classes
          .filter((singleClass) => singleClass.status === "approve")
          .map((item) => {
            return <ClassCard key={item._id} item={item}></ClassCard>;
          })}
      </div>
    </div>
  );
};

export default Classes;
