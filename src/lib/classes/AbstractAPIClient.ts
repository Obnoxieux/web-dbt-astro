export abstract class AbstractAPIClient {
    protected readonly API_URL: string = ""

    // reads URL and returns the full response as JSON
    protected async fetchJSONData<T>(url: string, options: RequestInit | undefined): Promise<T> {
        const response = await fetch(url, options)
        return await response.json()
    }
}
