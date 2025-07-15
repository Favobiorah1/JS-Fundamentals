<<<<<<< HEAD
#!/usr/bin/node

const num = Number(process.argv[2]);

function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));
=======

>>>>>>> 98bd162b8e4789a255b3edb5213a7faf521cadd3
