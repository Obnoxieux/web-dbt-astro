import type {Club} from "$lib/model/Club";
import type {AbstractStatisticsEntry} from "$lib/model/AbstractStatisticsEntry";

export interface PitchingStatisticsEntry extends AbstractStatisticsEntry {
    data: PitchingStatisticsData[];
    summaries: PitchingStatisticSummary[];
}

interface PitchingStatisticValues {
    type: string;
    games: number;
    games_started: number;
    complete_games: number;
    innings_pitched: string;
    batters_faced: number;
    at_bats: number;
    runs: number;
    earned_runs: number;
    hits: number;
    doubles: number;
    triples: number;
    homeruns: number;
    strikeouts: number;
    base_on_balls_allowed: number;
    intentional_base_on_balls: number;
    hit_by_pitches: number;
    wild_pitches: number;
    interferences: number;
    balks: number;
    wins: number;
    losses: number;
    saves: number;
    earned_runs_average: string;
    walks_and_hits_per_innings_pitched: string;
}

interface PitchingStatisticsData {
    club: Club;
    league: {
        id: number;
        type: string;
        name: string;
        acronym: string;
        sport: string;
        sort: number;
        season: number;
        age_group: string;
    };
    type: string;
    values: PitchingStatisticValues;
}

interface PitchingStatisticSummary {
    values: PitchingStatisticValues;
}

