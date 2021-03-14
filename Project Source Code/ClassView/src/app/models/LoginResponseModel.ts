export interface LoginResponseModel {
    authenticationToken: string
    refreshToken: string
    expiresAt: Date
    username: string
}