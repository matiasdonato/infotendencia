import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import CreateArticles from "./components/CreateArticles";
import HomePage from "./components/HomePage";
import {useEffect} from "react"

function App() {

  
  useEffect(() => {
    //@ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
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
          <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2912035208235100" 
          crossOrigin="anonymous"></script>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2912035208235100"
            data-ad-slot="4220062361"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <div>
            <h1>Hi World</h1>
          </div>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2912035208235100"
            data-ad-slot="6622030280"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <div>
            <h2>Hola Mundo</h2>
          </div>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2912035208235100"
            data-ad-slot="6347532257"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <div>
            <h3>Hello World</h3>
          </div>

    </div>
  );
}

export default App;
