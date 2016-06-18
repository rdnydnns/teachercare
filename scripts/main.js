var oppDay = 'January 25th';
var today = moment().format('MMMM Do');
var response = document.getElementById('response');

if (today === oppDay) {
  response.innerHTML = '<em>NO</em>';
} else {
  console.log('Seriously, today actually is Opposite Day.');
}
