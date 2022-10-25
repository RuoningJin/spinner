const spinningCursor = (inputTime, inputCursor) => {
  for (const cursor of inputCursor) {
    setTimeout(() => {
      process.stdout.write(`\r${cursor}   `);
    }, inputTime);
    inputTime += 200;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, inputTime);
};


const cursorFull = '|/-\\|/-\\|';
let inputTime = 100;
spinningCursor(inputTime, cursorFull);


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);

// setTimeout(() => {
//   process.stdout.write('\n');
// }, 1700);