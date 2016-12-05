var instructions = ['R4', 'R3', 'R5', 'L3', 'L5', 'R2', 'L2', 'R5', 'L2', 'R5', 'R5', 'R5', 'R1', 'R3', 'L2', 'L2', 'L1', 'R5', 'L3', 'R1', 'L2', 'R1', 'L3', 'L5', 'L1', 'R3', 'L4', 'R2', 'R4', 'L3', 'L1', 'R4', 'L4', 'R3', 'L5', 'L3', 'R188', 'R4', 'L1', 'R48', 'L5', 'R4', 'R71', 'R3', 'L2', 'R188', 'L3', 'R2', 'L3', 'R3', 'L5', 'L1', 'R1', 'L2', 'L4', 'L2', 'R5', 'L3', 'R3', 'R3', 'R4', 'L3', 'L4', 'R5', 'L4', 'L4', 'R3', 'R4', 'L4', 'R1', 'L3', 'L1', 'L1', 'R4', 'R1', 'L4', 'R1', 'L1', 'L3', 'R2', 'L2', 'R2', 'L1', 'R5', 'R3', 'R4', 'L5', 'R2', 'R5', 'L5', 'R1', 'R2', 'L1', 'L3', 'R3', 'R1', 'R3', 'L4', 'R4', 'L4', 'L1', 'R1', 'L2', 'L2', 'L4', 'R1', 'L3', 'R4', 'L2', 'R3', 'L1', 'L5', 'R4', 'R5', 'R2', 'R5', 'R1', 'R5', 'R1', 'R3', 'L3', 'L2', 'L2', 'L5', 'R2', 'L2', 'R5', 'R5', 'L2', 'R3', 'L5', 'R5', 'L2', 'R4', 'R2', 'L1', 'R3', 'L5', 'R3', 'R2', 'R5', 'L1', 'R3', 'L2', 'R2', 'R1'];

var test1 = ['R2','L3'];
var test2 = ['R2','R2','R2'];
var test3 = ['R5','L5','R5','R3'];
var test4 = ['R8','R4','R4','R8'];

var sum = {
  ns : 0,
  ew : 0
};

var visited_coords = [];

//figure out cardinal direction
var set_cardinal_direction = function ( direction, previous_cardinal ) {
  if ( previous_cardinal === 'N') {
    // console.log( 'N' );
    switch ( direction ) {
      case 'R':
        return 'E';
      case 'L':
        return 'W';
    }
  }
  else if ( previous_cardinal === 'E' ) {
    // console.log( 'E' );
    switch ( direction ) {
      case 'R':
        return 'S';
      case 'L':
        return 'N';
    }
  }
  else if ( previous_cardinal === 'S' ) {
    // console.log( 'S' );
    switch ( direction ) {
      case 'R':
        return 'W';
      case 'L':
        return 'E';
    }
  }
  else if ( previous_cardinal === 'W' ) {
    // console.log( 'W' );
    switch ( direction ) {
      case 'R':
        return 'N';
      case 'L':
        return 'S';
    }
  }
};

//add or subtract the number of steps from the sum.
var add_subtract = function ( sum, cardinal, steps ) {
  if ( cardinal === 'N' ){
    sum.ns += steps;
  } else if ( cardinal === 'S' ) {
    sum.ns -= steps;
  } else if ( cardinal === 'E' ){
    sum.ew += steps;
  } else if ( cardinal === 'W' ) {
    sum.ew -= steps;
  }
  return sum;
};

//loop of instructions to get direction and steps for add_subtract

var walk_the_path = function ( arr, sum ){
  var same = false;
  var previous_cardinal = 'N';
  var cardinal;
  for ( var i = 0; i < arr.length; i++ ){
    var direction = arr[i].match(/[rl]/i);
    var steps = parseInt(arr[i].match(/\d{1,3}/g));

    cardinal = set_cardinal_direction( direction[0], previous_cardinal );

    //console.log( cardinal );
    //console.log('Previous Direction: ' + previous_cardinal + ', Current Direction: ' + direction[0] + ', Steps: ' + steps + ', Same: ' + cardinal);

    sum = add_subtract ( sum, cardinal, steps );
    add_coord( sum );
    previous_cardinal = cardinal;
  }
  final_sum = Math.abs(sum.ns) + Math.abs(sum.ew);
  //console.log ('NS is ' + sum.ns);
  //console.log ('EW is ' + sum.ew);
  //console.log( final_sum );
  //console.log( visited_coords );
};

//Build an array of visited coordinates
var add_coord = function( sum ){
  var coord = [sum.ns, sum.ew];

  var coord_check = function( xs ){
    return function( ys ){
      return ys[0] == xs[0] && ys[1] == xs[1];
    };
  };
  console.log( visited_coords.find( coord_check ) );
/*  if ( visited_coords.find(coord_check) === undefined ){
    visited_coords.push( coord );
  } else {
    var coord_sum = coord[0] + coord[1];
    console.log( 'Visited twice: ' + coord + ', Distance: ' + coord_sum );
  }*/
};