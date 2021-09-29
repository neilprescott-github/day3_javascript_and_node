 for(let a = 100; a <= 200; a++) {
    console.log(`${a}`);
 }

 a = 100;
 do  {
     if(a%2) {
         console.log(` - `)
     }
     else {
        console.log(` * `)
     }
     a++;
 } while (a <= 200)