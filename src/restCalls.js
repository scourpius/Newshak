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
            console.log(data)
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
        }).then(() => {return true})
          .catch(() => {return false});
    } 
