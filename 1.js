var instructions = ['R4', 'R3', 'R5', 'L3', 'L5', 'R2', 'L2', 'R5', 'L2', 'R5', 'R5', 'R5', 'R1', 'R3', 'L2', 'L2', 'L1', 'R5', 'L3', 'R1', 'L2', 'R1', 'L3', 'L5', 'L1', 'R3', 'L4', 'R2', 'R4', 'L3', 'L1', 'R4', 'L4', 'R3', 'L5', 'L3', 'R188', 'R4', 'L1', 'R48', 'L5', 'R4', 'R71', 'R3', 'L2', 'R188', 'L3', 'R2', 'L3', 'R3', 'L5', 'L1', 'R1', 'L2', 'L4', 'L2', 'R5', 'L3', 'R3', 'R3', 'R4', 'L3', 'L4', 'R5', 'L4', 'L4', 'R3', 'R4', 'L4', 'R1', 'L3', 'L1', 'L1', 'R4', 'R1', 'L4', 'R1', 'L1', 'L3', 'R2', 'L2', 'R2', 'L1', 'R5', 'R3', 'R4', 'L5', 'R2', 'R5', 'L5', 'R1', 'R2', 'L1', 'L3', 'R3', 'R1', 'R3', 'L4', 'R4', 'L4', 'L1', 'R1', 'L2', 'L2', 'L4', 'R1', 'L3', 'R4', 'L2', 'R3', 'L1', 'L5', 'R4', 'R5', 'R2', 'R5', 'R1', 'R5', 'R1', 'R3', 'L3', 'L2', 'L2', 'L5', 'R2', 'L2', 'R5', 'R5', 'L2', 'R3', 'L5', 'R5', 'L2', 'R4', 'R2', 'L1', 'R3', 'L5', 'R3', 'R2', 'R5', 'L1', 'R3', 'L2', 'R2', 'R1'];

var test1 = ['R2','L3'];
var test2 = ['R2','R2','R2'];
var test3 = ['R5','L5','R5','R3'];

var sum = 0;

//add or subtract the number of steps from the sum.
var add_subtract = function ( sum, same, steps ) {
  if ( same ){
    sum -= steps;
  } else {
    sum += steps;
  }

  if ( sum < 0 ) {
    sum *= -1;
  }

  return sum;
};

//loop of instructions to get direction and steps for add_subtract

var walk_the_path = function ( arr, sum ){
  var same = false;
  var previous = "N";
  for ( var i = 0; i < arr.length; i++ ){
    var direction = arr[i].match(/[rl]/i);
    var steps = parseInt(arr[i].match(/\d{1,3}/g));
    
    if ( previous == direction[0] ){
      same = true;
    } else {
      same = false;
    }

    console.log('Previous Direction: ' + previous + ', Current Direction: ' + direction[0] + ', Steps: ' + steps + ', Same: ' + same);

    sum = add_subtract ( sum, same, steps );
    previous = direction;
  }

  console.log( sum );
};