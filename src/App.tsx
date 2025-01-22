import Child from "./Components/Children/Child";
import Parent from "./Components/Children/Parent";
import Navbar from "./Components/Navbar/Navbar";
import PostList from "./Components/PostList";

function App() {
  return (
    <div className="mt-4 h-screen max-w-full">
      <Navbar />
      {/* <PostList /> */}
      {/* <Parent>
        <Child />
      </Parent> */}
      <Parent />
    </div>
  );
}

export default App;
