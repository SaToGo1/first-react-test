import React, { Component } from 'react'

class Overview extends Component {
    constructor(props) {
        super(props)

        this.displayTask = this.displayTask.bind(this);
    }
    
    generateUID(object){
        return object + Math.random().toString(16).slice(2)
    }

    displayTask(){

        return (
            this.props.taskArray.map( (task) => {
                return <p key={this.generateUID()}>{task}</p>
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