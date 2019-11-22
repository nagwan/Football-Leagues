import React from 'react'
import Card from '../../partials/card'


const View = (({ leagues }) => {
    return (
        <div className='row flex-wrap'>
            {
                leagues.map(league =>
                    <div className='col-12 col-md-6 col-lg-4 m-t-10 m-b-10' key={league.id}>
                        <Card league={league} />
                    </div>
                )
            }
        </div>
    )
})

export default View