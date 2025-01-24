import Child from "./Components/Children/Child";
import Parent from "./Components/Children/Parent";
import SecondChild from "./Components/Children/SecondChild";
import Navbar from "./Components/Navbar/Navbar";
import PostList from "./Components/PostList";
import TsWithUseState from "./Components/Ts-with-useState";

function App() {
  return (
    <div className="mt-4 h-screen max-w-full">
      <Navbar />
      {/* <PostList /> */}

      {/* <Parent>
        <Child />
      </Parent> */}
      {/* <Parent /> */}
      {/* <TsWithUseState /> */}
      <SecondChild />
    </div>
  );
}

export default App;
