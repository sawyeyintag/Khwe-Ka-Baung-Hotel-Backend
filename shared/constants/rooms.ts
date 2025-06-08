import { RoomTypeIds } from "../enums/RoomTypeIds";
import { RoomStatusIds } from "../enums/RoomStatusIds";

interface RoomData {
  roomNumber: string;
  floorNumber: number;
  roomTypeId: RoomTypeIds;
  statusId: RoomStatusIds;
}

export const rooms: RoomData[] = [
  // Twin bedroom (Single Beds Room) - Floor 1
  {
    roomNumber: "101",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "105",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "109",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "111",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },

  // Twin bedroom (Single Beds Room) - Floor 2
  {
    roomNumber: "203",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "207",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "209",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "210",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "211",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },

  // Double bedroom - Floor 1
  {
    roomNumber: "102",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "103",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "106",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "107",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "108",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },

  // Double bedroom - Floor 2
  {
    roomNumber: "201",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "202",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "205",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "206",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
  {
    roomNumber: "208",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },

  // Triple bedroom (one single bed + one double bed)
  {
    roomNumber: "110",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.TRIPLE_BED_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },

  // Family room (four single beds) - Floor 1
  {
    roomNumber: "104",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.FAMMILY_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },

  // Family room (four single beds) - Floor 2
  {
    roomNumber: "204",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.FAMMILY_ROOM,
    statusId: RoomStatusIds.AVAILABLE,
  },
];
