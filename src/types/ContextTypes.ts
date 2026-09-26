export type AuthContextType = {
    token: string | null,
    user: string | null,
    login: (token: string, user: string) => void,
    logout: () => void
}