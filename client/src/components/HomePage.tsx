import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


interface Article {
    _id: string
    title: string
    image: string
    description: string
}

export default function HomePage(){

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        async function getArticles() {
            await axios.get(`http://localhost:3001/article/lasts`)
                .then(res => { setArticles(res.data) })
                .catch(err => {console.log(err)})
        }
        getArticles()
    }, [])

    console.log(articles)

    return(
        <div className=" flex justify-center" >
            <div className=" gap-4 w-[90%] flex flex-col items-center" >
                {articles.map(a => 
                <Link to={`article/${a._id}`} className=" flex flex-col bg-blue-100 w-[100%] h-[260px] " >
                    <img className=" object-cover h-[65%] w-[100%] " src={a.image} alt={a.title} />
                    <div>
                        <h3>{a.title}</h3>
                        <p>{a.description}</p>
                    </div>
                </Link>)}
            </div>
        </div>
    )
}