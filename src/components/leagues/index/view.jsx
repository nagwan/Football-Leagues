import React from 'react'
import Card from '../../partials/card'
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/league.png'


const View = (({ leagues }) => {
    return (
        <div className='row flex-wrap'>
            {
                leagues.map(league =>
                    <div className='col-12 col-md-6 col-lg-4 m-t-10 m-b-10' key={league.id}>
                        <Link to={`/${league.name}/${league.id}`}>
                            <Card img={Logo} data={{
                                name: league.name,
                                position: league.area.name,
                                extraInfo: league.currentSeason ? league.currentSeason.winner == null ? 'NOT YET' : league.currentSeason.winner.name : 'No RUNNING SEASONS'
                            }}/>
                        </Link>
                    </div>
                )
            }
        </div>
    )
})

export default View