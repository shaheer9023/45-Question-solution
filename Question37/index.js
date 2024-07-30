"use strict";
function make_shirt(size = "large", message = "i love typescript") {
    console.log("size of shirt is ", size, " and message on shirt is ", message);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "dive into code");
