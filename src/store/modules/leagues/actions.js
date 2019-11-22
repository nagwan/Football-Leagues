export const FETCH_LEAGUES_FLAG = 'FETCH_LEAGUES_FLAG'
export const FETCH_LEAGUES = 'FETCH_LEAGUES'

export const SHOW_LEAGUE_FLAG = 'SHOW_LEAGUE_FLAG'
export const SHOW_LEAGUE = 'SHOW_LEAGUE'

export const FETCH_TEAMS = 'FETCH_TEAMS'

export const SHOW_TEAM_FLAG = 'FETCH_TEAM_FLAG'
export const SHOW_TEAM = 'FETCH_TEAM'

export function fetchLeaguesFlag(payload) {
    return { type: FETCH_LEAGUES_FLAG, payload }
}

export function fetchLeagues(payload) {
    return { type: FETCH_LEAGUES, payload }
}

export function showLeagueFlag(payload) {
    return { type: SHOW_LEAGUE_FLAG, payload }
}

export function showLeague(payload) {
    return { type: SHOW_LEAGUE, payload }
}

export function fetchTeams(payload) {
    return { type: FETCH_TEAMS, payload }
}

export function showTeamFlag(payload) {
    return { type: SHOW_TEAM_FLAG, payload }
}

export function showTeam(payload) {
    return { type: SHOW_TEAM, payload }
}



