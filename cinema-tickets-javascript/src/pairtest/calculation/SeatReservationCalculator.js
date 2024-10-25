export default class SeatReservationCalculator {

    CalculateNoOfSeatReservations(ticketRequests) {
        let totalSeats = 0

        for (let i = 0; i < ticketRequests.length; i++) {
            if (ticketRequests[i].getTicketType() !== 'INFANT') {
                totalSeats += ticketRequests[i].getNoOfTickets()
            }
        }

        return totalSeats
    }
}