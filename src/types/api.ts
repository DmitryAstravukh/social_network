export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    Captcha = 10
}

export type ApiResponse<D, RC = ResultCodesEnum, M = Array<string>> = {
    data: D,
    resultCode: RC,
    messages: M
}

export type ApiGetCaptchaUrlType = {
    url: string
}

export type ApiGetUserStatusType = {
    data: string
}