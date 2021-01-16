export type UserProfilePhotos = {
    large: string | null,
    small: string | null
}

//TODO rename interface
export interface UserDataContactsType {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}

export interface UserDataType {
    userId: number | null,
    aboutMe: string | null,
    contacts: UserDataContactsType,
    fullName: string | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    photos: UserProfilePhotos
}