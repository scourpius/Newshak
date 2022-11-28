    export function login(username, password){
        return fetch("https://newshak.appspot.com/rest/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: username,
                pwd: password
            })
        }).then((response) => response.json())
        .then((data) => {
           localStorage.setItem('user', JSON.stringify(data))
           return true
        }).catch(() => {return false});
    }

    export function register(username, name, email, university, password){
        return fetch("https://newshak.appspot.com/rest/user/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
		        name: name,
		        university: university,
		        email: email,
		        password: password
            })
        }).then((response) => {return response.ok;});
    }

    export function contestList(username){
        return fetch("https://newshak.appspot.com/rest/user/contests", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        }).then((response) => response.json())
        .then((data) => {
           localStorage.setItem('contests', JSON.stringify(data))
           return true
        }).catch(() => {return false});
    }

    export function createContest(name, subject, date, description){
        return fetch("https://newshak.appspot.com/rest/user/contests", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                subject: subject,
                description: description,
                date: date,
                isOpen: true
            })
        }).then((response) => {return response.ok;});
    }
