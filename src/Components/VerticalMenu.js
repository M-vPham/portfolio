import React, {useEffect} from 'react'
import { Grid, Icon, Image, Header, Menu, Segment, Sidebar} from 'semantic-ui-react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import {MainComponent} from './Main.js'

import ProfilePic from '../img/Me2.png'
import Resume from '../img/computerScienceResumeDec2020.pdf'
import './VerticalMenu.css'

function VerticalMenu(props){
    const [visible, setVisible] = React.useState(false)

    const history = useHistory();
    const onAboutMeClick = () => history.push('/portfolio/');
    const onProjectsClick = () => history.push('/Projects');
    const onResumeClick = () => history.push('/Resume');
    const onContactMeClick = () => history.push('/ContactMe');


    useEffect(() => {
        setVisible(props.toggleMenu);
    });

    return(
        <Grid>
        <Grid.Column>
        <Sidebar.Pushable as={Segment}>
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
          <Menu.Item
            name='ProfilePic'
          >
            <Image src={ProfilePic}/>
            <Header as='h2' inverted>Michelle Pham</Header>
            Software Developer in Training
          </Menu.Item>
            <Menu.Item
            name='About Me'
            onClick={onAboutMeClick}
            >
                About Me
                <Icon name='question circle outline' size='massive' />
            </Menu.Item>
            <Menu.Item
            name='Projects'
            onClick={onProjectsClick}
            >
            Projects
            <Icon name='folder open outline'/>
            </Menu.Item>
            <a href={Resume} target='_blank'>
                <Menu.Item
                    name='Resume'
                    >
                    Resumé
                    <Icon name='file alternate outline'/>
                </Menu.Item>
            </a>
            <Menu.Item
            name='Contact Me'
            onClick={onContactMeClick}
            >
            Contact Me
            <Icon name='paper plane outline'/>
            </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
        {/* where i'll hold the component holding the mian menu lol  */}
            <MainComponent/>
        </Sidebar.Pusher>
        </Sidebar.Pushable>
        </Grid.Column>
        </Grid>
    );
};

export {VerticalMenu};
