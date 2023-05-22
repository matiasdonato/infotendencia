import axios from "axios"
import {useEffect, useState} from "react"


interface Props{
    id: string
}
interface Article{
    title: string
    description: string
    image: string
    data: []
    date: string
}
export default function ArticleDetails({id}: Props){

    const [article, setArticle] = useState<Article>()

    useEffect(() => {
        async function getArticle() {
            await axios.get(`http://localhost:3001/article/${id}`)
                .then(res => { setArticle(res.data[0]) })
                .catch(err => {console.log(err)})
        }
        getArticle()
        //adding metadata
    }, [id])

    
    if (article !== undefined) {
        let head = document.querySelector("head")
        let oldTilte = document.querySelector("title")
        let meta = document.getElementById("description")
        //@ts-ignore
        head?.removeChild(oldTilte)
        //@ts-ignore
        let headTitle = document.createElement("title") 
        //@ts-ignore
        headTitle.innerHTML = article.title
        head?.appendChild(headTitle)
        //@ts-ignore
        meta.content = article.description
    }

    
    function loadDataFunction(data: any) {
        if(data.dataType === "subtitle"){
            return( <h2 className=" mt-9 text-[1.35rem] sm:text-[1.64rem] font-[600] text-[#222]" >{data.data}</h2> )
        }else if(data.dataType === "text"){
            let value = data.data
            value = value.split("<b>")
            console.log(value)
            return(
                <div id={`text${data.id}`}>
                    <p className=" text-[1.1rem] text-[#333] " >
                      {
                        value.map((i: any) => value.indexOf(i) % 2 === 0 ? i : <b>{i}</b> )
                      }
                    </p>
                </div>
            )
        }else if(data.dataType === "image"){
            return(
                <div className=" flex max-w-[100%]  " >
                    <img className=" my-4 object-cover w-[100%] " src={data.data} alt="" />
                </div>
            )
        }else{
            return(
                <div>
                    <iframe className=" my-4 sm:h-[450px] h-[300px] w-[100%] " src={data.data}></iframe>
                </div>
            )
        }
        
    }

    console.log(article)

    return(
        <div className="flex justify-center p-4 " >
            <div className="w-[100%] max-w-[800px]  ">
                <div className=" mb-2 " >
                    <h1 className=" text-[1.7rem] sm:text-[2.5rem] text-[#272727] font-[900] " >{article?.title}</h1>
                    <p className=" mt-2 text-[1.35rem] text-[#505050] " >{article?.description}</p>
                    <p className=" mb-3 text-[1.05rem] text-[#424242] ">20 de abril de 2023</p>
                    <div className=" flex w-[100%] max-h-[600px]" >
                        <img className=" object-cover w-[100%] "  src={article?.image} alt={article?.title} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 " >
                    {article?.data.map(d => loadDataFunction(d)) }
                </div>
            </div>
        </div>
    )
}