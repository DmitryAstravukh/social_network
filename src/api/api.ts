import axios from 'axios';
import { ApiGetCaptchaUrlType, ApiResponse } from '../types/api';
import {UserDataType, UserProfilePhotos} from '../types/profile';
import { UserType } from "../types/user";
import {AuthUserDataType} from "../types/auth";


export default class Api {
    private ax = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        headers: {
            'API-KEY': 'd1f3422a-8bc6-4dfd-9d5b-b5f6f9569574'
        }
    })

    getUsers = async (page: number, count: number) => {
        const r = await this.ax.get<UserType>('/users', {
            params: { page, count }
        });
        return r.data
    }

    getAuthUserData = async () => {
        const r = await this.ax.get<ApiResponse<AuthUserDataType>>(`/auth/me`);
        return r.data
    }

    getUserData = async (userId: number) => {
        const r = await this.ax.get<UserDataType>(`/profile/${userId}`)
        return r.data
    }

    private followUser = async (userId: number) => {
        const r = await this.ax.post<ApiResponse<Object>>(`/follow/${userId}`);
        return r.data
    }

    private unfollowUser = async (userId: number) => {
        const r = await this.ax.delete<ApiResponse<Object>>(`/follow/${userId}`);
        return r.data
    }

    toggleFollow = (userId: number, followed: boolean) => {
        switch (followed) {
            case false: return this.followUser(userId);
            case true: return this.unfollowUser(userId);
        }
    }

    getUserStatus = async (userId: number) => {
        const r = await this.ax.get<string>(`/profile/status/${userId}`);
        return r.data
    }

    updateUserStatus = async (status: string | null) => {
        const r = await this.ax.put<ApiResponse<string>>('/profile/status',{status});
        debugger;
        return r.data
    }

    login = async (email: string, password: string, rememberMe: boolean, captcha: string | null) => {
        const r = await this.ax.post<ApiResponse<{userId: number}>>('/auth/login', {email, password, rememberMe, captcha});
        return r.data
    }

    unLogin = async () => {
        const r = await this.ax.delete<ApiResponse<Object>>('/auth/login');
        return r.data
    }

    getCaptchaUrl = async () => {
        const r = await this.ax.get<ApiGetCaptchaUrlType>('/security/get-captcha-url');
        return r.data;
    }

    changeProfilePhoto = async (photo: File) => {
        const formData = new FormData();
        formData.append("image", photo);
        const r = await this.ax.put<ApiResponse<{photos: UserProfilePhotos}>>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return r.data;
    }
}