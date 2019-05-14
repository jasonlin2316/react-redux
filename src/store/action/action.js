export const handleChange=(e)=>{
    return{
    type:'ON_CHANGE',text:e.target.value
    }
}
export const handleSubmit=()=>{
    return{
    type:'ON_SUBMIT'
    }
}
export const handleDelete=(id)=>{
    return{
    type:'ON_DELETE', key:id
    }
}
export const handleEdit=(e)=>{
    return{
        type:'ON_EDIT_INPUT',
        new:e.target.value
    }
}