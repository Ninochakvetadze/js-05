import axios from "axios";

function _get(url, params) {
    return axios.get(url);
}
function _put(url, params) {
    return axios.put(url);
}
function _delete(url, params) {
    return axios.delete(url);
}
function _post(url, params) {
    return axios.post(url);
}
export const api = {
    _get,
    _put,
    _post,
    _delete,
};

// axios.get("https://fakestoreapi.com/products/1");
// axios.put("");
// axios.delete("");
// axios.post("");
