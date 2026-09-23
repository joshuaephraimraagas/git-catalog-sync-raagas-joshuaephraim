function isValidDay(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) {
    return 0;
  }
  const fee = Math.round(daysLate * ratePerDay);
  return Math.max(Math.min(fee, 20), 1);
}

module.exports = { isValidDay, calculateLateFee };