import React from 'react'
import Logo from '../../assets/images/logo.png'

const Card = (({ team }) => {
    return (
        <div className="card p-5 shadow-sm cursor-pointer">

            <div className='row justify-content-center'>
                <div className='col-auto'>
                    <img src={Logo} alt='logo' />
                </div>
            </div>

            <div className='row p-5'>

                <div className='col-12 m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-signature text-purple"></i>
                    <span>{team.name} ({team.tla})</span>
                </div>

                <div className='col-12  m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-globe-europe text-green"></i>
                    <span>{team.area.name}</span>
                </div>

                <div className='col-12  m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-envelope text-purple"></i>
                    <span href={team.website}>{team.website}</span>
                </div>
            </div>

        </div>
    )
})

export default Card