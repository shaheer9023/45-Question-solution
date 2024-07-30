"use strict";
//album
function album(artist, title) {
    console.log("Artist name ", "{", artist, "}", "title {", title, "}");
}
;
album("Ali", "dil hai");
album("madad", "ajeeb kahaNI");
album("babar", "coding");
console.log("With Track");
function track(artist, title, track) {
    console.log("Artist name ", "{", artist, "}", "title {", title, "} and track number is {", track, "}");
}
;
track("Ali", "dil hai", 3);
track("madad", "ajeeb kahaNI", 4);
track("babar", "coding", 5);
