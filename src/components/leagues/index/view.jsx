import React from 'react'
import Card from '../../partials/league-card'
import { Link } from 'react-router-dom';


const View = (({ leagues }) => {
    return (
        <div className='row flex-wrap'>
            {
                leagues.map(league =>
                    <div className='col-12 col-md-6 col-lg-4 m-t-10 m-b-10' key={league.id}>
                        <Link to={`/${league.name}/${league.id}`}>
                            <Card league={league} />
                        </Link>
                    </div>
                )
            }
        </div>
    )
})

export default View