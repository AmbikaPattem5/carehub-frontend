import { AuthContextData } from "./AuthContext"
function AuthProvider({ children }: { children: React.ReactNode }) {
    const response: string = localStorage.getItem("carehub:token");
    const { token, user } = JSON.parse(response || "{}")
    console.log(token, user)
    return (
        <AuthContextData.Provider value={{ token, user }}>
            {children}
        </AuthContextData.Provider>
    )
}

export default AuthProvider;