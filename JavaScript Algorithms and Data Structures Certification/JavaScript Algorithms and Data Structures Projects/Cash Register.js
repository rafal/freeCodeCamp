function checkCashRegister(price, cash, cid) {
  const priceInCents = price * 100
  const cashInCents = cash * 100
  const cidInCents = cid.map(x => [x[0], Math.round(x[1] * 100)])
  let change = cashInCents - priceInCents
  const totalCashInDrawer = cid.reduce((x, y) => x + y[1] * 100, 0)
  if (totalCashInDrawer < change) return {status: "INSUFFICIENT_FUNDS", change: []}
  if (totalCashInDrawer === change) return {status: "CLOSED", change: cid}

  const centValue = {
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

  console.log(cidInCents)
  let coins = []
  for (let i = cidInCents.findIndex(coin => centValue[coin[0]] > change) - 1; change > 0; i--){
    if (i < 0) break
    const coin = cidInCents[i][0]
    while(centValue[coin] <= change && cidInCents[i][1] / centValue[cid[i][0]]){
      coins.push(coin)
      change -= centValue[coin]
      cidInCents[i][1] -= centValue[coin]
    }
  }
  if (change !== 0) return {status: "INSUFFICIENT_FUNDS", change: []}
  console.log(coins)

  // const changeInCoinsAndBills = coins.reduce((x, y) => {
  //   // if (x.length > 0) console.log(x[x.length - 1][0])
  //   if (x.length > 0 && x[x.length - 1][0] === y) {
  //     // console.log(x[x.length - 1][0] +"===" +y)
  //     x[x.length - 1] = [y, x[x.length - 1][1] + centValue[y] / 100]
  //     return x
  //   } else {
  //     return x.concat([[y, centValue[y] / 100]])
  //   }
  // }, [])
  // const changeInCoinsAndBills = coins.reduce((x, y) => {
  //   if (!x.includes(y)) {
  //     x.push(y)
  //   }
  //   return x
  // }, [])
  const changeInCoinsAndBills = coins.reduce((x, y) => {
    console.log(x.find(z => z[0] === y))
    if (!(x.find(z => z[0] === y))){
      x.push([y, centValue[y] / 100])
    } else {
      x[x.findIndex(z => z[0] === y)] = [y, x[x.findIndex(z => z[0] === y)][1] + centValue[y] / 100]
    }
    return x
  }, [])
  console.log(changeInCoinsAndBills)
  return {status: "OPEN", change: changeInCoinsAndBills}
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])