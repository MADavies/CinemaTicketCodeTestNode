import TicketPriceCalculator from "../../src/pairtest/calculation/TicketPriceCalculator.js";
import {describe, expect, test} from "@jest/globals";
import TicketTypeRequest from "../../src/pairtest/lib/TicketTypeRequest.js";

describe("Ticket Price Calculator Tests", () => {

    test("Ticket Price Calculation Test", () => {
        let ticketRequest1 = new TicketTypeRequest('ADULT', 5)
        let ticketRequest2 = new TicketTypeRequest('CHILD', 7)
        let ticketRequest3 = new TicketTypeRequest('INFANT', 5)
        let TicketRequestArray = [ticketRequest1, ticketRequest2, ticketRequest3];

        expect(TicketPriceCalculator.prototype.CalculateTotalPrice(TicketRequestArray)).toEqual(170)
    })
});