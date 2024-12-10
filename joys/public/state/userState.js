const UserState = (() => {
    const USER_KEY = "joys_user";

    // Mendapatkan data pengguna dari Local Storage
    function getUser() {
        const user = localStorage.getItem(USER_KEY);
        return user ? JSON.parse(user) : null;
    }

    // Menyimpan data pengguna ke Local Storage
    function setUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    // Menghapus data pengguna dari Local Storage
    function clearUser() {
        localStorage.removeItem(USER_KEY);
    }

    return {
        getUser,
        setUser,
        clearUser,
    };
})();
