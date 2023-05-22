import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import CreateArticles from "./components/CreateArticles";
import HomePage from "./components/HomePage";
import ArticleDetails from "./components/ArticleDetails";

function App() {

  
  
  // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2912035208235100" crossorigin="anonymous"></script>
  
  //@ts-nocheck
  //@ts-ignore




  // ins.className = "adsbygoogle"
  // //@ts-ignore
  // ins.style = "display:block"
  // //@ts-ignore
  // ins.data-ad-client = "ca-pub-2912035208235100" 
  
  


  return (
    <div className="app">
      <Nav/>
      <Route exact path={"/"} render={() => <HomePage/>} />
      <Route path={"/articles"} render={() => <Articles/>} />
      <Route path={"/createarticles"} render={() => <CreateArticles/>} />
      <Route path={"/article/:id"} render={({match}) => <ArticleDetails id={match.params.id}/>} />
    </div>
  );
}

export default App;
