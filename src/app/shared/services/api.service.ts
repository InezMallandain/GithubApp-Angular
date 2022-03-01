import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from "src/environments/environment";
import { Gist } from '../models/gists.model';
import { Repo } from '../models/repo.model';
import { SearchUserResponse, User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(queryString:string, index: number = 1){
   return this.http.get<SearchUserResponse>(`${env.apiURL}/search/users?q=${queryString}&page=${index}&per_page=10`)
  }

  getUser(userLogin: string){
    return this.http.get<User>(`${env.apiURL}/users/${userLogin}`);
  }
  getFollowers(userLogin: string){
    return this.http.get<User[]>(`${env.apiURL}/users/${userLogin}/followers`);
  }
  getFollowing(userLogin: string){
    return this.http.get<User[]>(`${env.apiURL}/users/${userLogin}/following`);
  }
  getRepos(userLogin: string, index = 1){
    return this.http.get<Repo[]>(`${env.apiURL}/users/${userLogin}/repos?page=${index}&per_page=10`); 
  }
  getRepo(userLogin: string, repoName: string){
    return this.http.get<Repo>(`${env.apiURL}/repos/${userLogin}/${repoName}`); 
  }
  getGists(userLogin: string){
    return this.http.get<Gist[]>(`${env.apiURL}/users/${userLogin}/gists`); 
  }
  getStack(repo: Repo){
    return this.http.get<any>(`${env.apiURL}/repos/${repo.owner.login}/${repo.name}/languages`); 
  }
}