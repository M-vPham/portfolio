import { Card, Icon, Image, Label, Reveal } from 'semantic-ui-react'
import AboutMeImage from '../img/AboutMe.jpg'
import BackgroundImage from '../img/background.jpg'
import './AboutMe.css'

function AboutMe() {

    const aboutMeDescription = `
        I'm currently attending Ryerson University for Computer Science with a minor in Mathematics.
        (Anticipated 2023!) I'm a fullstack developer but I'm slowly encroaching into software development territory.
        I choose to code in Javascript, Java, and Python with a dabble in and C and Swift. The thing I love about coding is being able to continuously learn.
        While I'm not coding(because unlike popular belief, we do have some semblance of life outside code),
        I also do freelance designing on the side with skills in Adobe Illustrator, Photoshop, and InDesign.
        I am primarily commisioned for logo and branding development. When I have time to myself (especially during this qurantine), I like to practice my drums or play boardgames.
        I'm currently obsessed with the boardgame Scythe. (There's something about looking in the eyes of your opponent as you obliterate their mech units)
        `;
    const currentlyDescription = `
        I recently finished an 8-month co-op at a startup called ServiceEcho. Right now, I'm learning how to use GraphQL and Apollo in my fullstack projects while improving my knowledge of Javascript.
        Extra-curricular wise, I'm often a speaker at Women In Computer Science events alongside with being a panelist for coop events at Ryerson. I'm a member of the UofT Healing Sounds of Music Choir as a Soprano II where we go to sing at retirement homes and patients at Princess Margaret Hospital.
        From my experience at past hackathons(ElleHacks, RUHacks, Bonfire...) and educational institutions, I've learned how to build relationships with others in a team setting and hope to bring these skills to a company during a 2021 Summer Co-op.
        `;

    return(
        <div className='mainCard'>
            <Label ribbon>Hover over me for more information!</Label>
            <Reveal animated='move'>
                    <Reveal.Content visible>
                    <div className='Parent'>
                        <div className='image1'>
                            <Image src={BackgroundImage} size='huge'/>
                        </div>
                        <div className='image2'>
                            <Image src={AboutMeImage} size='medium' circular/>
                        </div>
                    </div>

                    </Reveal.Content>
                    <Reveal.Content hidden>
                    <div className='revealCardContainer'>
                        <Card centered fluid>
                            <Card.Content header='ABOUT ME' textAlign='center'/>
                                <Card.Content description={aboutMeDescription} textAlign='center'/>
                                <Card.Content header='CURRENTLY' description={currentlyDescription} textAlign='center'/>
                                <Card.Content extra>
                                <Icon name='female' /> 20 year old, She/Her
                                <br/>
                                <Icon name='building' /> 2023 Bachelor of Science(Honours) at Ryerson University. Computer Science Major/Mathematics Minor.
                            </Card.Content>
                        </Card>
                    </div>
                    </Reveal.Content>
            </Reveal>
        </div>

    )
}

export {AboutMe};