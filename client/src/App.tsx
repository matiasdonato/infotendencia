import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import CreateArticles from "./components/CreateArticles";

function App() {
  
  return (
    <div>
      <Nav/>
      <Route path={"/"} render={() => <h1 className=" bg-red-300 " >Hello World!</h1>} />
      <Route path={"/articles"} render={() => <Articles/>} />
      <Route path={"/createarticles"} render={() => <CreateArticles/>} />
    </div>
  );
}

export default App;
