import React from 'react'
import HorizontalCard from '../../partials/team-horizontal-card'
import Card from '../../partials/card'
import Avatar from '../../../assets/images/avatar.jpg'

const View = (({ team }) => {
    return (
        <div>
            <div className='row m-b-30 m-t-30'>
                <div className='col-12'>
                    <HorizontalCard team={team} />
                </div>
            </div>

            <div className='separator'></div>

            <div className='row flex-wrap'>
                {
                    team.squad.map(player =>
                        <div className='col-12 col-md-6 col-lg-4 m-t-10 m-b-10' key={player.id}>
                            <Card img={Avatar} data={{
                                    name: player.name,
                                    position: player.position,
                                    extraInfo: player.nationality
                                }} />
                        </div>
                    )
                }
            </div>
        </div>
    )
})

export default View