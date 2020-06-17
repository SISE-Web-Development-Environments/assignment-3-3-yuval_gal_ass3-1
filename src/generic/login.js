async function postData (url = '', data = {}) {
  const response = await fetch (url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify (data)
  });
  return response.json ();
}

async function login(username, password) {
  console.log(username,password)
  const success = await postData('http://localhost/user/Login', {username: username, password: password})
  console.log(success);
  if (success.username) {
    return {status: "success", message: success.username};
  } else {
    return {status: "failure", message: success.message};
  }
}


export default {login}
