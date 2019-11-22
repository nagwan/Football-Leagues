import Leagues from '../components/leagues/index'
import League from '../components/leagues/show'
import Team from '../components/teams/show'

export default [
    {
        path: '/',
        exact: true,
        component: Leagues,
    },
    {
        path: '/:name/:id',
        exact: true,
        component: League,
    },
    {
        path: '/:name/:id/:team_name/:team_id',
        exact: true,
        component: Team,
    },
]