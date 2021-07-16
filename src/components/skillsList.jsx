import React, { Component } from 'react';
import TagCloud from '../tagCloud';
class MySkillsList extends Component {
    state = {
        listVisibility: 0
    };
    constructor() {
        super();
        this.buttonChange = this.buttonChange.bind(this);
    }
    buttonChange() {
        console.log('Button Pressed', this.state.listVisibility);
        this.setState({ listVisibility: this.state.listVisibility ^ 1 });
        console.log(this.state.listVisibility);
    }
    buttonTag() {
        if (this.state.listVisibility === 0)
            return 'Click Here To See Magic!';
        else
            return 'Click Here To Revert Back';
    }
    render() {
        const x = this.state.listVisibility;
        return (
            <div>
                <div className="pages" id="two">
                    <div className="container-fluid align-self-center">
                        <div className="row">
                            <div className="col-sm-2" />
                            <div className="col-sm-8">
                                <div className="d-flex justify-content-center">
                                    <div id="mydiv">
                                        02. <a>Languages &amp; Technologies I've Worked With</a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    {
                                        x && (
                                            <div id="normal-list">
                                                <ul
                                                    className="skills-list"
                                                >
                                                    <li>Spring</li>
                                                    <li>Spring Boot</li>
                                                    <li>Node.js</li>
                                                    <li>React.js</li>
                                                    <li>JQuery</li>
                                                    <li>Android</li>
                                                    <li>Bootstrap</li>
                                                    <li>Java</li>
                                                    <li>C++</li>
                                                    <li>Python</li>
                                                    <li>Javascript</li>
                                                    <li>AWS</li>
                                                    <li>REST</li>
                                                    <li>MySQL</li>

                                                </ul>
                                            </div>)}
                                </div>
                                <div className="d-flex flex-column" id="cloud-tag-container">
                                    {
                                        <div className="d-flex justify-content-center">
                                            {
                                                !x && (<TagCloud />)
                                            }
                                        </div>
                                    }
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="button"
                                        className="btn btn-lg"
                                        id="magic-button"
                                        onClick={this.buttonChange}
                                    >
                                        {x ? `I Don't Like Lists!` : `I Like Lists!`}
                                    </button>
                                </div>

                            </div>
                            <div className="col-sm-2" />
                        </div>
                    </div>
                </div>
                <div className="gap-bottom" />
            </div>
        );
    }
}

export default MySkillsList;