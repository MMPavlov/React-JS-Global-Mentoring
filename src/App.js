import "./App.css";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Header3 from "./Components/Header3";
// import Header4 from "./Components/Header4";
import Counter from "./Components/Counter";
import SearchInput from "./Components/SearchInput";
import GenreToggle from "./Components/GenreToggle";

function App() {
  return (
    <div className="App">
      <Header1 />
      <Header2 />
      <Header3 />
      {/* <Header4 /> */}
      <Counter />
      <SearchInput />
      <GenreToggle />
    </div>
  );
}

export default App;
