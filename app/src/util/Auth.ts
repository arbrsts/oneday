import fetchRequest from "./fetchRequest";

interface RequestBody {
    username : string;
    password : string;
}

const headers  = new Headers();
headers.append('Content-type', 'application/json');

const requestOptions: RequestInit = {
    method: 'POST',
    headers: headers
}

const Auth = {
    login: async (body: RequestBody) => {
        const url = 'https://localhost:7095/Users/login';

        requestOptions.body = JSON.stringify(body);

        const responseData = await fetchRequest(url, requestOptions);

        return responseData;
    },
    signup: async (body: RequestBody) => {
        const url = 'https://localhost:7095/Users/signup';

        requestOptions.body = JSON.stringify(body);

        const responseData = await fetchRequest(url, requestOptions);

        return responseData;
    }
}

export default Auth;