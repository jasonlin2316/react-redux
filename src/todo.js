import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/action/action'

class Todo extends React.Component{
    render(){
         const { inputValue,onSubmit, onHandleChange,onDelete,isEditing,onHandleEdit,editValue}=this.props;
         
        return(
            <div>
                <form onSubmit={onSubmit}>
                   <input value={inputValue} placeholder='do it' onChange={onHandleChange}/>
                </form>
                
                <ul>
                    {this.props.todos.map((el)=>
                    <React.Fragment  key={el.id}>
                        <li>{el.value} 
                        <button onClick={() => onDelete(el.id)}>delete </button> 
                        <button onClick={this.props.onEdit}>Edit</button>
                        </li>
                    </React.Fragment>
                        
                    )}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        inputValue:state.inputValue,
        todos:state.todos,
        isEditing:state.isEditing,
        editValue:state.editValue
    }
}
function mapDispatchToProps(dispatch){
    return{
        onHandleChange:(e)=>dispatch(actionCreators.handleChange(e)),
        onSubmit:(e)=>{
            e.preventDefault();
            dispatch(actionCreators.handleSubmit())
        },
        onDelete:(id)=>dispatch(actionCreators.handleDelete(id)),
        onEdit:()=>dispatch({type:'ON_EDIT'}),
        onHandleEdit:(e)=>dispatch(actionCreators.handleEdit(e))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todo)