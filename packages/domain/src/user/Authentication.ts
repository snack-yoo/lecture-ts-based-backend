export interface Authentication {
    userId: string,
    secret: string,
    type: AuthType,
}

export enum AuthType {
    password = 'password',
    google = 'google',
    kakao = 'kakao',
    naver = 'naver'
}