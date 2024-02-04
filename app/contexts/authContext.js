import { createContext } from "react";
import React from 'react'
import * as SecureStore from 'expo-secure-store';


export const AuthContext = createContext(null)

export default function AuthProvider(params) {
    const [isSignedIn, setIsSignedIn] = React.useState(false)

    React.useEffect(() => {
        SecureStore.getItemAsync('access_token')
        .then(access_token => {
            if (access_token) {
                setIsSignedIn(true)
            }
        })
    }, [])

    return <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
         {params.children}
    </AuthContext.Provider>
}