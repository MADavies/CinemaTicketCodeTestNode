import {describe, expect, test} from "@jest/globals";
import TicketService from "../src/pairtest/TicketService.js";
import TicketTypeRequest from "../src/pairtest/lib/TicketTypeRequest.js";

describe("Ticket Service Blackbox tests", () => {
    test("TicketService ticket purchase success", () => {
        const ticketService = new TicketService()
        const ticketRequest = new TicketTypeRequest('ADULT', 2);
        expect(() => {ticketService.purchaseTickets(11111, ticketRequest)}).not.toThrow()
    });

    test("Ticket service throws invalid ticket error", () => {
        const ticketService = new TicketService()
        const ticketRequest = new TicketTypeRequest('INFANT', 2);
        expect(() => {ticketService.purchaseTickets(11111, ticketRequest)})
            .toThrow("Invalid variation of tickets selected")

    });

    test("Ticket Service throws invalid No. tickets error", () => {
        const ticketService = new TicketService()
        let ticketRequest = new TicketTypeRequest('ADULT', 21)
        expect(() => {ticketService.purchaseTickets(11111, ticketRequest)})
            .toThrow("Invalid Number of tickets selected")

        ticketRequest = new TicketTypeRequest('ADULT', 0)
        expect(() => {ticketService.purchaseTickets(11111, ticketRequest)})
            .toThrow("Invalid Number of tickets selected")
    });

    test("ticket service throws invalid user error", () => {
        const ticketService = new TicketService()
        let ticketRequest = new TicketTypeRequest('ADULT', 2)
        expect(() => {ticketService.purchaseTickets("MARC", ticketRequest)})
            .toThrow("User Id is not Valid")
    });

});