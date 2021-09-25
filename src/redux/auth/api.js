import axios from 'axios';

const baseUrl = "http://localhost:8000/"

export const signUp = async (email, password) => {
    const res = await axios({
        method: 'post',
        url: `${baseUrl}auth/signup`,
        headers: {},
        data: {
        username: email,
        password,
        },
    });
    localStorage.setItem('token', res.token);
    return res;
}

export const signIn = async (email, password) => {
    const res = await axios({
        method: 'post',
        url: `${baseUrl}auth/signin`,
        headers: {},
        data: {
            username: email,
            password
        }
    });
    localStorage.setItem("token", res.token);
    return res;
}

export const signOut = async () => {
    const res = await axios({
        method: 'post',
        url: `${baseUrl}auth/signout`,
    });
    localStorage.setItem('token', '');
    return res;
}