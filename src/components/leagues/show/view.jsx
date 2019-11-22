import React from 'react'
import HorizontalCard from '../../partials/league-horizontal-card'
import Card from '../../partials/team-card'
import { Link } from 'react-router-dom';

const View = (({ league, teams }) => {
    return (
        <div>
            <div className='row m-b-30 m-t-30'>
                <div className='col-12'>
                    <HorizontalCard league={league} />
                </div>
            </div>

            <div className='separator'></div>

            <div className='row flex-wrap'>
                {
                    teams.map(team =>
                        <div className='col-12 col-md-6 col-lg-4 m-t-10 m-b-10' key={team.id}>
                            <Link to={`/${league.name}/${league.id}/${team.tla}/${team.id}`}>
                                <Card team={team} />
                            </Link>
                        </div>
                    )
                }
            </div>

        </div>
    )
})

export default View