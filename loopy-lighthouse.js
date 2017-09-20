function loopyLighthouse(range, multiples, words) {
  var counter = range[0];

  while(counter <= range[1]) {
    if(counter % multiples[0] === 0 && counter % multiples[1] === 0) {
      console.log(words[0] + words[1]);
      counter++;
    } else if(counter % multiples[1] === 0) {
      console.log(words[1]);
      counter++;
    } else if(counter % multiples[0] === 0) {
      console.log(words[0]);
      counter++;
    } else {
      console.log(counter);
      counter++;
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);