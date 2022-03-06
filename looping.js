let breakpoint = 9;

for (let i = 1; i <= breakpoint; i++) {
  console.log("perulangan ke", i);
}
while (true) {
  console.log("perulangan ke", breakpoint);
  if (breakpoint == 7) {
    break;
  }
  breakpoint++;
}
