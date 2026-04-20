let travelData = [];

/* ================= FETCH API (TASK 6) ================= */
fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        travelData = data;
        console.log(travelData);
    });

/* ================= SEARCH (TASK 7 + 8) ================= */
function searchRecommendations() {

    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    results.innerHTML = "";

    let matches = [];

    // BEACH
    if (input.includes("beach")) {
        matches = travelData.beaches;
    }

    // TEMPLE
    else if (input.includes("temple")) {
        matches = travelData.temples;
    }

    // COUNTRY → GET ALL CITIES
    else if (input.includes("country")) {

        travelData.countries.forEach(country => {
            country.cities.forEach(city => {
                matches.push(city);
            });
        });
    }

    // NO RESULTS
    if (matches.length === 0) {
        results.innerHTML = "<p>No results found.</p>";
        return;
    }

    // DISPLAY RESULTS
    matches.forEach(place => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${place.imageUrl}">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
        `;

        results.appendChild(div);
    });
}

/* ================= CLEAR BUTTON (TASK 9) ================= */
function clearResults() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("searchInput").value = "";
}

function showTime() {
    const options = {
        timeZone: 'Asia/Manila',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    const time = new Date().toLocaleTimeString('en-US', options);
    console.log("Current time:", time);
}