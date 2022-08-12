export const isLogin = () => {
    if (localStorage.getItem('login-token') !== null) {
        return true;
    }

    return false;
}