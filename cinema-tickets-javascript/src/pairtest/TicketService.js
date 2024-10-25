import TicketTypeRequest from './lib/TicketTypeRequest.js';
import TicketPaymentService from "../thirdparty/paymentgateway/TicketPaymentService.js";
import SeatReservationService from "../thirdparty/seatbooking/SeatReservationService.js";

import TicketRequestValidation from "./validation/TicketRequestValidation.js";
import InvalidPurchaseException from './lib/InvalidPurchaseException.js';
import TicketPriceCalculator from "./calculation/TicketPriceCalculator.js";
import SeatReservationCalculator from "./calculation/SeatReservationCalculator.js";
import UserUtils from "./utils/UserUtils.js";

export default class TicketService {
  /**
   * Should only have private methods other than the one below.
   */

  purchaseTickets(accountId, ...ticketTypeRequests) {
    let ticketTypeRequestArray = [...ticketTypeRequests]

    //Check if the user accountId is valid if not throw exception
    if(UserUtils.prototype.IsUserValid(accountId)) {
      //check number of tickets being purchased
        if (TicketRequestValidation.prototype.CheckNoOfTickets(ticketTypeRequestArray)) {
          //check variation of tickets are valid
          if (!TicketRequestValidation.prototype.CheckTicketVariations(ticketTypeRequestArray)) {
            throw new InvalidPurchaseException("Invalid variation of tickets selected")
          }
        } else {
          throw new InvalidPurchaseException("Invalid Number of tickets selected")
        }

    } else {
      throw new InvalidPurchaseException("User Id is not Valid");
    }

    //If ticket selection is valid then calculate costs and make payment
    TicketPaymentService.prototype.makePayment(accountId,
        TicketPriceCalculator.prototype.CalculateTotalPrice(ticketTypeRequestArray))
    //Assume all thirdparty lib calls return successfully
    SeatReservationService.prototype.reserveSeat(accountId,
        SeatReservationCalculator.prototype.CalculateNoOfSeatReservations(ticketTypeRequestArray))

    console.log("Purchase Successful enjoy your movie!");
  }
}
