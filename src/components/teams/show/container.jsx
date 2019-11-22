import React, { Component } from 'react'
import View from './view';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import { showTeamFlag } from '../../../store/modules/leagues/actions'


let _ = require('lodash')

class Container extends Component {

    constructor(props) {
        super(props);

        this.fetchTeam = this.fetchTeam.bind(this);
    }

    componentDidMount() {
        
        this.fetchTeam()

    }

    fetchTeam() {
        const { match } = this.props;

        this.props.showTeamFlag({ id: match.params.team_id});
    }


    render() {
        return (
            <React.Fragment>
                {
                    !_.isEmpty(this.props.Leagues.team) ? <View team={this.props.Leagues.team} /> : null
                }
            </React.Fragment>
        )
    }
}

export default withRouter(connect(({ Leagues }) => ({ Leagues }),
    dispatch => bindActionCreators({ showTeamFlag }, dispatch))(Container))