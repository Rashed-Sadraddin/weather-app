import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <div>
      <nav>
        <b>
          <div className="city">
            <Link to="/iraq">
              {" "}
              <h1>Iraq</h1>{" "}
            </Link>
          </div>
          <div className="city">
            <Link to="/america">
              <h1>america</h1>{" "}
            </Link>
          </div>
          <div className="city">
            <Link to="/london">
              {" "}
              <h1>london</h1>
            </Link>{" "}
          </div>
          <div className="city">
            <Link to="/dubai">
              {" "}
              <h1>dubai</h1>
            </Link>{" "}
          </div>
        </b>{" "}
      </nav>{" "}
    </div>
  );
};
export default Home;
