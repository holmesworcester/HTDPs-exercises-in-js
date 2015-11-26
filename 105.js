// Constants

const SPIDER_VOL = (.5 * .4 * .2 * 1.5); // the top-end volume of a spider plus the extra room it needs to be happy
const ELEPHANT_VOL = (8 * 12 * 4 * 2); // ditto for elephants
const ARMADILLO_VOL = (3 * 1 * 1.2 * 2); // ditto for armadillos
const BOA_WIGGLE = 2; // boas need wiggle room too. this is the proportion of cage to their own volume they need to wiggle. must be > 1

// A Spider is a Number in (0, 8)
// interpretation, the number of legs our spider has.

// A Boa Constrictor is a structure (make-boa length girth) where length is the length of the boa constrictor
// and girth is the diameter of its thickest cross section, measured in feet.

 // what do I do here? I don't need to define anything upfront right?

const LONG_BOA = {
  name: "boa",
  length: 30,
  girth: 1
}

const SHORT_BOA = {
  name: "boa",
  length: 4,
  girth: .3
}

// An Animal is one of:
// - Spider
// - BoaConstrictor
// - "elephant"
// - "armadillo"

// Animal, Number -> Boolean
// Returns true if an Animal a will fit in a cage of Volume cage, assuming that cages are reasonably well-suited
// to the dimensions of the animal, and that animals need a "wiggle-room" factor of WIGGLE-ROOM.
var fits = function (animal, cageSize) {

// Number -> Boolean
// given cage size as a constant, and the volume of the animal, returns true if it fits
// otherwise returns false
  var fitsForCage = function (volume) {
    return (volume < cageSize);
  }

  if (typeof animal == "number") {
    return fitsForCage(SPIDER_VOL);
  }

  else if (animal == "elephant") {
    return fitsForCage(ELEPHANT_VOL);    
  }

  else if (animal == "armadillo") {
    return fitsForCage(ARMADILLO_VOL);
  }

  else if (typeof animal == "object") {
    return fitsForCage(animal.length * animal.girth * BOA_WIGGLE);
  }

  return true;
}

// cages that are an exact fit (must be strictly greater)

if (fits ("elephant", ELEPHANT_VOL) != false) throw "fail";
if (fits (8, SPIDER_VOL) != false) throw "fail";
if (fits ("armadillo", ARMADILLO_VOL) != false) throw "fail";
if (fits (0, SPIDER_VOL) != false) throw "fail";
if (fits (LONG_BOA, 30 * BOA_WIGGLE) != false) throw "fail";

// bigger cages

if (fits ("elephant", ELEPHANT_VOL + 1) != true) throw "fail";
if (fits ("armadillo", ARMADILLO_VOL + 1) != true) throw "fail";
if (fits (LONG_BOA, 30 * BOA_WIGGLE * 1.2) != true) throw "fail"; 
