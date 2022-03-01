import { User } from "./user.model";

export interface Gist{
  
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    files: File;
    public: boolean;
    created_at:Date;
    updated_at: Date;
    description: string;
    comments: number;
    user: string;
    comments_url: string;
    owner: User;
    truncated: boolean

}