import { get } from './adapter'; 

export function searchUsers(param: string, page:number) {
    return get(`search/users?q=${param}&page=${page}`);
}

export function getUser(user: string){
    return get(`users/${user}`);
}

export function getRepos(user: string){
    return get(`users/${user}/repos`);
}

export function getRepo(user: string, repo: string){
    return get(`repos/${user}/${repo}`);
}

export function getRepoDetail(user: string, repo: string, detail: string){
    return get(`repos/${user}/${repo}/${detail}`);
}