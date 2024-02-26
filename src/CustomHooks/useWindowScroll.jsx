import { useEffect } from "react"

const useWindowScroll=()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
}
export default useWindowScroll;