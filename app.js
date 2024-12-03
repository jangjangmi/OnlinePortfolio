function showChoices() {
    const choicesDiv = document.getElementById("choices");
    choicesDiv.style.display = choicesDiv.style.display === "none" ? "block" : "none";
}

function toggleDescription(choiceId) {
    const descDiv = document.getElementById(`${choiceId}-desc`);
    descDiv.style.display = descDiv.style.display === "none" ? "block" : "none";
}

// Navbar
const navToggle = document.getElementById('navToggle');
const navOptions = document.getElementById('navOptions');

navToggle.addEventListener('click', () => {
    navOptions.style.display = navOptions.style.display === 'none' || navOptions.style.display === '' ? 'flex' : 'none';
});



//ito yung ripple effect na kapag pinipindot mo backgrund is parang may effect sya
document.body.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const size = 150; 
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = e.clientX - size / 2; 
    const y = e.clientY - size / 2; // Center the ripple

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});