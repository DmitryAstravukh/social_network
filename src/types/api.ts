import { AuthUserDataType } from "./auth";
import { UserProfilePhotos } from "./profile";

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    Captcha = 10
}

export type ApiGetAuthUserDataType = {
    data: AuthUserDataType,
    resultCode: ResultCodesEnum,
    message: Array<string>
}

export type ApiFollowedType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: Object
}

export type ApiUpdateUserStatusType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: Object
}

export type ApiLoginType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: { userId: number }
}

export type ApiUnloginType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: Object
}

export type ApiGetCaptchaUrlType = {
    url: string
}

export type ApiChangeProfilePhotoType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: UserProfilePhotos
}

export type ApiGetUserStatusType = {
    data: string
}