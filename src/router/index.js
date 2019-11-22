import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './routes';
import NotFound from '../pages/404';
import Navbar from '../components/partials/navbar'


const ManiRouter = (() => {
    return (
        <div id='root'>
            <BrowserRouter>
                <Navbar />
                <div className='container m-b-30'>
                    <Switch>
                        {
                            Routes.map((route, index) => (

                                <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                            ))

                        }
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
})

export default ManiRouter
