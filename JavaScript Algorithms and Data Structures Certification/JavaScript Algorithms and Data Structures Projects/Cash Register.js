function checkCashRegister(price, cash, cid) {
  const priceInCents = price * 100
  const cashInCents = cash * 100
  let change = cashInCents - priceInCents
  const totalCashInDrawer = cid.reduce((x, y) => x + y[1] * 100, 0)
  if (totalCashInDrawer < change) return {status: "INSUFFICIENT_FUNDS", change: []}
  if (totalCashInDrawer === change) return {status: "CLOSED", change: [...cid]}
  
  let newCid = [...cid]
  newCid[0][0] = 1
  newCid[1][0] = 5
  newCid[2][0] = 10
  newCid[3][0] = 25
  newCid[4][0] = 100
  newCid[5][0] = 500
  newCid[6][0] = 1000
  newCid[7][0] = 2000
  newCid[8][0] = 10000
  newCid.map(x => x[1] = x[1] / x[0] * 100)

  let coins = []
  for (let i = newCid.findIndex(x => x[0] > change) - 1; i >= 0, change >= 0; i--){
    if (i < 0) break
    if (change === 0) break
    while(newCid[i][0] <= change && newCid[i][1] > 0 && change >= 0){
      coins.push(newCid[i][0])
      change -= newCid[i][0]
      --newCid[i][1]
      if (newCid.every(x => x[1] === 0)) noFunds = true
      if (change === 0) break
    }
  }
  if (change !== 0) return {status: "INSUFFICIENT_FUNDS", change: []}

  let coinsUltimate = []
  let coins10000 = coins.filter(x => x === 10000).length * 100
  if (coins10000 > 0) coinsUltimate.push(["ONE HUNDRED", coins10000])
  let coins2000 = coins.filter(x => x === 2000).length * 20
  if (coins2000 > 0) coinsUltimate.push(["TWENTY", coins2000])
  let coins1000 = coins.filter(x => x === 1000).length * 10
  if (coins1000 > 0) coinsUltimate.push(["TEN", coins1000])
  let coins500 = coins.filter(x => x === 500).length * 5
  if (coins500 > 0) coinsUltimate.push(["FIVE", coins500])
  let coins100 = coins.filter(x => x === 100).length 
  if (coins100 > 0) coinsUltimate.push(["ONE", coins100])
  let coins25 = coins.filter(x => x === 25).length * 0.25
  if (coins25 > 0) coinsUltimate.push(["QUARTER", coins25])
  let coins10 = coins.filter(x => x === 10).length * 0.1
  if (coins10 > 0) coinsUltimate.push(["DIME", coins10])
  let coins5 = coins.filter(x => x === 5).length * 0.05
  if (coins5 > 0) coinsUltimate.push(["NICKEL", coins5])
  let coins1 = coins.filter(x => x === 1).length * 0.01
  if (coins1 > 0) coinsUltimate.push(["PENNY", coins1])

  return {status: "OPEN", change: coinsUltimate}
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  