function submitForm() {
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    if (selectedGender) {
        alert('Ausgewähltes Geschlecht: ' + selectedGender.value);
    } else {
        alert('Bitte wählen Sie Ihr Geschlecht aus.');
    }
}