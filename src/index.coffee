# Metric
attometers = (n) -> femtometers(n / 10)
femtometers = (n) -> picometers(n / 10)
picometers = (n) -> nanometers(n / 10)
nanometers = (n) -> micrometers(n / 10)
micrometers = (n) -> millimeters(n / 10)
millimeters = (n) -> n
centimeters = (n) -> millimeters(n * 10)
decimeters = (n) -> centimeters(n * 10)
meters = (n) -> decimeters(n * 10)
decameters = (n) -> meters(n * 10)
hectometers = (n) -> decameters(n * 10)
kilometers = (n) -> hectometers(n * 10)
megameters = (n) -> kilometers(n * 10)
gigameters = (n) -> megameters(n * 10)
terameters = (n) -> gigameters(n * 10)
petameters = (n) -> terameters(n * 10)
exameters = (n) -> petameters(n * 10)

# Imperial
points = (n) -> micrometers(n * 352.777778)
picas = (n) -> points(n * 12)
inches = (n) -> picas(n * 6)
feets = (n) -> inches(n * 12)
yards = (n) -> feets(n * 3)
miles = (n) -> feets(n * 5280)
links = (n) -> inches(n * 7.92)
surveyFeets = (n) -> meters(n * 0.30480061)
rods = (n) -> links(n * 25)
chains = (n) -> rods(n * 4)
furlongs = (n) -> chains(n * 10)
surveyMiles = (n) -> furlongs(n * 8)
leagues = (n) -> miles(n * 3)
fathoms = (n) -> yards(n * 2)
cables = (n) -> fathoms(n * 120)
nauticalMiles = (n) -> kilometers(n * 1.852)


inFunctions = {
  attometers: (n) -> femtometers(n / 10)
  femtometers: (n) -> picometers(n / 10)
  picometers: (n) -> nanometers(n / 10)
  nanometers: (n) -> micrometers(n / 10)
  micrometers: (n) -> millimeters(n / 10)
  millimeters: (n) -> n
  centimeters: (n) -> millimeters(n / 10)
  decimeters: (n) -> centimeters(n / 10)
  meters: (n) -> decimeters(n / 10)
  decameters: (n) -> meters(n / 10)
  hectometers: (n) -> decameters(n / 10)
  kilometers: (n) -> hectometers(n / 10)
  megameters: (n) -> kilometers(n / 10)
  gigameters: (n) -> megameters(n / 10)
  terameters: (n) -> gigameters(n / 10)
  petameters: (n) -> terameters(n / 10)
  exameters: (n) -> petameters(n / 10)
  points: (n) -> micrometers(n / 352.777778)
  picas: (n) -> points(n / 12)
  inches: (n) -> picas(n / 6)
  feets: (n) -> inches(n / 12)
  yards: (n) -> feets(n / 3)
  miles: (n) -> feets(n / 5280)
  links: (n) -> inches(n / 7.92)
  surveyFeets: (n) -> meters(n / 0.30480061)
  rods: (n) -> links(n / 25)
  chains: (n) -> rods(n / 4)
  furlongs: (n) -> chains(n / 10)
  surveyMiles: (n) -> furlongs(n / 8)
  leagues: (n) -> miles(n / 3)
  fathoms: (n) -> yards(n / 2)
  cables: (n) -> fathoms(n / 120)
  nauticalMiles: (n) -> kilometers(n / 1.852)
}


module.exports = {
  in: inFunctions

  attometers
  femtometers
  picometers
  nanometers
  micrometers
  millimeters
  centimeters
  decimeters
  meters
  decameters
  hectometers
  kilometers
  megameters
  gigameters
  terameters
  petameters
  exameters

  points
  picas
  inches
  feets
  yards
  miles
  links
  surveyFeets
  rods
  chains
  furlongs
  surveyMiles
  leagues
  fathoms
  cables
  nauticalMiles

  statuteMiles: surveyMiles
}