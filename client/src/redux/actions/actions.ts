export function changeLenguage(lenguage:string, dispatch:Function) {
    if (lenguage === "english") {
        dispatch({ type: "CHANGE_LENGUAGE", payload: "spanish" })
    }else{
        dispatch({ type: "CHANGE_LENGUAGE", payload: "english" })
    }
}
