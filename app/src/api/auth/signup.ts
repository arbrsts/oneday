import { RequestBody, requestOptions, sendPostRequest } from "./postRequest";

export const postSignup = async (body: RequestBody): Promise<object> => {
    const url = 'https://localhost:7095/Users/signup';

    requestOptions.body = JSON.stringify(body);

    const responseData = await sendPostRequest(url, requestOptions);

    return responseData;
}