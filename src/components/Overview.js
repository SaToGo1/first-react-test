import React, { Component } from 'react'
import './componentsStyle/Overview.css';

class Overview extends Component {
    constructor(props) {
        super(props)

        this.displayTask = this.displayTask.bind(this);
    }
    
    generateUID(object){
        let uid = object + Math.random().toString(16).slice(2)
        console.log(uid);
        return uid;
    }

    displayTask(){

        return (
            this.props.taskArray.map( (task) => {
                return (
                <div className='taskCard'>
                    <p className="task" key={this.generateUID(task)}>{task}</p>
                </div>
                )
            })
        )
    }

    render() {
        return (
            <div className='taskList'>
                {this.displayTask()}
            </div>
        )
    }
}

export default Overview;