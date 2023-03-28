import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import CreateArticles from "./components/CreateArticles";
import HomePage from "./components/HomePage";

function App() {

  
  
  // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2912035208235100" crossorigin="anonymous"></script>

  const myStyles = {
    display: 'block',
  };
  
  return (
    <div className="app">
      <Nav/>
      <Route exact path={"/"} render={() => <HomePage/>} />
      <Route path={"/articles"} render={() => <Articles/>} />
      <Route path={"/createarticles"} render={() => <CreateArticles/>} />
      <ins className="adsbygoogle"
     // eslint-disable-next-line react/style-prop-object
     style={myStyles}
     data-ad-client="ca-pub-2912035208235100"
     data-ad-slot="6622030279"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  );
}

export default App;
