import { useNavigate } from 'react-router-dom'

function useNavigateHook() {
    let path = useNavigate()
    const Navigation = (Id, Name) => {
        path(`/product/${Id}/${Name}`)
    }
    return { Navigation };
}
export default useNavigateHook;