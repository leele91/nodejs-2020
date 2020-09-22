let e009 = () => {
    let p = 1000;
    for(var a = 0; a < p / 3; a++) {
      for(var b = a; b < (p-a)/2; b++) {
        let c = p - a - b;
        if(c*c==a*a+b*b) {
          console.log(a*b*c);
          return;
        }
      }
    }
  }
  
  e009()