const initialState = {
  list: []
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ROOM": {
      state.list.push({id: Math.random().toString(36), name: action.roomName, devices: []})
      return state;
    }
    case "REMOVE_ROOM": {
      state.list = state.list.filter(room => room.id !== action.id);
      return state;
    }
    case "ADD_DEVICE": {
      state.list = state.list.map(item => {
        if(item.id == action.id) {
          item.devices.push({
            id:  Math.random().toString(36).substring(7),
            title: action.title,
            device: action.device,
            fun: action.fun,
          })
        }
        return item;
      })
      return state;
    }
    default: {
      return state;
    }
  }
};

export default roomReducer;
