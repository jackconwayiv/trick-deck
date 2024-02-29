import { TrickCardType } from "../types";
import akhTricks from "./akhTricks";
import coreTricks from "./coreTricks";
import mkmTricks from "./mkmTricks";

interface TricksType {
  [key: string]: TrickCardType[];
}

const trickDeck: TricksType = {
  CORE: coreTricks,
  MKM: mkmTricks,
  AKH: akhTricks,
};

export default trickDeck;
