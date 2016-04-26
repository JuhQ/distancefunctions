(function() {
  var attometers, cables, centimeters, chains, decameters, decimeters, exameters, fathoms, feets, femtometers, furlongs, gigameters, hectometers, inFunctions, inches, kilometers, leagues, links, megameters, meters, micrometers, miles, millimeters, nanometers, nauticalMiles, petameters, picas, picometers, points, rods, surveyFeets, surveyMiles, terameters, yards;

  attometers = function(n) {
    return femtometers(n / 10);
  };

  femtometers = function(n) {
    return picometers(n / 10);
  };

  picometers = function(n) {
    return nanometers(n / 10);
  };

  nanometers = function(n) {
    return micrometers(n / 10);
  };

  micrometers = function(n) {
    return millimeters(n / 10);
  };

  millimeters = function(n) {
    return n;
  };

  centimeters = function(n) {
    return millimeters(n * 10);
  };

  decimeters = function(n) {
    return centimeters(n * 10);
  };

  meters = function(n) {
    return decimeters(n * 10);
  };

  decameters = function(n) {
    return meters(n * 10);
  };

  hectometers = function(n) {
    return decameters(n * 10);
  };

  kilometers = function(n) {
    return hectometers(n * 10);
  };

  megameters = function(n) {
    return kilometers(n * 10);
  };

  gigameters = function(n) {
    return megameters(n * 10);
  };

  terameters = function(n) {
    return gigameters(n * 10);
  };

  petameters = function(n) {
    return terameters(n * 10);
  };

  exameters = function(n) {
    return petameters(n * 10);
  };

  points = function(n) {
    return micrometers(n * 352.777778);
  };

  picas = function(n) {
    return points(n * 12);
  };

  inches = function(n) {
    return picas(n * 6);
  };

  feets = function(n) {
    return inches(n * 12);
  };

  yards = function(n) {
    return feets(n * 3);
  };

  miles = function(n) {
    return feets(n * 5280);
  };

  links = function(n) {
    return inches(n * 7.92);
  };

  surveyFeets = function(n) {
    return meters(n * 0.30480061);
  };

  rods = function(n) {
    return links(n * 25);
  };

  chains = function(n) {
    return rods(n * 4);
  };

  furlongs = function(n) {
    return chains(n * 10);
  };

  surveyMiles = function(n) {
    return furlongs(n * 8);
  };

  leagues = function(n) {
    return miles(n * 3);
  };

  fathoms = function(n) {
    return yards(n * 2);
  };

  cables = function(n) {
    return fathoms(n * 120);
  };

  nauticalMiles = function(n) {
    return kilometers(n * 1.852);
  };

  inFunctions = {
    attometers: function(n) {
      return femtometers(n / 10);
    },
    femtometers: function(n) {
      return picometers(n / 10);
    },
    picometers: function(n) {
      return nanometers(n / 10);
    },
    nanometers: function(n) {
      return micrometers(n / 10);
    },
    micrometers: function(n) {
      return millimeters(n / 10);
    },
    millimeters: function(n) {
      return n;
    },
    centimeters: function(n) {
      return millimeters(n / 10);
    },
    decimeters: function(n) {
      return centimeters(n / 10);
    },
    meters: function(n) {
      return decimeters(n / 10);
    },
    decameters: function(n) {
      return meters(n / 10);
    },
    hectometers: function(n) {
      return decameters(n / 10);
    },
    kilometers: function(n) {
      return hectometers(n / 10);
    },
    megameters: function(n) {
      return kilometers(n / 10);
    },
    gigameters: function(n) {
      return megameters(n / 10);
    },
    terameters: function(n) {
      return gigameters(n / 10);
    },
    petameters: function(n) {
      return terameters(n / 10);
    },
    exameters: function(n) {
      return petameters(n / 10);
    },
    points: function(n) {
      return micrometers(n / 352.777778);
    },
    picas: function(n) {
      return points(n / 12);
    },
    inches: function(n) {
      return picas(n / 6);
    },
    feets: function(n) {
      return inches(n / 12);
    },
    yards: function(n) {
      return feets(n / 3);
    },
    miles: function(n) {
      return feets(n / 5280);
    },
    links: function(n) {
      return inches(n / 7.92);
    },
    surveyFeets: function(n) {
      return meters(n / 0.30480061);
    },
    rods: function(n) {
      return links(n / 25);
    },
    chains: function(n) {
      return rods(n / 4);
    },
    furlongs: function(n) {
      return chains(n / 10);
    },
    surveyMiles: function(n) {
      return furlongs(n / 8);
    },
    leagues: function(n) {
      return miles(n / 3);
    },
    fathoms: function(n) {
      return yards(n / 2);
    },
    cables: function(n) {
      return fathoms(n / 120);
    },
    nauticalMiles: function(n) {
      return kilometers(n / 1.852);
    }
  };

  module.exports = {
    "in": inFunctions,
    attometers: attometers,
    femtometers: femtometers,
    picometers: picometers,
    nanometers: nanometers,
    micrometers: micrometers,
    millimeters: millimeters,
    centimeters: centimeters,
    decimeters: decimeters,
    meters: meters,
    decameters: decameters,
    hectometers: hectometers,
    kilometers: kilometers,
    megameters: megameters,
    gigameters: gigameters,
    terameters: terameters,
    petameters: petameters,
    exameters: exameters,
    points: points,
    picas: picas,
    inches: inches,
    feets: feets,
    yards: yards,
    miles: miles,
    links: links,
    surveyFeets: surveyFeets,
    rods: rods,
    chains: chains,
    furlongs: furlongs,
    surveyMiles: surveyMiles,
    leagues: leagues,
    fathoms: fathoms,
    cables: cables,
    nauticalMiles: nauticalMiles,
    statuteMiles: surveyMiles
  };

}).call(this);
