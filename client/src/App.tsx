import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import CreateArticles from "./components/CreateArticles";
import HomePage from "./components/HomePage";

function App() {

  
  let head = document.querySelector("head")

  //@ts-ignore
  let script = document.createElement("script")
  script.src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2912035208235100"
  script.async = true
  
  // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2912035208235100" crossorigin="anonymous"></script>
  console.log("script", script)

  head?.appendChild(script)
  
  return (
    <div className="app">
      <Nav/>
      <Route exact path={"/"} render={() => <HomePage/>} />
      <Route path={"/articles"} render={() => <Articles/>} />
      <Route path={"/createarticles"} render={() => <CreateArticles/>} />
    </div>
  );
}

export default App;
