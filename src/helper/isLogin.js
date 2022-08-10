export const isLogin = () => {
    if (localStorage.getItem('login-token')) {
        return true;
    }

    return false;
}