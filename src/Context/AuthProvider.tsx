import { useState } from "react"
import { AuthContextData } from "./AuthContext"
function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"))
    const [user, setUser] = useState<string | null>(localStorage.getItem("user"))
    function login(token: string, user: string) {
        localStorage.setItem("token", token)
        localStorage.setItem("user", user)
        setToken(token)
        setUser(user)
    }
    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setToken(null)
        setUser(null)
    }
    return (
        <AuthContextData.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContextData.Provider>
    )
}

export default AuthProvider;