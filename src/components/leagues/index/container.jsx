import React, { Component } from 'react'
import View from './view';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLeaguesFlag } from '../../../store/modules/leagues/actions'

class Container extends Component {

    componentDidMount() {
        this.props.fetchLeaguesFlag()
    }

    render() {

        return (
            <React.Fragment>
                {
                    this.props.Leagues.leagues.length ? <View leagues={this.props.Leagues.leagues} /> : 'There is no data to show'
                }
            </React.Fragment>
        )

    }
}

export default connect(({ Leagues }) => ({ Leagues }),
    dispatch => bindActionCreators({ fetchLeaguesFlag }, dispatch))(Container)