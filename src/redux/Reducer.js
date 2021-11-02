const defaultState = {
    city: {
        lokasi: "KOTA JAKARTA",
        id: 1301,
    },
};

const Reducer = (state = defaultState, action) => {
    if (action.type == "CHANGE_CITY") {
        return {
            ...state,
            city: action.city,
        };
    }

    return state;
};

export default Reducer;
