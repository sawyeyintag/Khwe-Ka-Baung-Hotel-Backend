import { RoomTypeUpsert } from "@/types/room-type.type";
import { RoomTypeIds } from "../enums/RoomTypeIds";

interface RoomType extends RoomTypeUpsert {
  id: RoomTypeIds;
}

export const roomTypes: RoomType[] = [
  {
    id: RoomTypeIds.SINGLE_BEDS_ROOM,
    name: "Single Beds Room",
    priceWithBreakfast: 83000,
    priceWithoutBreakfast: 65000,
    pax: 2,
  },
  {
    id: RoomTypeIds.DOUBLE_BED_ROOM,
    name: "Double Bed Room",
    priceWithBreakfast: 83000,
    priceWithoutBreakfast: 65000,
    pax: 2,
  },
  {
    id: RoomTypeIds.TRIPLE_BED_ROOM,
    name: "Triple Bed Room",
    priceWithBreakfast: 120000,
    priceWithoutBreakfast: 95000,
    pax: 3,
  },
  {
    id: RoomTypeIds.FAMMILY_ROOM,
    name: "Family Room",
    priceWithBreakfast: 155000,
    priceWithoutBreakfast: 120000,
    pax: 4,
  },
];
