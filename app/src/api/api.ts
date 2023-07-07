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

const sendPostRequest = async (url: string, requestOptions: RequestInit): Promise<object> => {
    try {

        const response = await fetch(url, requestOptions);
        const contentType = response.headers.get('Content-Type');

        let responseData = {};

        if (contentType && contentType.includes('application/json')) {
            responseData = await response.json();
        } else if (contentType && contentType.includes('text/plain')) {
            const textData = await response.text();
            responseData = {token: textData};
        } else {
            throw new Error('Invalid content type');
        }

        return responseData;

    } catch (err) {
        console.log('Error:', err)
        return {error: err};
    }
}

export const postSignup = async (body: RequestBody): Promise<object> => {
    const url = 'https://localhost:7095/Users/signup';

    requestOptions.body = JSON.stringify(body);

    const responseData = await sendPostRequest(url, requestOptions);

    return responseData;
}

export const postLogin = async (body: RequestBody): Promise<object> => {
    const url = 'https://localhost:7095/Users/login';

    requestOptions.body = JSON.stringify(body);

    const responseData = await sendPostRequest(url, requestOptions);

    return responseData;
}