import Leagues from '../components/leagues/index'
import League from '../components/leagues/show'
import Teams from '../components/teams/index'
import Team from '../components/teams/show'
import TeamPlayers from '../components/players/index'

export default [
    {
        path: '/',
        exact: true,
        component: Leagues,
    },
    {
        path: '/:name',
        exact: true,
        component: League,
    },
    {
        path: '/:name/teams',
        exact: true,
        component: Teams,
    },
    {
        path: '/:name/teams/:team_name',
        exact: true,
        component: Team,
    },
    {
        path: '/:name/teams/:team_name',
        component: TeamPlayers,
    },

]