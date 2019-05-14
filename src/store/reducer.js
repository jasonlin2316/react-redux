

import {createStore} from 'redux'


const initialState={
    inputValue:'',
    todos:[],
    isEditing:false,
    editValue:''
}

const reducer=(state=initialState,action)=>{
   switch(action.type){
       case'ON_CHANGE':
       return Object.assign({},state,{
           inputValue:action.text,
           
       });
       case'ON_SUBMIT':
       return Object.assign({},state,{
           todos:state.todos.concat({id:Math.random(),value:state.inputValue}),
           inputValue:''
       });
       case'ON_DELETE':
       return Object.assign({},state,{
           todos:state.todos.filter((el)=>el.id!==action.key),
           isEditing:false
       });
       case'ON_EDIT':
       return Object.assign({},state,{
           isEditing:true 
       });
       case'ON_EDIT_INPUT':
       return Object.assign({},state,{
           

       })

   default:
   return state
}
}
const store=createStore(reducer)
export default store



