import React, { Component } from 'react';
import Aux from '../Auxiliary.component';
import './index.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <main className='Content mt-4'>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;