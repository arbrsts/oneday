export interface RequestBody {
    username : string;
    password : string;
}

const headers  = new Headers();
headers.append('Content-type', 'application/json');

export const requestOptions: RequestInit = {
    method: 'POST',
    headers: headers
}

export const sendPostRequest = async (url: string, requestOptions: RequestInit): Promise<object> => {
    try {

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error('Invalid details');
        }
        
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
        let message = err instanceof Error ? err.message : null;
        return {error: (message ? message : 'Something went wrong')};
    }
}