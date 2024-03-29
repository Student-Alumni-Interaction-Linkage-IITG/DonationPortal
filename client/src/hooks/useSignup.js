import { useState } from "react";
import { useAuthContext } from "./useAuthContext"
import { useHistory } from "react-router-dom";


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const history = useHistory()

    const signup = async (name,email,password,designation) => {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch('http://localhost:8000/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name,email,password,designation})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: json})
            history.push('/')
            setIsLoading(false)
        }
    }
    
    return { signup, isLoading, error }
}