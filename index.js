const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

const sortedRobots = robots.map(function(robot){
  var team;
  knownDecepticons.includes(robot.name) ? team = 'decepticon' : team = 'autobot';
  return Object.assign({}, {name: robot.name, alliance: team});
})

const coloredZebraStripes = zebraStripes.map(function(stripe, index, array){
  var hue;
  for (i=0; i < zebraStripes.length; i++){
    if (i % 2 == 0){
      hue = 'black';
    }
    else {
      hue = 'white';
    }
  }
  return Object.assign({}, {width: stripe.width, color: hue})
})
