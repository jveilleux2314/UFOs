// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear out existing data
    tbody.html("");
    console.log(data);
    // loop through each object in the data and append
    // a row and cells for each value
    data.forEach((dataRow) => {
    // append a row to the table body 
        let row = tbody.append("tr");

    // loop throught and add each value as a table cell (td)

        Object.values(dataRow).forEach((val) => {
            console.log(val);
            let cell = row.append("td");
                cell.text(val);
        });
    });
}


// 1. Create a variable to keep track of filters
var filters = {};


function updateFilters() {


//     // 4a. Save the element that was changed as a variable.
let changedVar = d3.select(this);

//save the value that was changed
let changedVal = changedVar.property("value");


//     // 4c. Save the id of the filter that was changed as a variable.

let newId = changedVar.attr("id");

//     // 5. If a filter value was entered then add that filterId and value
//     // to the filters list. Otherwise, clear that filter from the filters object.

if (changedVal) {
filters[newId] = changedVal;
}
else {
    delete filters[newId];
}

    //console.log(filters);
    // 6. Call function to apply all filters and rebuild the table
    filterTable();

}

//     /

//  // 7. Use this function to filter the table when data is entered.

function filterTable() {

// // 8. Set the filtered data to the tableData.
    let filteredData = tableData;

    
// // // // 9. Loop through all of the filters and keep any data that
// // // // // matches the filter values
Object.entries(filters).forEach(([key,value]) => {

filteredData = filteredData.filter(entry => entry[key] === value);
});

// // // // 10. Finally, rebuild the table using the filtered data


buildTable(filteredData);

}
// Attach an event to listen for the form button
d3.selectAll("input").on("change", updateFilters);
// Build the table when the page loads
buildTable(tableData);
