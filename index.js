//Write your code here
// Create a variable named attendee and assign it an object with the following properties:
// attendeeID (string) with the value T001
// name (a string) with the value Alice Smith
// event (a string) with the value JavaScript Conference
// ticketType (a streing) with the value VIP
// ticketPrice (a number) with the value 150.00

let attendee = {
  attendeeId: 'T001',
  name: 'Alice Smith',
  event: 'JavaScript Conference',
  ticketType: 'VIP',
  ticketPrice: 150.00
};

// Create a function named logAttendeeName that takes the attendee object as a parameter 
// and logs the name.

function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Create a function names logTicketPrice that takes the attendee object as a parameter
// and logs the ticketPrice.

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Create a function named updateTicketType that takes the attendee
// object and a new ticket type as parameters, 
// and updates the ticketType property of the attendee object.

function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;}

  // Create a function named updateTicketPrice that takes the attendee
// object and a new ticket price as parameters,
// and updates the ticketPrice property of the attendee object.

function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

// Create a function named removeEventProperty that takes the attendee
// object as a parameter and removes the event property.

function removeEventProperty(attendee) {
  delete attendee.event;
}

// Create a function named addCheckedInProperty that takes the attendee
// object as a parameter and adds a new property called checkedIn with the value true.

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true; 
}



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};