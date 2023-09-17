import React from 'react';
import '../css/project.css';
import ProjectCard from './project-card';

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listProjectsApi : [],
        }
        this.callApiProjects = this.callApiProjects.bind(this);
    }

    componentDidMount() {
        
        if (this.getLocalStorage('info')) {

            this.setState({
                listProjectsApi : this.getLocalStorage('info')
            })

        } else {

            this.callApiProjects().then((data) => {
                this.setState({
                    listProjectsApi: data,
                });
                this.apiToLocalStorage('info', data)
            });        
        }
    }

    //SESION STORAGE
    apiToLocalStorage = (key, data) => {
        const jsonData = JSON.stringify(data);
        sessionStorage.setItem(key, jsonData);
    }
    getLocalStorage = (key) => {
        const jsonData = sessionStorage.getItem(key);
        const data = jsonData ? JSON.parse(jsonData) : null;
        return data;
    }

    //API
    callApiProjects = async () => {
        //credentials
        const username = 'pablo';
        const password = 'pa2009ca';
        const credentials = `${username}:${password}`;
        const base64Credentials = btoa(credentials);
    
        const apiUrlSmall = "https://pabloapi.pythonanywhere.com/api/small_project/";
        const apiUrlBig = "https://pabloapi.pythonanywhere.com/api/big_project/";
        try {
            const response = await fetch(apiUrlSmall, {
                method: 'GET',
                headers: {
                    'Authorization': `Basic ${base64Credentials}`,
                    'Content-Type': 'application/json'
                }
            });
            const response2 = await fetch(apiUrlBig, {
                method: 'GET',
                headers: {
                    'Authorization': `Basic ${base64Credentials}`,
                    'Content-Type': 'application/json'
                }
            });
            const dataSmall = await response.json();
            const dataBig = await response2.json();
            let listaProyectos = (dataBig.concat(dataSmall.reverse()));
            //let listaProyectos = (dataBig.concat(dataSmall));
            return listaProyectos;
        } catch(error) {
            console.log(error);
            return []
        }
    } 

    render() {
        const projects = this.state.listProjectsApi.map(project => 
            <ProjectCard obj={project} key={project.name}/>)
        return(
            <div className="sectionProject">
                <h2>Some of my Projects</h2>
                <div className="projects-container">
                    {projects}
                </div>
            </div>
        )
    }
}
export default Project