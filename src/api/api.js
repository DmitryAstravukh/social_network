import axios from 'axios';

export default class Api {
    #ax = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        headers: {
            'API-KEY': 'd1f3422a-8bc6-4dfd-9d5b-b5f6f9569574'
        }
    })

    getUsers = async (page, count) => {
        const r = await this.#ax.get('/users', {
            params: {page, count}
        });
        return r.data
    }

    getAuthUserData = async () => {
        const r = await this.#ax.get(`/auth/me`);
        return r.data
    }

    getUserData = async userId => {
        const r = await this.#ax.get(`/profile/${userId}`)
        return r.data
    }

    #followUser = async userId => {
        const r = await this.#ax.post(`/follow/${userId}`);
        return r.data
    }

    #unfollowUser = async userId => {
        const r = await this.#ax.delete(`/follow/${userId}`);
        return r.data
    }

    toggleFollow = (userId, followed) => {
        switch (followed) {
            case false: return this.#followUser(userId);
            case true: return this.#unfollowUser(userId);
        }
    }

    getUserStatus = async userId => await this.#ax.get(`/profile/status/${userId}`)

    updateUserStatus = async status => await this.#ax.put('/profile/status',{status})

    login = async (email, password, rememberMe, captcha) => {
        const r = await this.#ax.post('/auth/login', {email, password, rememberMe, captcha});
        return r.data
    }

    unLogin = async () => {
        const r = await this.#ax.delete('/auth/login');
        return r.data
    }

    getCaptchaUrl = async () => {
        const r = await this.#ax.get('/security/get-captcha-url');
        return r.data;
    }

    changeProfilePhoto = async photo => {
        const formData = new FormData();
        formData.append("image", photo);
        const r = await this.#ax.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return r.data;
    }
}