function checkLogin(login, password) {
    return new Promise((resolve, reject) => {
        if (login === 'John' && password === '123') {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

export let Loginservice = { 'checkLogin': checkLogin };
