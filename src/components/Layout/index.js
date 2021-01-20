import React from 'react';
import Aux from '../../hoc/Auxiliary.component';
import './index.css';

const Layout = (props) => (
    // auxiliary component react
    <Aux>
        <div>Toolbar, SideDrawer , Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default Layout;