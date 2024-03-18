import { useNavigate } from "react-router-dom"

const useSignUpRoute = () => {
    let path = useNavigate();
    const Route = () => {
        path('/signup');
    }
    return { Route }
}
export default useSignUpRoute