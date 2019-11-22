import React from 'react'
import Logo from '../../assets/images/images.png'

const Card = (({ league }) => {
    return (
        <div className="card p-5 shadow-sm cursor-pointer">

            <div className='row justify-content-center'>
                <div className='col-auto'>
                    <img src={Logo} alt='logo' />
                </div>
            </div>

            <div className='row justify-content-between p-5'>
                <div className='col-12 m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-signature text-purple"></i>
                    <span>{league.name}</span>
                </div>
                <div className='col-12  m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-globe-europe text-green"></i>
                    <span>{league.area.name}</span>
                </div>
        
                <div className='col-12  m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-trophy text-gold"></i>
                    <span>{league.currentSeason ? league.currentSeason.winner == null ? 'NOT YET' : league.currentSeason.winner.name : 'No RUNNING SEASONS' }</span>
                </div>
            </div>

        </div>
    )
})

export default Card