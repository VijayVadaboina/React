import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Container from "./components/Container";
import InnerContainer from "./components/innerContainer";
import FoodDetails from "./components/FoodDetails";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
