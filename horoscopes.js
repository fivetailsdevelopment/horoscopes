/* Arrays for the four components of the horoscope */
const starSign = ['Ares', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const retrograde = ['moon', 'Mercury', 'Venus', 'Saturn', 'Jupiter'];
const willExperience = ['rapturous joy', 'unquenchable curiosity', 'boundless energy', 'endless hunger', 'relentless fatigue'];
const onTheLookoutFor = ['gnomes wearing kilts', 'sailors dancin to the YMCA', 'carnivorous butterflies', "Donald Trump's ego"];

let randNum = (num) => {
    return Math.floor(Math.random()*num);
}

const messageStarSign = () => {
    return starSign[randNum(12)];
}


const messageRetrograde = () => {
    return retrograde[randNum(retrograde.length)];
}


const messageWillExperience = () => {
    return willExperience[randNum(willExperience.length)];
}

const messageOnTheLookoutFor = () => {
    return onTheLookoutFor[randNum(onTheLookoutFor.length)];
}

const horoscopeGenerator = () => {
    const horoscope = []
    let tempString = ""
    
    // Assign the horoscope
    tempString = ":"
    horoscope.push(messageStarSign() + tempString);

    // Add the retrograde
    tempString = 'This month, ' + messageRetrograde() + ' is in retrograde.'
    horoscope.push(tempString);

    // What they will experience
    tempString = 'You will experience ' + messageWillExperience() + '.'
    horoscope.push(tempString);

    // What they should be on the lookout for
    tempString = 'Be on the lookout for ' + messageOnTheLookoutFor() + '.'
    horoscope.push(tempString);

    return horoscope

}

console.log(horoscopeGenerator().join("\n"));

