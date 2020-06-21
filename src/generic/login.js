import axios from 'axios'
axios.defaults.withCredentials = true;

async function postData (url = '', data = {}) {
  console.log("DATA=" + JSON.stringify(data));
  try {
    const response = await axios.post(url, data)
    console.log("response=" + response);
    return response.data;
  }
  catch (error) {
    console.log(error.response);
    return {status: 401, message: error.response.data.message}
  }

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
