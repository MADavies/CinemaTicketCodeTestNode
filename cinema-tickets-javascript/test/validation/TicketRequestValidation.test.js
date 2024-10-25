import TicketRequestValidation from "../../src/pairtest/validation/TicketRequestValidation.js";
import {describe, expect, test} from "@jest/globals";
import TicketTypeRequest from "../../src/pairtest/lib/TicketTypeRequest.js";

describe("Ticket Validation Tests", () => {
    test("Test No. of tickets in requests", () => {
        let ticketRequest = new TicketTypeRequest('ADULT', 1)
        let ticketRequests = [ticketRequest]
        expect(TicketRequestValidation.prototype.CheckNoOfTickets(ticketRequests)).toBe(true)

        let ticketRequest2 = new TicketTypeRequest('CHILD', 25)
        ticketRequests.push(ticketRequest2)
        expect(TicketRequestValidation.prototype.CheckNoOfTickets(ticketRequests)).toBe(false)
    })

    test("Test Ticket Variations in requests", () => {
        //any valid purchase needs to have an adult ticket so any amount of requests without an adult ticket will fail
        let ticketRequest = new TicketTypeRequest('CHILD', 1)
        let ticketRequests = [ticketRequest]

        expect(TicketRequestValidation.prototype.CheckTicketVariations(ticketRequests)).toBe(false)

        let ticketRequest2 = new TicketTypeRequest('INFANT', 1)
        ticketRequests.push(ticketRequest2)

        expect(TicketRequestValidation.prototype.CheckTicketVariations(ticketRequests)).toBe(false)

        let ticketRequest3 = new TicketTypeRequest('ADULT', 1)
        ticketRequests.push(ticketRequest3)

        expect(TicketRequestValidation.prototype.CheckTicketVariations(ticketRequests)).toBe(true)

        // if there are more infant tickets than adults the request will fail
        let ticketRequest4 = new TicketTypeRequest('INFANT', 1)
        ticketRequests.push(ticketRequest4)

        expect(TicketRequestValidation.prototype.CheckTicketVariations(ticketRequests)).toBe(false)
    })

    test("Test request contains tickets", () => {
        let ticketRequest = new TicketTypeRequest('ADULT', 1);
        let ticketRequests = [ticketRequest]

        expect(TicketRequestValidation.prototype.ContainsTickets(ticketRequests, 'ADULT')).toBe(true)
        expect(TicketRequestValidation.prototype.ContainsTickets(ticketRequests, 'CHILD')).toBe(false)
        expect(TicketRequestValidation.prototype.ContainsTickets(ticketRequests, 'INFANT')).toBe(false)

        let ticketRequest2 = new TicketTypeRequest('CHILD', 1);
        ticketRequests.push(ticketRequest2)

        expect(TicketRequestValidation.prototype.ContainsTickets(ticketRequests, 'ADULT')).toBe(true)
        expect(TicketRequestValidation.prototype.ContainsTickets(ticketRequests, 'CHILD')).toBe(true)
        expect(TicketRequestValidation.prototype.ContainsTickets(ticketRequests, 'INFANT')).toBe(false)

        let ticketRequest3 = new TicketTypeRequest('INFANT', 1)
        ticketRequests.push(ticketRequest3)

        expect(TicketRequestValidation.prototype.ContainsTickets(ticketRequests, 'ADULT')).toBe(true)
        expect(TicketRequestValidation.prototype.ContainsTickets(ticketRequests, 'CHILD')).toBe(true)
        expect(TicketRequestValidation.prototype.ContainsTickets(ticketRequests, 'INFANT')).toBe(true)

    })

    test("Test requests contain specified number of tickets", () => {
        let ticketRequest = new TicketTypeRequest('ADULT', 13);
        let ticketRequests = [ticketRequest]

        expect(TicketRequestValidation.prototype.GetNoOfTicketsFromRequest(ticketRequests, 'ADULT')).toBe(13)

        let ticketRequest2 = new TicketTypeRequest('ADULT', 2)
        ticketRequests.push(ticketRequest2)

        expect(TicketRequestValidation.prototype.GetNoOfTicketsFromRequest(ticketRequests, 'ADULT')).toBe(15)
    })
});
