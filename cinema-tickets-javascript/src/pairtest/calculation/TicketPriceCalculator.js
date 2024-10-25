export default class TicketPriceCalculator {

    CalculateTotalPrice(ticketRequests) {
        let totalCost = 0

        for (let i = 0; i < ticketRequests.length; i++) {
            if (ticketRequests[i].getTicketType() !== 'INFANT') {
                totalCost += (ticketRequests[i].getNoOfTickets() * ticketRequests[i].getTicketPrice(ticketRequests[i].getTicketType()))
            }
        }

        return totalCost
    }
}
