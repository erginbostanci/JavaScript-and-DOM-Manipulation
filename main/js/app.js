// Importing data from data.js
var data_table = data;


// Using d3.select to find the tbody DOM element in the html
var tbody = d3.select("tbody"); 

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// For every data in tableData a forEach() method that appends both table row and data with the value
data_table.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Solution adapted from StackOverflow questions by GrumpyCrouton & Matt Brown on filtering table data
// Defining variables for now filtered data as sightings and the filter button
var sightings_data = data;
var button_filter = d3.select("#filter-btn");
var button_clear = d3.select("#clear-btn");

// Creates the clear function on click
button_clear.on("click", function() {
    // Prevents reloading the page, except kept here for illustrative purposes - functionally want the page to reload
    // d3.event.preventDefault();
    
    // Repopulates the data
    data_table.forEach((entry) => {
        var row = tbody.append("tr");
        Object.entries(entry).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

// Creates the filter function on click
button_filter.on("click", function() {
    // Prevents reloading the page
    d3.event.preventDefault();
    // Removes all data in the selection
    d3.selectAll("td").remove()

    // Using d3.select to find the datetime DOM element in the html
    var input_datetime = d3.select("#datetime");
    var input_city = d3.select("#city");
    var input_state = d3.select("#state");
    var input_country = d3.select("#country");
    var input_shape = d3.select("#shape");

    // The user's search query
    var input_Value_datetime = input_datetime.property("value");
    var input_Value_city = input_city.property("value");
    var input_Value_state = input_state.property("value");
    var input_Value_country = input_country.property("value");
    var input_Value_shape = input_shape.property("value");

    // Filters data to entries matching the search query inputValue
    var filtered_Datadatetime = sightings_data.filter(sighting => sighting.datetime === input_Value_datetime);
    var filtered_Datacity = sightings_data.filter(sighting => sighting.city === input_Value_city);
    var filtered_Datastate = sightings_data.filter(sighting => sighting.state === input_Value_state);
    var filtered_Datacountry = sightings_data.filter(sighting => sighting.country === input_Value_country);
    var filtered_Datashape = sightings_data.filter(sighting => sighting.shape === input_Value_shape);

    // Using d3.select to find the tbody DOM element in the html, echoes the initial/default tbody variable
    var tbody = d3.select("tbody");

    // For every data in tableData, a forEach() method that appends both table row and data with the now filtered value(s)
    filtered_Datadatetime.forEach((filtered_Sightings_data) => {
        var row = tbody.append("tr");
        Object.entries(filtered_Sightings_data).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    filtered_Datacity.forEach((filtered_Sightings_data) => {
        var row = tbody.append("tr");
        Object.entries(filtered_Sightings_data).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    filtered_Datastate.forEach((filtered_Sightings_data) => {
        var row = tbody.append("tr");
        Object.entries(filtered_Sightings_data).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    filtered_Datacountry.forEach((filtered_Sightings_data) => {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    filtered_Datashape.forEach((filtered_Sightings_data) => {
        var row = tbody.append("tr");
        Object.entries(filtered_Sightings_data).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
