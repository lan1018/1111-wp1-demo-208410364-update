export const reducer_64 = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContext: 'item added'
        }
    }
    if(action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false,
            modalContext: ''
        }
    }
};