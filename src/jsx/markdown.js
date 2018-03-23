import Remarkable from 'remarkable'
import React,{Component} from 'react'
class MarkdownEditor extends Component{
    constructor(...props){
        super(...props)
        this.state={
            text:'hello world'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    getRawMarkup(){
        const remark = new Remarkable()
        return {__html:remark.render(this.state.text)}
    }

    handleChange(e){
        this.setState({
            text:e.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>markDown</h3>
                <textarea 
                    defaultValue={this.state.text} 
                    onChange={this.handleChange}
                    
                />

                <div
                     className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />

            </div>
        )
    }
}
export default MarkdownEditor