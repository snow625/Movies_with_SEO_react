import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <>
      <h2>
        404 Page not found <Link to={"/"}>Go Home?</Link>
      </h2>
    </>
  );
};

export default NotFoundPage;
