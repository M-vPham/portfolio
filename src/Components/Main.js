import { Button, Segment } from 'semantic-ui-react'
import {AboutMe} from './AboutMe.js'
import {Projects} from './Projects.js'
import {ContactMe} from './ContactMe.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import './Main.css'

function MainComponent() {

    return(
        <div>
            <Segment
                style={{ minHeight: 1000,  padding: '1em 0em'}}
                className='ui segment background'
            >
                <Switch>
                    <Route path='/portfolio/' component={AboutMe} exact />
                    <Route path='/Projects' component={Projects} />
                    <Route path='/ContactMe' component={ContactMe}/>
                </Switch>
            </Segment>
        </div>

    )
}

export {MainComponent};