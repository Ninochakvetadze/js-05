import axios from "axios";
const instance = axios.create({});

export function _get(url, params) {
    return axios.get(url);
}
export function _put(url, params) {
    return axios.put(url);
}
export function _delete(url, params) {
    return axios.delete(url);
}
export function _post(url, params) {
    return axios.post(url);
}
axios.get("https://fakestoreapi.com/products/1");
axios.put("");
axios.delete("");
axios.post("");
