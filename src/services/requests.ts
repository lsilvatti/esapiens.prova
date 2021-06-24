import { get } from './adapter'; 

export function searchUsers(param: string) {
    return get(`search/users?q=${param}`);
}

export function getUser(user: string){
    return get(`users/${user}`);
}

export function getRepos(user: string){
    return get(`users/${user}/repos`);
}