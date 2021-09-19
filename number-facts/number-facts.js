const BASE_URL = 'http://numbersapi.com/';
const numbers = [1, 42, 54, 67, 96];

function makeNumStr(numArray) {
  let numStr = '';
  for (let i = 0; i < numArray.length - 1; i++) {
    numStr += `${numArray[i]},`;
  }
  numStr += `${numArray[numArray.length - 1]}`;
  return numStr;
}

axios
  .get(`${BASE_URL}${makeNumStr(numbers)}`)
  .then((res) => {
    for (let key of Object.keys(res.data)) {
      $('#num-list').append(`<li>${res.data[key]}</li>`);
    }
  })
  .catch((err) => console.log(err));

const FAVE_NUM = 42;
let fourNumberPromises = [];
for (i = 1; i < 5; i++) {
  fourNumberPromises.push(axios.get(`${BASE_URL}${FAVE_NUM}?json`));
}

Promise.all(fourNumberPromises).then((faveNumFacts) => {
  for (let res of faveNumFacts) {
    $('#fave-num-facts').append(`<li>${res.data.text}</li>`);
  }
});
