const isGood = (soldierType) => {
  // TODO: return `true` if the soldierType is Good.
  // Hint: Hobbits, Elves, Dwarves and Eagles are Good
  // Build an array of all the different good soliders
  return const goodSoldiers = ["Hobbits", "Elves", "Dwarves", "Eagles"];
  // check array to see of soldier type is in it, return true
  goodSoldiers.includes(soldierType)
};

const buildSoldierObject = (battlefield) => {
  // TODO: Given a battlefield (String), return an object of forces.
};

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
};

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
