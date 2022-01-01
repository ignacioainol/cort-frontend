export default function appReducer(state, action) {
    console.log(state, action);

    // return {
    //     escorts: [...state.escorts, action.payload]
    // }


    switch (action.type) {
        case 'ADD_ESCORT':
            return {
                escorts: [...state.escorts, action.payload]
            }
        case 'DELETE_ESCORT':
            return {
                escorts: []
            }
        default:
            break;

    }
}
