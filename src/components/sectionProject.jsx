import React from 'react';
import '../css/project.css';
import ProjectCard from './project-card';

class Project extends React.Component {
    constructor(props) {
        super(props)

    }

    listProjects = [
        {
            title : 'JavaScript Cart',
            description : "It's a JavaScript-based shopping cart. The cart includes a feature that allows users to change the currency using an API.",
            tools : 'JavaScript, Scss, html, css, django, js ajax, DRF',
            repository : 'asdasd',
            host : 'asdasda',
            date : '20-02-2000',
        },
        {
            title : 'title 2',
            description : 'aLorasdasdasdasdasdasdasddggconsectetur adipisicing elit. Ac',
            tools : 'orem ipsum dolor sit',
            repository : 'asdasdffgsiouiuouasd',
            host : 'asuiouioudasda',
            date : '23-02-2020',
        },
        {
            title : 'title 3',
            description : 'aLorem ibnnvbnnvbnvbnvetur adipisicing elit. Ac',
            tools : 'orvbnvbnvbnum dolor sit',
            repository : 'asvnvbnmbdasd',
            host : 'asmbnmbmdasda',
            date : '20-02-2010',
        },
        {
            title : 'title 4',
            description : 'aLozxczxcvzxvzxvzectetur adipisicing elit. Ac',
            tools : 'orvzxvzvzcxzxczxczxor sit',
            repository : 'asdasd',
            host : 'asdasda',
            date : '20-02-2020',
        },
    ]

    
    render() {
        const projects = this.listProjects.map(project => 
            <ProjectCard obj={project}/>)
        return(
            <div className="sectionProject">
                <h2>Projects</h2>
                <div className="projects-container">
                    {projects}
                </div>
            </div>
        )
    }
}
export default Project