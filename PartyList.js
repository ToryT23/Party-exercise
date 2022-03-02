import { getParty } from "./PartyData.js"
import { Party } from "./Party.js"


export const PartyList = () => {

    // Get a reference to the location on the DOM you want to display the list of parties
    const contentElement = document.querySelector(".partyList")
    // Get the party array
    const parties = getParty()
    // Declare a variable to hold on to the party HTML representation
	let partyHTMLRepresentation = "";
    // Loop over the array of parties
	for (const oneParty of parties) {
		partyHTMLRepresentation += Party(oneParty);
	}
    // Set the dom equal to the variable containing the party html representations
    contentElement.innerHTML += `
        ${partyHTMLRepresentation}
    `
}