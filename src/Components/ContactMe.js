import { Card, CardDescription, Divider, Icon, Image } from 'semantic-ui-react'
import AboutMeImage from '../img/AboutMe.jpg'
import BackgroundImage from '../img/background.jpg'
import Me from '../img/Me2.png'

import './ContactMe.css'

function ContactMe() {

    return(
        <div className='cardContainer'>
            <Card centered>
                <Card.Content header='Contact Me' textAlign='center'/>
                <div className='profileImg'>
                    <Image src={Me} size='small'/>
                </div>
                <br/><br/>
                <Card.Meta textAlign='center'>Feel free to reach out to me!</Card.Meta>

                <Divider/>
                <div className='iconGroup'>
                    <a href='https://github.com/M-vPham'>
                        <Icon name='github'  size='big'/>
                    </a>
                    <a class="mailto" href="mailto:michellepham000@gmail.com">
                        <Icon name='mail'  size='big'/>
                    </a>
                    <a href='https://www.linkedin.com/in/michelle-pham-11192817a/'>
                        <Icon name='linkedin'  size='big'/>
                    </a>
                    <a href='https://dribbble.com/m-vpham'>
                        <Icon name='dribbble' size='big'/>
                    </a>
                </div>
            </Card>
        </div>

    )
}

export {ContactMe};