
let initialState={
    friendItem: [
        {
            id: 1,
            name: "Kastiel",
            avatar: "data:image/jpeg;base64,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"
        },
        {
            id: 2,
            name: "Sam",
            avatar: "data:image/jpeg;base64,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"
        },
        {
            id: 3,
            name: "Din",
            avatar: "data:image/jpeg;base64,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"
        }
    ]
}

const friendReducer=(state=initialState,action)=>{
    return state
}

export default friendReducer