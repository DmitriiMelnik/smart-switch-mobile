export const addRoom = (roomName) => ({
  type: "ADD_ROOM",
  roomName: roomName
});

export const removeRoom = (id) => ({
  type: "REMOVE_ROOM",
  id: id
})

export const addDevice = (roomId, title, device, fun) => ({
  type: "ADD_DEVICE",
  id: roomId,
  title,
  device,
  fun
})