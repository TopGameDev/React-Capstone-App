import axios from 'axios'
import UserType from '../types/auth';
import PlayerType from '../types/player';
import PostType from '../types/post';


const base: string = 'http://127.0.0.1:5000/api';
const wiseoldmanbase: string = 'https://api.wiseoldman.net/v2/'
const postEndpoint: string = '/posts';
const userEndpoint: string = '/users';
const tokenEndpoint: string = '/token';
const womEndpoint: string = '/players'


const apiClientNoAuth = () => axios.create({
    baseURL: base
})

const womApiClientNoAuth = () => axios.create({
    baseURL: wiseoldmanbase
})

const apiClientBasicAuth = (username:string, password:string) => axios.create({
    baseURL: base,
    headers: {
        Authorization: 'Basic ' + btoa(`${username}:${password}`)
    }
})

const apiClientTokenAuth = (token:string) => axios.create({
    baseURL: base,
    headers: {
        Authorization: 'Bearer ' + token
    }
})

type APIResponse<T> = {
    error?: string,
    data?: T
}

type TokenType = {
    token: string,
    tokenExpiration: string
}

async function getAllPosts(): Promise<APIResponse<PostType[]>> {
    let error;
    let data;
    try{
        const response = await apiClientNoAuth().get(postEndpoint);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.message
        } else {
            error = 'Something went wrong'
        }
    }
    return {error, data}
}

async function register(newUserData:Partial<UserType>): Promise<APIResponse<UserType>> {
    let error;
    let data;

    try{
        const response = await apiClientNoAuth().post(userEndpoint, newUserData)
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return {error, data}
}

async function login(username:string, password:string): Promise<APIResponse<TokenType>> {
    let error;
    let data;

    try{
        const response = await apiClientBasicAuth(username, password).get(tokenEndpoint)
        data = response.data
    } catch(err){
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return {error, data}
}

async function getUser(token:string): Promise<APIResponse<UserType>> {
    let error;
    let data;
    
    try{
        const response = await apiClientTokenAuth(token).get(userEndpoint + '/me');
        data = response.data 
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return {error, data}
}

async function createPost(token:string, newPost:Partial<PostType>): Promise<APIResponse<PostType>> {
    let error;
    let data;

    try{
        const response = await apiClientTokenAuth(token).post(postEndpoint, newPost);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return {error, data}
}

async function getPostById(postId:string): Promise<APIResponse<PostType>> {
    let error;
    let data;

    try {
        const response = await apiClientNoAuth().get(postEndpoint + '/' + postId);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return {error, data}
}

async function editPostById(token:string, postId:string|number, editedPostData:PostType): Promise<APIResponse<PostType>> {
    let error;
    let data;
    try {
        const response = await apiClientTokenAuth(token).put(postEndpoint + '/' + postId, editedPostData)
        data = response.data
    } catch(err){
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return {error, data}
}

async function deletePostById(token:string, postId:string|number): Promise<APIResponse<string>> {
    let error;
    let data;
    try {
        const response = await apiClientTokenAuth(token).delete(postEndpoint + '/' + postId)
        data = response.data.success
    } catch(err){
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return {error, data}
}

async function getPlayerStats(playername:string): Promise<APIResponse<string>> {
    let error;
    let data;

    try {
        const response = await womApiClientNoAuth().get(womEndpoint + '/' + playername)
        data = response.data

    } catch(err){
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return {error, data}
}

async function editUser(token:string, userId:string|number, editedUser:Partial<UserType>) {
    let error
    let data

    try {
        const response = await apiClientTokenAuth(token).put(userEndpoint + '/' + userId, editedUser)
        data = response.data
    } catch(err){
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return {error, data}
}

export {
    getAllPosts,
    register,
    login,
    getUser,
    createPost,
    getPostById,
    editPostById,
    deletePostById,
    getPlayerStats,
    editUser,
}