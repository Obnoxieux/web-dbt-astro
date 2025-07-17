import {AbstractAPIClient} from "./AbstractAPIClient.ts";
import type {GitHubRepo} from "../model/GitHubRepo.ts";
import {GITHUB_ACCESS_TOKEN} from "astro:env/server";

export class GitHubClient extends AbstractAPIClient {
    protected readonly API_URL = "https://api.github.com"
    readonly githubUsername: string = "obnoxieux"
    protected resource = "users"

    protected buildURL(username: string, resource: string, id?: string): string {
        // TODO: refactor, works only for these two cases
        return `${this.API_URL}/${resource ?? this.resource}/${username ?? this.githubUsername}/${id ?? 'repos'}`
    }

    protected setRequestOptions(): RequestInit {
        const headers = new Headers()
        headers.append("Authorization", `Bearer ${GITHUB_ACCESS_TOKEN}`)
        headers.append("Accept", "application/vnd.github+json")

        return {
            method: "GET",
            headers: headers,
        }
    }

    async loadRepositoriesForUser(username: string, resource: string): Promise<GitHubRepo[]> {
        const url = this.buildURL(username, resource)
        const requestOptions = this.setRequestOptions()

        const response = await this.fetchJSONData<GitHubRepo[]>(url, requestOptions);
        return response;
    }

    async loadSingleRepository(owner: string, resource: string, id: string): Promise<GitHubRepo> {
        const url = this.buildURL(owner, resource, id)
        const requestOptions = this.setRequestOptions()

        const response = await this.fetchJSONData<GitHubRepo>(url, requestOptions)
        return response;
    }
}