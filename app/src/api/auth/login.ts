import { RequestBody, requestOptions, sendPostRequest } from "./postRequest";

export const postLogin = async (body: RequestBody): Promise<object> => {
    const url = 'https://localhost:7095/Users/login';

    requestOptions.body = JSON.stringify(body);

    const responseData = await sendPostRequest(url, requestOptions);

    return responseData;
}