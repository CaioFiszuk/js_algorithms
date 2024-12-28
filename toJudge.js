/**
 * 
 * @param {array} deeds 
 * @returns {string}
 */

function toJudge(deeds) {
    let badScore = 0;
    let goodScore = 0;
    let indifferent = 0;

    for(let i = 0; i < deeds.length; i++) {
        if(deeds[i].includes("killed") || deeds[i].includes("stole") || deeds[i].includes("lied") || deeds[i].includes("hit") || deeds[i].includes("gossiped") || deeds[i].includes("betrayed")){
           badScore++;
        }else if(deeds[i].includes("saved") || deeds[i].includes("helped") || deeds[i].includes("gave")){
            goodScore++;
        }else{
            indifferent++;
        }
    }

    if(badScore > goodScore){
        return 'You are a bad person';
    }else if(badScore == goodScore){
        return 'You are a bad person';
    }else if(badScore < goodScore){
        return 'You are a good person';
    }

}

console.log(toJudge(["killed a woman", "helped a drowning boy", "gave money to charity", "bought a car", "saved a man", "lied to my mother", "stole a wallet", "hit a man to dead"])); //You are a bad person

console.log(toJudge(["helped a drowning boy", "gave money to charity", "bought a car", "gossiped about my friend"])); //You are a good person

//This algorithm has no real purpose to judge if a person is good or not, is was made for educational purposes only