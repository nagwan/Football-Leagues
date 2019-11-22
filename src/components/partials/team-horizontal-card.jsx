import React from 'react'
import Logo from '../../assets/images/team.png'

const HorizontalCard = (({ team }) => {
    return (
        <div className="card card-horizontal p-5 ">

            <div className='row justify-content-center justify-content-md-start align-items-center'>
                <div className='col-12 col-md-2 m-t-5 m-b-5'>
                    <img src={Logo} alt='logo' />
                </div>

                <div className='col-12 col-md-10 m-t-5 m-b-5 d-flex flex-wrap'>

                    <div className='col-12 col-lg-6'>
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
                            <span>{team.address}</span>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6'>
                        <div className='col-12 m-t-5 m-b-5'>
                            <i className="m-r-5 fas fa-signature text-purple"></i>
                            <span>{team.phone}</span>
                        </div>

                        <div className='col-12  m-t-5 m-b-5'>
                            <i className="m-r-5 fas fa-globe-europe text-green"></i>
                            <span>{team.email}</span>
                        </div>

                        <div className='col-12  m-t-5 m-b-5'>
                            <i className="m-r-5 fas fa-envelope text-purple"></i>
                            <span href={team.website}>{team.website}</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
})

export default HorizontalCard