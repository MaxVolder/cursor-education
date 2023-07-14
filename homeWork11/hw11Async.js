function getRandomChinese(length) {
    const promise = new Promise(async (resolve, reject) => {
      let result = '';
      while (length--) {
        const sign = Date.now() % 100000;
        result += String.fromCharCode(sign);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      resolve(result);
    });
    return promise;
  };
let promise = getRandomChinese(4);
promise.then(result => {
console.log(result);
});