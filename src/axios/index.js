import axios from 'axios';

const baseUrl = "http://localhost:8000/"

export const signUp = async (email, password) => {
    try {
        const res = await axios({
            method: 'post',
            url: `${baseUrl}auth/signup`,
            headers: {},
            data: {
                username: email,
                password
            }
        });
        localStorage.setItem("token", res.token);
        return res;
    } catch (err) {
        return err
    }
}

export const signIn = async (email, password) => {
    try {
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
    } catch (err) {
        return err;
    }

}

export const signOut = async () => {
    try {
        const res = await axios({
            method: 'post',
            url: `${baseUrl}auth/signout`,
        });
        return res;
    } catch (err) {
        return err;
    }
}