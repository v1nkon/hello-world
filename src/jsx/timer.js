import React,{Component} from 'react'
class Timer extends Component{
    constructor(...props){
        super(...props)
        this.state = {
            seconds:0
        }
    }
    stick(){
        this.setState(
            prevState => ({
                seconds:prevState.seconds+1
            })
        )
    }
    componentDidMount(){
        this.timer = setInterval(()=>this.stick(),1000)
    }
    componentWillUnMount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <div>
                seconds:{this.state.seconds}
            </div>
        )
    }
}
export default Timer