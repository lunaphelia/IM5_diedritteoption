document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('scrollToNext').addEventListener('click', function () {
    const currentSection = document.querySelector('section:target') || document.querySelector('section');
    const nextSection = currentSection.nextElementSibling;

    if (nextSection) {
        nextSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

function submitForm() {
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    if (selectedGender) {
        alert('Ausgewähltes Geschlecht: ' + selectedGender.value);
    } else {
        alert('Bitte wählen Sie Ihr Geschlecht aus.');
    }
}

function toggleText(termId) {
    const term = document.getElementById(termId);
    const content = term.querySelector('p');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
