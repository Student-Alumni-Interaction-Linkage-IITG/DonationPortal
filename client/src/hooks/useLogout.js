import { useHistory } from "react-router-dom"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const history = useHistory()
    
    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        history.push('/')
        window.location.reload(false);
    }

    return {logout}
}