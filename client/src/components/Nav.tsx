
import { Link } from "react-router-dom"

export default function Nav(){

    return(
        <div className=" bg-yellow-300 h-[60px] flex justify-between px-4 items-center mb-4 " >
            <h2>InfoTendencia</h2>
            <div>
                <Link to={"/articles"}>
                    <h4>Articulos</h4>
                </Link>
            </div>
        </div>
    )
}