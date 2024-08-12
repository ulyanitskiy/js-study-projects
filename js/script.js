'use strict';

let yearOfBirth = +prompt('Enter year of your birth');
if (isNaN(yearOfBirth)) {
    alert('You have entered an incorrect year of birth');
} else if (yearOfBirth === 0) {
    alert('It is a pity that you did not want to enter year of your birth');
} else {
    let city = prompt('Enter the city you live in');
    if (city === null) {
        alert('It is a pity that you did not want to enter the city you live in');
    } else {
        let sport = prompt('Enter your favorite sport');
        if (sport === null) {
            alert('It is a pity that you did not want to enter your favorite sport');
        } else {
            const currentYear = new Date().getFullYear();
            const age = currentYear - yearOfBirth;

            city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

            let cityMessage;
            switch (city) {
                case 'Kyiv':
                    cityMessage = 'You live in the capital of Ukraine';
                    break;
                case 'Washington':
                    cityMessage = 'You live in the capital of United States';
                    break;
                case 'London':
                    cityMessage = 'You live in the capital of United Kingdom';
                    break;
                default:
                    cityMessage = `You live in ${city}`;
                    break;
            }

            let sportMessage;
            switch (sport) {
                case 'Swimming':
                    sportMessage = 'Cool! Do you want to become Michael Phelps?';
                    break;
                case 'Football':
                    sportMessage = 'Cool! Do you want to become Cristiano Ronaldo?';
                    break;
                case 'Tennis':
                    sportMessage = 'Cool! Do you want to become Rafael Nadal?';
                    break;
                default:
                    sportMessage = `Your favorite sport is ${sport.toLowerCase()}`;
                    break;
            }

            alert(`${age}\n${cityMessage}\n${sportMessage}`);
        }
    }
}



