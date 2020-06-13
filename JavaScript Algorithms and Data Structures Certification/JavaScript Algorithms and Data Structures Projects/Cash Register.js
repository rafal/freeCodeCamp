function checkCashRegister(price, cash, cid) {
  const priceInCents = price * 100
  const cashInCents = cash * 100
  let change = cashInCents - priceInCents
  const totalCashInDrawer = cid.reduce((x, y) => x + y[1] * 100, 0)
  if (totalCashInDrawer < change) return {status: "INSUFFICIENT_FUNDS", change: []}
  if (totalCashInDrawer === change) return {status: "CLOSED", change: [...cid]}

  const lookup = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    'ONE HUNDRED': 10000
  }

  cid.map(x => x[1] = x[1] / lookup[x[0]] * 100)


  let coins = []
  for (let i = cid.findIndex(x => lookup[x[0]] > change) - 1; i >= 0, change >= 0; i--){
    if (i < 0) break
    if (change === 0) break
    while(lookup[cid[i][0]] <= change && cid[i][1] > 0 && change >= 0){
      coins.push(cid[i][0])
      change -= lookup[cid[i][0]]
      --cid[i][1]
      if (change === 0) break
    }
  }
  if (change !== 0) return {status: "INSUFFICIENT_FUNDS", change: []}

  const changeInCoinsAndBills = coins.reduce((x, y) => {
    // if (x.length > 0) console.log(x[x.length - 1][0])
    if (x.length > 0 && x[x.length - 1][0] === y) {
      // console.log(x[x.length - 1][0] +"===" +y)
      x[x.length - 1] = [y, x[x.length - 1][1] + lookup[y] / 100]
      return x
    } else {
      return x.concat([[y, lookup[y] / 100]])
    }
  }, [])
  console.log(changeInCoinsAndBills)
  return {status: "OPEN", change: changeInCoinsAndBills}
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 