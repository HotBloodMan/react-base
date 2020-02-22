const defaultState = {
    list:[
        '我是第一条数据',
        '我是第二条数据'  
    ]
}

export default(state = defaultState,action) => {
    if(action.type === "toChild2") {
        let inputValue = JSON.parse(JSON.stringify(state))
        inputValue.value = action.value
        return inputValue; 
    }
    return state 
} 