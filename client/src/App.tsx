import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import CreateArticles from "./components/CreateArticles";
import HomePage from "./components/HomePage";
import { Helmet } from "react-helmet";

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
      <div>
        <Helmet>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2912035208235100" crossOrigin="anonymous"></script>
          <script>
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </script>
        </Helmet>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2912035208235100"
          data-ad-slot="6622030279"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}

export default App;
