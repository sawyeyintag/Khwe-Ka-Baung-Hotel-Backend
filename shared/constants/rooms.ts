import { Room } from "@/generated/client";

import { RoomTypeIds } from "../enums/RoomTypeIds";

export const rooms: Room[] = [
  // Twin bedroom (Single Beds Room) - Floor 1
  {
    roomNumber: "101",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
  },
  {
    roomNumber: "105",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
  },
  {
    roomNumber: "109",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
  },
  {
    roomNumber: "111",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
  },

  // Twin bedroom (Single Beds Room) - Floor 2
  {
    roomNumber: "203",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
  },
  {
    roomNumber: "207",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
  },
  {
    roomNumber: "209",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
  },
  {
    roomNumber: "210",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
  },
  {
    roomNumber: "211",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.SINGLE_BEDS_ROOM,
  },

  // Double bedroom - Floor 1
  {
    roomNumber: "102",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
  },
  {
    roomNumber: "103",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
  },
  {
    roomNumber: "106",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
  },
  {
    roomNumber: "107",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
  },
  {
    roomNumber: "108",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
  },

  // Double bedroom - Floor 2
  {
    roomNumber: "201",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
  },
  {
    roomNumber: "202",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
  },
  {
    roomNumber: "205",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
  },
  {
    roomNumber: "206",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
  },
  {
    roomNumber: "208",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.DOUBLE_BED_ROOM,
  },

  // Triple bedroom (one single bed + one double bed)
  {
    roomNumber: "110",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.TRIPLE_BED_ROOM,
  },

  // Family room (four single beds) - Floor 1
  {
    roomNumber: "104",
    floorNumber: 1,
    roomTypeId: RoomTypeIds.FAMMILY_ROOM,
  },

  // Family room (four single beds) - Floor 2
  {
    roomNumber: "204",
    floorNumber: 2,
    roomTypeId: RoomTypeIds.FAMMILY_ROOM,
  },
];
