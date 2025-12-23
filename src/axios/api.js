import baseAxios from "./baseAxios"

const callGet = async (command) => {
    const result = await baseAxios.get(command);

    return result?.status === 200 ? result.data : null ;
};

const callPost = async (command, data, hideMsg = false) => {
    const result = await baseAxios.post(command, data);

    const resultData = result?.data;

    return resultData;
}

const apiList = {
    cart: "/cart",
    order: "/order",
    check: "/check",
    admin: "/admin",
    ref: "/ref"
}

export {
    apiList,
    callGet,
    callPost
}