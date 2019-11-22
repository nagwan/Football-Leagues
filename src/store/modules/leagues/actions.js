export const FETCH_LEAGUES_FLAG = 'FETCH_LEAGUES_FLAG'
export const FETCH_LEAGUES = 'FETCH_LEAGUES'

export function fetchLeaguesFlag(payload){
    return {type: FETCH_LEAGUES_FLAG, payload }
}

export function fetchLeagues(payload){
    return {type: FETCH_LEAGUES, payload }
}
