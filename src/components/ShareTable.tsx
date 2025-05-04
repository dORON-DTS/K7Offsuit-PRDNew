const sortPlayers = (a: Player, b: Player) => {
  // First sort by balance (high to low)
  if (b.balance !== a.balance) {
    return b.balance - a.balance;
  }
  
  // If balance is equal, sort by total buy-in (high to low)
  const aTotalBuyIn = a.buyIns.reduce((sum, buyIn) => sum + buyIn.amount, 0);
  const bTotalBuyIn = b.buyIns.reduce((sum, buyIn) => sum + buyIn.amount, 0);
  if (bTotalBuyIn !== aTotalBuyIn) {
    return bTotalBuyIn - aTotalBuyIn;
  }
  
  // If total buy-in is equal, sort by total cash-out (high to low)
  const aTotalCashOut = a.cashOuts.reduce((sum, cashOut) => sum + cashOut.amount, 0);
  const bTotalCashOut = b.cashOuts.reduce((sum, cashOut) => sum + cashOut.amount, 0);
  if (bTotalCashOut !== aTotalCashOut) {
    return bTotalCashOut - aTotalCashOut;
  }
  
  // If all else is equal, sort by player name (A-Z)
  return a.name.localeCompare(b.name);
};

export {}; 