import axios from "axios";
import { useState } from "react";

export default function CreateArticles(){


    interface Image{
      prev: string,
      file: string,
    }

    interface Data {
        id: string
        dataType: string
        data: any
    }

  const [title, setTitle] = useState<string>("")
  const [articleImage, setArticleImage] = useState<Image>();
  const [data, setData] = useState<Data[]>([])
  const [addData, setAddData] = useState<string>("")
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");


  //adding metadata
  let head = document.querySelector("head")
  let oldTilte = document.querySelector("title")
  let meta = document.getElementById("description")
  //@ts-ignore
  head?.removeChild(oldTilte)
  //@ts-ignore
  let headTitle = document.createElement("title") 
  headTitle.innerHTML = title
  head?.appendChild(headTitle)
  //@ts-ignore
  meta.content = description



  function generarCodigoAleatorio() {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    for (let i = 0; i < 18; i++) {
      codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
  }

  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };
  console.log(text)
  function textSubmit() {
    
    setData([...data, {id: `${generarCodigoAleatorio()}`, dataType: "text", data: text}]);
    setText("")
    setAddData("")
  }

  const handleImageChange = (event: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // @ts-ignore
        setImage({prev: reader.result, file: imagefile.files[0] });
      }
    };
    let imagefile = document.querySelector('#dataImage');
    reader.readAsDataURL(event.target.files[0]);
  };

  console.log(data)

  const handleArticleImageChange = (event: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // @ts-ignore
        setArticleImage({prev: reader.result, file: imagefile.files[0] });
      }
    };
    let imagefile = document.querySelector('#articleImage');
    reader.readAsDataURL(event.target.files[0]);
  };
  console.log(articleImage)

  function imageSubmit() {
    setData([...data, {id: `${generarCodigoAleatorio()}`, dataType: "image", data: image}]);
    setImage("")
    setAddData("")
  }

  const handleUrlChange = (event: any) => {
    setUrl(event.target.value);
  };

  function urlSubmit() {
    setData([...data, {id: `${generarCodigoAleatorio()}`, dataType: "url", data: url}]);
    setUrl("")
    setAddData("")
  }

  const handleSubTitleChange = (event: any) => {
    setSubTitle(event.target.value);
  };

  function subTitleSubmit() {
    setData([...data, {id: `${generarCodigoAleatorio()}`, dataType: "subtitle", data: subTitle}]);
    setSubTitle("")
    setAddData("")
  }

  function returnData(d: any){
    if (d.dataType === "subtitle") {
        return(
            <h2 id={`title${d.id}`} > {d.data} </h2>
        )
    }else if(d.dataType === "text"){
        let value = d.data
        value = value.split("<b>")
        console.log(value)
        return(
            <div id={`text${d.id}`}>
                <p>
                  {
                    value.map((i: any) => value.indexOf(i) % 2 === 0 ? i : <b>{i}</b> )
                  }
                </p>
            </div>
        )
    }else if(d.dataType === "image"){
        return(
            <img className=" max-h-[300px] " id={`img${d.id}`} src={d.data.prev} alt="infotendencia img" />
        )
    }else{
        return(
            <iframe id={`iframe${d.id}`} src={d.data} frameBorder="0"></iframe>
        )
    }
  }

  function editData(d: Data){
    let value = d.data
    let element = document.getElementById(d.id)

    let button = document.createElement("button")
    button.innerHTML = "Save"
    button.className="  bg-gray-300 rounded-[10px] w-[140px] h-[60px] text-[1.2rem] font-[600] hover:bg-gray-200 transition-all " 
    button.addEventListener("click", function(){
      for (var i = 0; i < data.length; i++) {
        let copyData = data.slice()
        if (copyData[i].id === d.id) {
          copyData[i].data = value;
          setData(copyData)
          break;
        }
      }
      element?.removeChild(button);
    })
    element?.appendChild(button)

    // @ts-ignore
    element.className = "flex flex-row-reverse rounded-[10px] border-gray-300 border-[1px] p-2 mt-2 justify-end items-center gap-4 " 


    
    if (d.dataType === "subtitle") {
      let input = document.createElement("input");
      input.value = value;
      let oldTitle = document.getElementById(`title${d.id}`);
      // @ts-ignore
      element?.removeChild(oldTitle);
      element?.appendChild(input)

      input.className = "border-[1px] rounded-[10px] border-gray-400 text-[1.1rem] p-2 font-[400] w-[450px]  "

      input.addEventListener("change", function(){
        value = input.value
      })
      button.addEventListener("click", function(){
        // @ts-ignore
        element?.appendChild(oldTitle);
        element?.removeChild(input);
        
      })
    }else if(d.dataType === "text"){
      let textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.className = "border-[1px] rounded-[10px] border-gray-400 text-[1.1rem] p-2 font-[400] w-[650px] h-[500px] "
      let oldText = document.getElementById(`text${d.id}`);
      // @ts-ignore
      element?.removeChild(oldText);
      element?.appendChild(textarea)

      textarea.addEventListener("change", function(){
        value = textarea.value
      })
      
      button.addEventListener("click", function(){
        // @ts-ignore
        element?.appendChild(oldText);
        element?.removeChild(textarea);
      })
      
    }else if(d.dataType === "image"){
      let input = document.createElement("input");
      input.type = "file";
      input.name = "image"
      // @ts-ignore
      let oldImage = document.getElementById(`img${d.id}`);
      element?.appendChild(input)
      // @ts-ignore
      element?.removeChild(oldImage);

      input.addEventListener("change", function(event){
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            // @ts-ignore
            value = {prev: reader.result, file: input.files[0]}
          }
        };
        // @ts-ignore
        reader.readAsDataURL(event.target.files[0]);
        
      })
      button.addEventListener("click", function(){
        // @ts-ignore
        element?.appendChild(oldImage);
        element?.removeChild(input);
      })
    }else{
      let input = document.createElement("input");
      input.value = value;
      input.className = "border-[1px] rounded-[10px] border-gray-400 text-[1.1rem] p-2 font-[400] w-[350px] "
      let oldUrl = document.getElementById(`iframe${d.id}`);
      // @ts-ignore
      element?.removeChild(oldUrl);
      element?.appendChild(input)

      input.addEventListener("change", function(){
        value = input.value
      })
      button.addEventListener("click", function(){
        // @ts-ignore
        element?.appendChild(oldUrl);
        element?.removeChild(input);
        
      })
    }
  }


  async function createArticle() {
    let images = [articleImage?.file]

    for (let i = 0; i < data.length; i++) {
      if (data[i].dataType === "image") {
        images.push(data[i].data.file)
        data[i].data = images.length
      }
    }
    console.log(data)
    console.log(images)

    const obj = {
      title,
      images,
      data,
      description
    }

//title, image: articleImage?.file, data,
    return axios.post("http://localhost:3001/article", obj , {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(r => console.log(r))
    .catch(err => console.log(err))
  }



  return (
    <div className="flex justify-center  " >
        <div className="w-[70%] mt-4 p-4 border-[1px] rounded-[8px] border-gray-300 ">
            <div className="flex mb-2 " >
                <span className=" mr-2 text-[1.8rem] font-[700]">Title:</span>
                <input className=" px-2 text-[1.6rem] font-[500] w-[500px] border-b-[1px] border-gray-400 " type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className=" flex justify-center items-center mt-4 flex-col " >
                <span className=" text-[1.4rem] font-[500] mb-2">Description (SEO):</span>
                <input className=" border-[1px] rounded-[10px] border-gray-400 text-[1.1rem] p-2 font-[400] w-[450px] " type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className=" flex flex-col mt-[20px] border-[1px] rounded-[8px] border-gray-400 gap-4 p-4 " >
                <span className=" mr-2  text-[1.4rem] font-[700]" >Article Image:</span>
                {articleImage?.prev && (
                    <img className=" w-[300px] " src={articleImage.prev} alt="new article"/>
                )}
                <input id="articleImage" type="file" name="image" onChange={handleArticleImageChange} />
            </div>
            {
              data.length > 0 && 
              <div className="flex flex-col mt-[20px] border-[1px] rounded-[8px] border-gray-400 gap-4 p-4" >   
                {data.map(d => 
                  <div> 
                    <div className=" flex gap-4 ">
                      <button className="font-[500] bg-gray-300 p-[6px] w-[70px] rounded-[10px] hover:bg-gray-400 transition-all " onClick={() => editData(d)}>Edit</button>
                      <button className="font-[500] bg-gray-300 p-[6px] w-[70px] rounded-[10px] hover:bg-gray-400 transition-all " onClick={() => setData(data.filter(data => data.id !== d.id ))} >Delete</button>
                    </div>
                    <div id={d.id} className="rounded-[10px] border-gray-300 border-[1px] p-2 mt-2 ">
                      {returnData(d)} 
                    </div>
                  </div>)}
            </div>
            }
            {addData === "" ? 
            <div className="flex justify-around mt-[20px] border-[1px] rounded-[8px] border-gray-400 gap-4 p-4" >
                <button className="  bg-gray-300 rounded-[10px] w-[140px] h-[60px] text-[1.2rem] font-[600] hover:bg-gray-200 transition-all " onClick={() => setAddData("text")} >Add Text</button>
                <button className="  bg-gray-300 rounded-[10px] w-[140px] h-[60px] text-[1.2rem] font-[600] hover:bg-gray-200 transition-all " onClick={() => setAddData("image")} >Add Image</button>
                <button className="  bg-gray-300 rounded-[10px] w-[140px] h-[60px] text-[1.2rem] font-[600] hover:bg-gray-200 transition-all " onClick={() => setAddData("url")} >Add URL</button>
                <button className="  bg-gray-300 rounded-[10px] w-[140px] h-[60px] text-[1.2rem] font-[600] hover:bg-gray-200 transition-all " onClick={() => setAddData("subtitle")} >Add SubTitle</button>
            </div> : 
              <div className=" flex justify-center " >
                { addData === "text" ? 
                <div className=" flex justify-center items-center mt-4 flex-col ">
                    <span className=" text-[1.4rem] font-[500] mb-2">Text:</span>
                    <textarea className=" border-[1px] rounded-[10px] border-gray-400 text-[1.1rem] p-2 font-[400] w-[650px] h-[500px] " value={text} onChange={handleTextChange} />
                    <button className=" bg-gray-300 text-[1.2rem] font-[500] hover:scale-[1.05] mt-3 hover:bg-gray-400 transition-all w-[100px] h-[50px] rounded-[10px] " onClick={textSubmit} >Submit</button>
                </div> :
                addData === "image" ? 
                <div className=" flex justify-center items-center mt-4 flex-col " >
                    <span className=" text-[1.4rem] font-[500] mb-2">Image:</span>
                    <input type="file" name="image" id="dataImage" onChange={handleImageChange} />
                    <button className=" bg-gray-300 text-[1.2rem] font-[500] hover:scale-[1.05] mt-3 hover:bg-gray-400 transition-all w-[100px] h-[50px] rounded-[10px] "  onClick={imageSubmit} >Submit</button>
                </div> : 
                addData === "url" ?
                <div className=" flex justify-center items-center mt-4 flex-col " >
                    <span className=" text-[1.4rem] font-[500] mb-2">Iframe:</span>
                    <input className=" border-[1px] rounded-[10px] border-gray-400 text-[1.1rem] p-2 font-[400] w-[350px] " type="text" value={url} onChange={handleUrlChange} />
                    <button className=" bg-gray-300 text-[1.2rem] font-[500] hover:scale-[1.05] mt-3 hover:bg-gray-400 transition-all w-[100px] h-[50px] rounded-[10px] "  onClick={urlSubmit} >Submit</button>
                </div> : 
                <div className=" flex justify-center items-center mt-4 flex-col " >
                    <span className=" text-[1.4rem] font-[500] mb-2">SubTitle:</span>
                    <input className=" border-[1px] rounded-[10px] border-gray-400 text-[1.1rem] p-2 font-[400] w-[450px] " type="text" value={subTitle} onChange={handleSubTitleChange} />
                    <button className=" bg-gray-300 text-[1.2rem] font-[500] hover:scale-[1.05] mt-3 hover:bg-gray-400 transition-all w-[100px] h-[50px] rounded-[10px] "  onClick={subTitleSubmit} >Submit</button>
                </div> } 
              </div>}
              <div className=" flex mt-[40px]" >
                <button onClick={createArticle} className=" bg-gray-300 text-[1.2rem] font-[500] hover:scale-[1.05] mt-3 hover:bg-yellow-400  transition-all w-[100px] h-[50px] rounded-[10px]" >Submit</button>
              </div>
            
        </div>
    </div>
  );
}