import { getParty } from "./PartyData.js";
import { PartyList } from "./PartyList.js";

const allTheParties = getParty()

for (const party of allTheParties) {
    console.log(party)
}

PartyList()