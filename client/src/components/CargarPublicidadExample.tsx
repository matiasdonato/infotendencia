import {useEffect} from "react"


export default function CargarPublicidad(){

  useEffect(() => {
    //@ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  
    return(

        <div>
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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ut ad numquam asperiores quos ex sequi tenetur quasi voluptas consequuntur reprehenderit qui quia incidunt, dolores, praesentium quas cumque fugit facere.</p>
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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet itaque eaque architecto labore vero omnis maxime libero error dignissimos, obcaecati dolorum nobis minima quo, facilis necessitatibus saepe expedita nulla ea.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod sunt optio magnam quam natus! Facere dolorum tempora deserunt consequuntur dolore est inventore hic temporibus dolor. Autem nam nihil officia!</p>
          </div>
        </div>
    )
}