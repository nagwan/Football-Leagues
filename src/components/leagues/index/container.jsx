import React, { Component } from 'react'
import View from './view';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import { fetchLeaguesFlag } from '../../../store/modules/leagues/actions'

class Container extends Component {

    componentDidMount() {
        this.props.fetchLeaguesFlag()
    }

    render() {
        
        return (
            <React.Fragment>
                {
                    this.props.Leagues.leagues.length ? <View data={this.props.Leagues.leagues}  /> : 'There is no data to show'
                }
            </React.Fragment>
        )

    }
}

export default withRouter(connect(({ Leagues }) => ({ Leagues }),
    dispatch => bindActionCreators({ fetchLeaguesFlag }, dispatch))(Container))