import React from 'react';
import { Button, Menu } from 'semantic-ui-react'
import './Header.css'


function Header(props) {

    return(
        <Menu inverted>
            <Menu.Item
                onClick={props.toggleMenu}
            >
                Menu
            </Menu.Item>
        </Menu>
    )
}

export {Header};