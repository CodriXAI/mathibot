let currentIndex = 1;
const totalItems = 5;

function updateMenu(newIndex) {
    // Hide current
    document.getElementById(`item${currentIndex}`).style.display = 'none';
    document.getElementById(`p${currentIndex}`).style.color = 'white';
    document.getElementById(`f${currentIndex}`).style.display = 'none';

    // Show new
    document.getElementById(`item${newIndex}`).style.display = 'flex';
    document.getElementById(`p${newIndex}`).style.color = 'aqua';
    document.getElementById(`f${newIndex}`).style.display = 'block';

    currentIndex = newIndex;
}

function move(direction) {
    let newIndex = currentIndex + direction;
    if (newIndex > totalItems) newIndex = 1;
    if (newIndex < 1) newIndex = totalItems;
    updateMenu(newIndex);
}

// Map old function names to the new logic to maintain compatibility with HTML
function ajustesIz() { move(-1); }
function ajustesDe() { move(1); }
function azarIz() { move(-1); }
function azarDe() { move(1); }
function infoIz() { move(-1); }
function infoDe() { move(1); }
function lupaIz() { move(-1); }
function lupaDe() { move(1); }
function varitaIz() { move(-1); }
function varitaDe() { move(1); }
