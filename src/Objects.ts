interface User {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
}

interface Admin {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
    role: string,
}

const user1 = {
    login: "",
    email: "jshdfgjh@sfjghdkfhg",
    password: "ksjdhfkjsdhf",
    isOnline: true,
    lastVisited: new Date(2022, 4, 6),
}

function login({login, password}: User): string {
    return login.length>0 && password.length>0 ? `Hello, ${login}` : "";
}

login(user1);


