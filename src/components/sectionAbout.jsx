import React from 'react';
import '../css/about.css';
import SkillCard from './skill-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJs, faSass, faCss3Alt, faHtml5, faGithub, faLinux, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

class About extends React.Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return(
            <div className="sectionAbout">
                <h2>My skills</h2>
                <div className='skills-container'>
                    <SkillCard><FontAwesomeIcon icon={faPython} size='2xl'/><p>Python</p></SkillCard>
                    <SkillCard><FontAwesomeIcon icon={faJs} size="2xl" /><p>JavaScript</p></SkillCard>
                    <SkillCard><FontAwesomeIcon icon={faDatabase} size="2xl" /><p>SQL</p></SkillCard>
                    <SkillCard><img src="https://static.djangoproject.com/img/logos/django-logo-positive.svg" alt="Django Logo" className='skill-img'/></SkillCard>
                    <SkillCard><FontAwesomeIcon icon={faReact} size='2xl'/>React</SkillCard>
                    <SkillCard>DRF</SkillCard>
                    <SkillCard><FontAwesomeIcon icon={faGithub} size="2xl" /><p>Git-Github</p></SkillCard>
                    <SkillCard><FontAwesomeIcon icon={faSass} size="2xl"/><p>SASS</p></SkillCard>
                    <SkillCard><FontAwesomeIcon icon={faCss3Alt} size="2xl" /><p>CSS</p></SkillCard>
                    <SkillCard><FontAwesomeIcon icon={faHtml5} size="2xl" /><p>HTML</p></SkillCard>
                    <SkillCard><FontAwesomeIcon icon={faBootstrap} size="2xl" />Bootstrap</SkillCard>
                    <SkillCard><FontAwesomeIcon icon={faLinux} />Linux</SkillCard>
                    <SkillCard><img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Apache_HTTP_server_logo_%282019-present%29.svg" alt="Apache Logo" className='skill-img'/></SkillCard>
                    <SkillCard><img src="https://www.svgrepo.com/show/373924/nginx.svg" alt="Nginx Logo" className='skill-img'/><p>Nginx</p></SkillCard>
                    <SkillCard><img src="https://www.svgrepo.com/show/394296/mysql.svg" alt="MySQL Logo" className='skill-img'/><p>MySQL</p></SkillCard>
                    <SkillCard><img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="MongoDB Logo" className='skill-img'/><p>mongoDB</p></SkillCard>
                    <SkillCard><img src="https://www.svgrepo.com/show/374094/sqlite.svg" alt="SQLite Logo" className='skill-img'/><p>SQLite</p></SkillCard>
                    <SkillCard><img src="https://mariadb.com/wp-content/uploads/2019/11/mariadb-horizontal-black.svg" alt="MariaDB Logo" className='skill-img'/></SkillCard>
                </div>
            </div>
        )
    }
}

export default About