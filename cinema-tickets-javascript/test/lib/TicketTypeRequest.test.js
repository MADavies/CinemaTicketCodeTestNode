import TicketTypeRequest from "../../src/pairtest/lib/TicketTypeRequest.js";
import {beforeAll, describe, expect, test} from "@jest/globals";

describe("Tests for TicketTypeRequest Functionality", () => {

    let ticketRequest = null

    beforeAll(() => {
        ticketRequest = new TicketTypeRequest('ADULT', 1)
    })

    test("Get number of tickets in request", () => {
        expect(ticketRequest.getNoOfTickets()).toBe(1)
    })

    test("Get Ticket Type for Request", () => {
        expect(ticketRequest.getTicketType()).toBe("ADULT")
    })

    test("Get Ticket Price for Request", () => {
        expect(ticketRequest.getTicketPrice(ticketRequest.getTicketType())).toBe(20)
    })
})