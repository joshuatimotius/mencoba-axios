import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as action from '../redux/action';
import { connect } from 'react-redux';

const LoaderHOC = (WrappedComponent) => {
    class Loading extends Component {
        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
    const mapStateToProps = (state) => {
        return {
            data: state.data
        }
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            action: bindActionCreators(action, dispatch)
        };
    };
    
    return connect(mapStateToProps, mapDispatchToProps)(Loading);
}

export default LoaderHOC;