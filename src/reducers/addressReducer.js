const initialState = {
  address: {
    name: 'Md Amir Gauhar',
    contact: "76440xxxx0",
    street: "HSR Layout",
    city: "Banglore",
    state: "Karnataka",
    pincode: "560102"
  }
}

const addressReducer = (state, { type, payload }) => {
  switch (type) {
    case "CHANGE_ADDRESS":
      return {
        ...state,
        address: {...payload}
      }
    default:
      return state
  }
}

export { initialState, addressReducer }