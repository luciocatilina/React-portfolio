import React from "react";

class SkillCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="skills-container__card">
                {this.props.children}
            </div>
        )
    }
}

export default SkillCard