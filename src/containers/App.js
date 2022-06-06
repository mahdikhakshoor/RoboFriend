import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Spinner from "react-spinner-material";
import Scroll from "../components/Scroll";
const spinner = {
  borderColor: "#566ea39b",
  textAlign: "center",
  borderWidth: "5px",
  width: "100px",
  height: "100px",
  margin: " 50vh auto 0",
  transform: "translateY(-50%)",
};
function App() {
  const [robots, setRobot] = useState([]);
  const [searchField, setsearchField] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobot(users);
      });
  }, []);
  const onsearchChange = (event) => {
    setsearchField(event.target.value);
  };
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  if (!robots.length)
    return (
      <div className="tc">
        <h1>Loading...</h1>
        <Spinner style={spinner} />
      </div>
    );
  return (
    <div className="tc">
      <h1>Robo Friends</h1>
      <SearchBox searchChange={onsearchChange} />
      <hr />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}
export default App;
