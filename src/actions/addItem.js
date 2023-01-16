const addItem = (id, task, priority) => { 
            
    return {
        type: "ADD_ITEM", 
        data: { 
            task, 
            priority
        }
    }
}

export default addItem