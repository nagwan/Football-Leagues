import React from 'react'
import Avatar from '../../assets/images/avatar.jpg'

const Card = (({ player }) => {
    return (
        <div className="card p-5 shadow-sm">

            <div className='row justify-content-center'>
                <div className='col-auto'>
                    <img src={Avatar} alt='logo' />
                </div>
            </div>

            <div className='row p-5'>

                <div className='col-12 m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-signature text-purple"></i>
                    <span>{player.name}</span>
                </div>

                <div className='col-12  m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-globe-europe text-green"></i>
                    <span>{player.position} ({player.shirtNumber})</span>
                </div>

                <div className='col-12  m-t-5 m-b-5'>
                    <i className="m-r-5 fa-globe-europe text-green"></i>
                    <span>{player.nationality}</span>
                </div>
                
            </div>

        </div>
    )
})

export default Card