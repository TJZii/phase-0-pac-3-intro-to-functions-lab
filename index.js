function shout(string) {
    let shouted = string.toUpperCase();
    return shouted;
}

function whisper(string) {
    let whisps = string.toLowerCase();
    return whisps;
}

function logShout(string) {
    console.log(string.toUpperCase());
    return;
}

function logWhisper(string) {
    console.log(string.toLowerCase());
    return;
}

function sayHiToGrandma(string) {

    if(string === "I love you, Grandma."){
        return "I love you, too."
    } else if(string === string.toUpperCase()){
        return "YES INDEED!";
    } else {
        return "I can't hear you!"
    }
}