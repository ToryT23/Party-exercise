import { PartyList } from "./PartyList.js"


export const Party = (partyObj) => {
	return `<article class="party-card">
				<h3 class="party-name">${partyObj.Name}</h3>
				<ul>
					<li class="party-details">${partyObj.Date}</li>
					<li class="party-details">Countdown: ${partyObj.Countdown}</li>
					<li class="party-details">Street: ${partyObj.Street}</li>
					<li class="party-details">City: ${partyObj.City}</li>
				</ul>
        	</article>`
}