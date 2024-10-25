import TicketTypeRequest from "../lib/TicketTypeRequest.js";

export default class TicketRequestValidation {

    CheckNoOfTickets(ticketRequests) {
        let noOfTickets = 0;
        for (let i = 0; i < ticketRequests.length; i++) {
            noOfTickets += ticketRequests[i].getNoOfTickets()
        }

        if (noOfTickets > 0 && noOfTickets <= 25) {
            return true
        } else {
            return false
        }
    }

    CheckTicketVariations(ticketRequests) {
        //check to see if the requests contain an adult ticket
        if (!this.ContainsTickets(ticketRequests, 'ADULT')) {
            return false
        } else {
            //requests contains atleast one adult ticket time to check other requests
            if (this.ContainsTickets(ticketRequests, 'INFANT')) {
                //check to see if the no. of infant tickets is no more than the no. adult tickets
                if (this.GetNoOfTicketsFromRequest(ticketRequests, 'INFANT') >
                            this.GetNoOfTicketsFromRequest(ticketRequests, 'ADULT')) {
                    return false;
                }
            }

            //Don't need to worry about Child tickets as that is covered by checking the no. of seats and that there is at least
            //one adult ticket
            return true
        }
    }

    ContainsTickets(ticketRequests, ticketType) {
        for (let i=0; i < ticketRequests.length; i++) {
            if (ticketRequests[i].getTicketType() === ticketType) {
                return true
            }
        }

        return false
    }

    GetNoOfTicketsFromRequest(ticketRequests, ticketType) {
        let noOfTickets = 0

        for (let i = 0; i < ticketRequests.length; i++) {
            if (ticketRequests[i].getTicketType() === ticketType) {
                noOfTickets += ticketRequests[i].getNoOfTickets()
            }
        }

        return noOfTickets
    }
}
