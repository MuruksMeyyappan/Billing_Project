import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from '../compountes/App';
import { connect } from 'react-redux';
import * as action from '../actions';

const mapStateToProps = state => ({
    
  })
  const mapDispatchToProps = dispatch => ({
    onSubmitRegister: (params) => {
        dispatch(action.onSubmitAction(params));
      },
  })

const Appcontiner = connect(mapStateToProps,
  mapDispatchToProps)(App)

export default Appcontiner