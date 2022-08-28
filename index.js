let sumPointsHome = document.getElementById("sum-points-home");
let sumPointsGuest = document.getElementById("sum-points-guest");
let pointsHome = 0;
let pointsGuest = 0;


function add_one_point_home() {
    pointsHome += 1;
    sumPointsHome.textContent = pointsHome
}

function add_too_points_home() {
    pointsHome += 2;
    sumPointsHome.textContent = pointsHome
}

function add_tree_points_home() {
    pointsHome += 3;
    sumPointsHome.textContent = pointsHome
}

function add_one_point_guest() {
    pointsGuest += 1;
    sumPointsGuest.textContent = pointsGuest
}

function add_too_point_guest() {
    pointsGuest += 2;
    sumPointsGuest.textContent = pointsGuest
}

function add_tree_point_guest() {
    pointsGuest += 3;
    sumPointsGuest.textContent = pointsGuest
}