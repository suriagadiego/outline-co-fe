const apiServerUrl = "http://127.0.0.1:8000";
import { callExternalApi } from './external-api.service';

export const getProduct = async ( id = '' ) => {
    const config = {
        url: `${apiServerUrl}/product/id/${id}`,
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};


export const updateProduct = async ( uuid, body ) => {
    const config = {
        url: `${apiServerUrl}/product/update/${uuid}/`,
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        data: body
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const getProducts = async () => {
    const config = {
        url: `${apiServerUrl}/product/list`,
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const createProduct = async (body) => {
    const config = {
        url: `${apiServerUrl}/product/create/`,
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        data: body
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};

export const deleteProduct = async (uuid) => {
    const config = {
        url: `${apiServerUrl}/product/delete/${uuid}`,
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    };
};