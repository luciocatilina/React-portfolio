import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import Tool from "./card-tools";

class ProjectCard extends React.Component{
    constructor(props) {
        super(props)
    }

    listTools = (this.props.obj.tools).split(', ');

    render() {
        const tools = this.listTools.map(e => 
            <Tool tool={e} key={e}/>)
        return (
            <div className="projects-container__card">
                <h6>{this.props.obj.name}</h6>
                { this.props.obj.image ? 
                <img className="projects-container__card__image" src={this.props.obj.image} alt={`${this.props.obj.name}_img_portfolio_pablo_candia`} /> 
                :
                <div className="projects-container__card__description">
                    <p>{this.props.obj.description}</p>
                </div>
                }
                <div className="projects-container__card__tool-container">
                    {tools}
                </div>
                <div className="projects-container__card__button-container">
                    <a href={this.props.obj.repository} target="__blank" className="projects-container__card__button-container__button_project"><FontAwesomeIcon icon={faGithub} /> Repository</a>
                    {this.props.obj.host ? <a href={this.props.obj.host} target="__blank" className="projects-container__card__button-container__button_project"><FontAwesomeIcon icon={faEarthAmericas} /> Live view</a> : null}
                    
                </div>
            </div>
        )
    }
};

export default ProjectCard;
