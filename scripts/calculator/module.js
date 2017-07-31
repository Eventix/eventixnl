module.exports = function() {

  require('jquery');

  if ($('body').is('.page-calculator')) {

    init = function() {

      var costsDb = {
        eventix: {
          service: 1,
          transaction: 0,
          transactionType: 'rate',
          currency: 'eur'
        },
        ticketscript: {
          service: 0.41,
          transaction: 0.035,
          transactionType: 'rate',
          currency: 'eur'
        },
        eventbrite: {
          service: 0.41,
          transaction: 0.04,
          transactionType: 'fixed',
          currency: 'gbp'
        }
      };

      $('#calculator-container input, #calculator-container select').change(function() {
        // Step 2
        if (!$('#calc-step1')[0].checkValidity || $('#calc-step1')[0].checkValidity()) {
          $('#calc-step2-container').slideDown();
        }
        // Step 3
        if (!$('#calc-step2')[0].checkValidity || $('#calc-step2')[0].checkValidity()) {
          $('#calc-step3-container').slideDown();
        }
        // Cost type
        if ($('#idealCostTypeRate').is(':checked')) {
          $('#idealCostFixedContainer').hide();
          $('#idealCostRateContainer').show();
        } else {
          $('#idealCostFixedContainer').show();
          $('#idealCostRateContainer').hide();
        }
        // Step 4 + result
        if (!$('#calc-step3')[0].checkValidity || $('#calc-step3')[0].checkValidity()) {
          if ($('#idealCostTypeRate').is(':checked')) {
            if (!$('#idealCostRate').val()) {
              $('#calc-step4-container').slideDown();
              $('#calc-result-container').slideDown();
            }
          } else {
            if (!$('#idealCostFixed').val()) {
              $('#calc-step4-container').slideDown();
              $('#calc-result-container').slideDown();
            }
          }
        }
      });
    };

    calculateResults = function() {
      // Retrieve variables
      var custServiceCosts = $("#serviceCost").val();
      var provServiceCosts = $("#providerServiceCost").val();
      var averageTicketPrice = $("#averageTicketPrice").val();
      var provTransactionRate = $("#providerTransactionCost").val();
      var ticketsPerYear = $("#ticketsPerYear").val();

      // Calculate kickback service costs external
      var kbServiceCostsTicket = custServiceCosts - provServiceCosts;
      var kbTransactionCostTicket = (provServiceCosts+uk)*averageTicketPrice-(provTransactionRate*averageTicketPrice);
      var kbTotal = (kbServiceCostsTicket + kbTransactionCostTicket) * ticketsPerYear;

      // Calculate kickback service costs eventix
      var kbServiceCostsTicketEt = custServiceCosts - costsDb.eventix.service;
      var kbTransactionCostTicketEt = (custServiceCosts+uk)*averageTicketPrice-(provTransactionRate*averageTicketPrice);
      var kbTotalEt = (kbServiceCostsTicketEt + kbTransactionCostTicketEt) * ticketsPerYear;
    };

    init();

  }

};
