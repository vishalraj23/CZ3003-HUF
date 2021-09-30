import "./index.css";
import { Card } from "antd";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  return (
    <div className="container">
      <h1>Home Page</h1>
      <li
        onClick={() => {
          history.push("/gamecreation");
        }}
      >
        GameCreation
      </li>
    </div>
  );
};

export default HomePage;
