import {AbstractAPIClient} from "./AbstractAPIClient.ts";
import type {StatsType} from "../enums/StatsType.ts";
import type {AbstractStatisticsEntry} from "../model/AbstractStatisticsEntry.ts";

export class BSMAPIClient extends AbstractAPIClient {
    API_URL = "https://bsm.baseball-softball.de"
    protected readonly bsmPersonID: number = 76222
    protected readonly defaultSeason = new Date().getFullYear()


    protected buildURL(statsType: StatsType, season?: number): string {
        const selectedSeason = season ?? this.defaultSeason
        let urlString = `${this.API_URL}/people/${this.bsmPersonID}/statistics/${statsType}.json`

        if (season) {
            urlString = urlString.concat(`?filters[seasons][]=${selectedSeason}`)
        }

        return urlString
    }

    async loadPersonalStatistics(statsType: StatsType, season?: number): Promise<AbstractStatisticsEntry> {
        const url = this.buildURL(statsType, season);
        const response = await this.fetchJSONData<AbstractStatisticsEntry>(url, undefined);

        return response;
    }
}