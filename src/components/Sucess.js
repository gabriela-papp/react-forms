import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'





export class Sucess extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Confirm User Data' />
                    <h1>Thank You For Your Submition</h1>
                    <p>You Will Get An Email With Further Instructions.</p>
                </React.Fragment >
            </MuiThemeProvider >
        )
    }
}


export default Sucess
