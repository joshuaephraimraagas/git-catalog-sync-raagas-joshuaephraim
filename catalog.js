function isValidDay(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  const fee = Math.round(daysLate * ratePerDay);
  return Math.min(fee, 20);
}

module.exports = { isValidDay, calculateLateFee };