let today = new Date();
let time = today.getHours();
let greet = '';

if (time > 0 && time <= 12) {
  greet = 'Good Morning, Young Padawan.';
} else if (time > 12 && time <= 18) {
  greet = 'The Force Is Strong This Afternoon.';
} else if (time > 18 && time <= 24) {
  greet = 'Good Evening, Jedi Master.';
} else {
  greet = 'Something In The Force Has Gone Wrong...';
}

let show = document.getElementById('message');
show.textContent = greet;
