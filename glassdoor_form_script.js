let el = document.getElementById('job_application_disability_status')
el.value = 2
let vet = document.getElementById('job_application_veteran_status');
vet.value = 1
let gender = document.getElementById('job_application_gender');
gender.value = 1
let hispanic = document.getElementById('job_application_hispanic_ethnicity')
hispanic.value = 'No';
let race = document.getElementById('job_application_race')
race.value = 5

// that was for green house

// below is for lever

let linked = document.getElementsByName('urls[LinkedIn]')
linked[0].value = 'https://www.linkedin.com/in/chris-atwood-b07640160/';

let git = document.getElementsByName('urls[GitHub]');
git[0].value = 'https://github.com/NJCA88';

let portfolio = document.getElementsByName('urls[Portfolio]');
portfolio[0].value = 'https://fervent-chandrasekhar-26dff0.netlify.com/';


let gen = document.getElementsByName('eeo[gender]');
gen[0].value = 'Male'
let race = document.getElementsByName('eeo[race]');
race[0].value = 'White (Not Hispanic or Latino)';
let vet = document.getElementsByName('eeo[veteran]');
vet[0].value = "I am not a veteran"
