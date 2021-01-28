const USER = 'USER';
const newGame = [];

export function getUser() {
    let user = JSON.parse(localStorage.getItem(USER));

    if (!user) {
        user = [];
        localStorage.setItem(USER, JSON.stringify('user'));
    }
    return user;

}

export function setUser(newUser) {
    localStorage.setItem(USER, JSON.stringify(newUser));
}

export function clearStorage() {
    //Stringify the cart
    const clearStorageString = JSON.stringify(newGame);

    //Save cart to local storage
    localStorage.setItem(USER, clearStorageString);
}
