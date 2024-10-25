import SeatReservationCalculator from "../../src/pairtest/calculation/SeatReservationCalculator.js";
import {describe, expect, test} from "@jest/globals";
import TicketTypeRequest from "../../src/pairtest/lib/TicketTypeRequest.js";

describe("SeatReservationCalculator Tests", () => {

    test("Calculate No. Seats Test", () => {
        let ticketTypeRequest1 = new TicketTypeRequest('ADULT', 2)
        let ticketTypeRequest2 = new TicketTypeRequest('INFANT', 1)
        let ticketRequestArray = [ticketTypeRequest1, ticketTypeRequest2];

        expect(SeatReservationCalculator.prototype.CalculateNoOfSeatReservations(ticketRequestArray)).toEqual(2)

        let ticketTypeRequest3 = new TicketTypeRequest('ADULT', 2)
        let ticketTypeRequest4 = new TicketTypeRequest('CHILD', 1)
        ticketRequestArray.push(ticketTypeRequest3, ticketTypeRequest4)

        expect(SeatReservationCalculator.prototype.CalculateNoOfSeatReservations(ticketRequestArray)).toEqual(5)

    });

});