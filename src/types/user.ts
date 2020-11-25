export type UsersPhotoType = {
    small: string | null,
    large: string | null
}

export type UserItemType = {
    id: number,
    name: string,
    status: string | null,
    photos: UsersPhotoType,
    followed: boolean
}

export type UserType = {
    items: Array<UserItemType>,
    totalCount: number,
    error: string | null
}
