import React from 'react'

const Card = (({ img, data }) => {
    return (
        <div className="card p-5 shadow-sm cursor-pointer">

            <div className='row justify-content-center'>
                <div className='col-auto'>
                    <img src={img} alt='logo' />
                </div>
            </div>

            <div className='row p-5'>

                <div className='col-12 m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-signature text-purple"></i>
                    <span>{data.name}</span>
                </div>

                <div className='col-12  m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-globe-europe text-green"></i>
                    <span>{data.position}</span>
                </div>

                <div className='col-12  m-t-5 m-b-5'>
                    <i className="m-r-5 fas fa-check-double text-purple"></i>
                    <span>{data.extraInfo}</span>
                </div>
            </div>

        </div>
    )
})

export default Card