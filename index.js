const uncompress = (s) => {
    const numbers = '0123456789';
    let result = '';
    let i = 0;
    let j = 0;
    
    while (j < s.length) {
      if (numbers.includes(s[j])){
        j += 1;
      } else {
       const num = Number(s.slice(i, j));
        for (let count = 0; count < num; count += 1){
          result += s[j];
        }
        j += 1;
        i = j;
      }
    }
    
    return result;
  };

  console.log(uncompress('2c9f6x2l'))