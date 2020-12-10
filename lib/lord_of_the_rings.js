const isGood = soldierType => ["Hobbits", "Elves", "Dwarves", "Eagles"].includes(soldierType);

const buildSoldierObject = (battlefield) => {
  const soldiers = {};
  const soldierString = battlefield.split(",");
  soldierString.forEach((soldier) => {
    const type = soldier.split(":")[0];
    const count = parseInt(soldier.split(":")[1], 10);
    soldiers[type] = count;
  });
  return soldiers;
};

const whoWinsTheWar = (battlefield) => {
  if (!battlefield) {
    return "Tie";
  };
  const soldiers = buildSoldierObject(battlefield);
  let sum = 0;

  Object.keys(soldiers).forEach((soldierType) => {
    if (isGood(soldierType)) {
      sum = sum + soldiers[soldierType];
    } else {
      sum = sum - soldiers[soldierType];
    }
  });

  if (sum === 0) {
    return "Tie";
  }

  if (sum > 0) {
    return "Good";
  } else {
    return "Evil";
  }
};

// console.log(whoWinsTheWar("Hobbits:4,Dwarves:1,Elves:1,Goblins:100,Uruk Hai:1"));

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
