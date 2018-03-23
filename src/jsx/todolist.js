import React,{Component} from 'react'

class TodoList extends Component{
    constructor(...props){
        super(...props)
        this.state={
            items:[],
            text:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e){
        this.setState({
            text:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        if(this.state.text.length<=0){
            return
        }
        const item = {
            text:this.state.text,
            id:new Date()
        }
        this.setState(
            prevState =>({
                items:prevState.items.concat(item),
                text:''
            })
        )
    }

    render(){
        return(
            <div class="outer">
                <h1>  this is todoList </h1>
                <List items={this.state.items} />
                <form onSubmit = {this.handleSubmit}>
                    <input  id="input" onChange={this.handleChange} value={this.state.text}  />

                    <button>add{this.state.items.length}  </button> 
                </form>  
            </div>
        )
    }

}
class List extends Component{
    render(){
        return(
            <ul>
                {
                    this.props.items.map(
                        item=>(
                            <li key="{item.id}">
                                {item.text}
                            </li>
                        )
                    )
                }
            </ul>
        )
    }
}
export default TodoList