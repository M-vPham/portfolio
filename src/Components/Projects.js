import { Button, Card, Header, Icon, Image, Label, Reveal } from 'semantic-ui-react'

import Fridge from '../img/fridge.png'
import Graphic from '../img/graphic.png'
import Jik from '../img/djik.png'
import Poker from '../img/poker.png'
import Pokedex from '../img/pokedex.png'
import GoodRead from '../img/goodread.png'
import FundBear from '../img/fundbear.png'
import './Projects.css'


function Projects() {

    return(
        <div>
            <Header as='h2' textAlign='center'>SKILLS</Header>
            <Card.Group centered>
                <Card>
                <Card.Content>
                    <Card.Header textAlign='center'>Languages</Card.Header>
                    <Card.Description textAlign='center'>
                        Javascript <br/>
                        Java <br/>
                        Python <br/>
                        Apex <br/>
                        GraphQL <br/>
                        C/C++ <br/>

                    </Card.Description>
                </Card.Content>
                </Card>
                <Card>
                <Card.Content>
                    <Card.Header textAlign='center'>Frameworks/Libraries</Card.Header>
                    <Card.Description textAlign='center'>
                        React.js<br/>
                        Express.js<br/>
                        Semantic-Ui-React<br/>
                        Node.js<br/>
                        Flask<br/>
                        Mongoose<br/>
                        Apollo<br/>

                    </Card.Description>
                </Card.Content>
                </Card>
                <Card>
                <Card.Content>
                    <Card.Header textAlign='center'>Databases</Card.Header>
                    <Card.Description textAlign='center'>
                        MongoDB<br/>
                        SQL<br/>
                        SOQL<br/>

                    </Card.Description>
                </Card.Content>
                </Card>
            </Card.Group>

            {/* Projects Card Group */}
            <Header as='h2' textAlign='center'>PROJECTS</Header>
            <div className='subHeader'>
                *Ongoing
            </div>
            <Card.Group centered itemsPerRow={3}>
                <div className='cardContainer'>
                    <Card>
                        <Card.Content>
                            <Image src={Graphic} className='projectImg' size='small'/>
                            <Card.Header textAlign='center'>Graphic Design Portfolio*</Card.Header>
                            <Card.Meta textAlign='center'>Adobe Illustrator, Photoshop, InDesign</Card.Meta>
                            <Card.Description textAlign='center'>
                            Portfolio containing illustrations, client logos, and concept logos.
                            <br/><br/>
                            <a href='https://dribbble.com/m-vpham'>Check out my portfolio here!</a>

                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
                <div className='cardContainer'>
                    <Card>
                        <Card.Content>
                            <Image src={Fridge} className='projectImg' size='small'/>
                            <Card.Header textAlign='center'>Mom's Fridge*</Card.Header>
                            <Card.Meta textAlign='center'>React, Semantic-UI, MongoDB, Express, Node, GraphQL, Apollo</Card.Meta>
                            <Card.Description textAlign='center'>
                            Web-app that lets users search for my mother's recipes based on the ingredients they have.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
                <div className='cardContainer'>
                    <Card>
                        <Card.Content>
                            <Image src={Jik} className='projectImg' size='small'/>
                            <Card.Header textAlign='center'>Dijkstra Pathfinder Visualizer</Card.Header>
                            <Card.Meta textAlign='center'>React, Semantic-UI </Card.Meta>
                            <Card.Description textAlign='center'>
                            Web-app that illustrates the the shortest path between two user-selected nodes implementing Dijkstra's algorithm.
                            <br/>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            </Card.Group>
            {/* second row */}
            <Card.Group centered itemsPerRow={3}>
                <div className='cardContainer'>
                    <Card>
                        <Card.Content>
                            <Image src={Poker} className='projectImg' size='small'/>
                            <Card.Header textAlign='center'>Poker Hand Analyser</Card.Header>
                            <Card.Meta textAlign='center'>Haskell</Card.Meta>
                            <Card.Description textAlign='center'>
                            A command-line program that deals out two hands and returns the winning hand.
                            <br/><br/>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
                <div className='cardContainer'>
                    <Card>
                        <Card.Content>
                            <Image src={FundBear} className='projectImg' size='small'/>
                            <Card.Header textAlign='center'>Fundbears</Card.Header>
                            <Card.Meta textAlign='center'>React, Mongoose, MongoDB, Node</Card.Meta>
                            <Card.Description textAlign='center'>
                            Users filter through categories of natural disasters and choose an organization to contribute to. Created during ElleHacks 2020.                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
                <div className='cardContainer'>
                    <Card>
                        <Card.Content>
                            <Image src={GoodRead} className='projectImg' size='small'/>
                            <Card.Header textAlign='center'>DecentRead</Card.Header>
                            <Card.Meta textAlign='center'>React, Semantic-UI, Flask, SQLite</Card.Meta>
                            <Card.Description textAlign='center'>
                            A GoodReads parody site that allows users to write and view others' reviews. Database hosted on PythonAnywhere                            <br/><br/>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            </Card.Group>
            {/* third row */}
            <Card centered>
                <Card.Content>
                    <Image src={Pokedex} className='projectImg' size='small'/>
                    <Card.Header textAlign='center'>Pokedex</Card.Header>
                    <Card.Meta textAlign='center'>React, Semantic-UI, Ramda</Card.Meta>
                    <Card.Description textAlign='center'>
                    Web-app that allows users to scroll through all Generation I Pokémon. Team-builder feature allows the user to select 6 Pokémonto be placed in a team.
                    <a href='https://m-vpham.github.io/pokedexAfterRUHacks/'>Check out the Pokedex here!</a>
                    </Card.Description>
                </Card.Content>

            </Card>
        </div>
    )
}

export {Projects};