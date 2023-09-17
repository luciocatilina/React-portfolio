import React from 'react';
import About from "./sectionAbout";
import Project from "./sectionProject";
import '../css/menu.css'


class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            section : 1,
        };
        
        this.handleSection = this.handleSection.bind(this);
    }
    handleSection(n) {
        this.setState({
            section : n
        })
      }

    

    render() {
        return(
            <div className='menu'>
                <div className='menu__container-button'>
                    <button 
                    onClick={() => this.handleSection(1)}
                    className={`menu__container-button__button ${this.state.section === 1 ? 'selected' : ''}`.trimEnd()}>
                        Projects
                    </button>
                    <button 
                    onClick={() => this.handleSection(2)}
                    className={`menu__container-button__button ${this.state.section === 2 ? 'selected' : ''}`.trimEnd()}>
                        Skills
                    </button>
                </div>
                <div className='menu__container-data'>
                    
                    {(this.state.section ===1) ? <Project/> : <About/>}
                </div>
            </div>
            
        )
    }
}

export default Menu

