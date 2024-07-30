"use strict";
function describe_city(cityname, country = "pakistan") {
    console.log(cityname, "is in ", country);
}
describe_city("karachi");
describe_city("jhang");
describe_city("lahore");
describe_city("dubai", "UAE");
