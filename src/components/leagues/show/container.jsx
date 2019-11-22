import React, { Component } from 'react'
import View from './view';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import { showLeagueFlag } from '../../../store/modules/leagues/actions'

let _ = require('lodash')

class Container extends Component {

    constructor(props) {
        super(props);

        this.fetchLeague = this.fetchLeague.bind(this);
    }

    componentDidMount() {
        this.fetchLeague()
    }

    fetchLeague() {
        const { match } = this.props;

        this.props.showLeagueFlag({ id: match.params.id});
    }


    render() {
        return (
            <React.Fragment>
                {
                    !_.isEmpty(this.props.Leagues.league) ? <View teams={this.props.Leagues.teams} league={this.props.Leagues.league} /> : null
                }
            </React.Fragment>
        )
    }
}

export default withRouter(connect(({ Leagues }) => ({ Leagues }),
    dispatch => bindActionCreators({ showLeagueFlag }, dispatch))(Container)) 