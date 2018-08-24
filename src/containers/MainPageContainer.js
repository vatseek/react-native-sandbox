import React from 'react';
import { connect } from 'react-redux';
import Page from '../components/MainPage'
import testActions from '../actions/testActions';

const mapStateToProps = (state) => {
    const {data = {}} = state;
    return {
        data
    };
};

const mapDispatchToProps = (dispatch) => ({
    test: () => {
        dispatch(testActions.test());
    },
});

function mergeProps(stateProps, dispatchProps) {
    return {
        ...stateProps,
        ...dispatchProps,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(Page);
