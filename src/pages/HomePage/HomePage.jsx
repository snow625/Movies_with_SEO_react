import { Helmet } from "react-helmet-async";
import TrendingList from "../../modules/TrendingList";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Movies | Home</title>
      </Helmet>
      <TrendingList />
    </>
  );
};

export default HomePage;
