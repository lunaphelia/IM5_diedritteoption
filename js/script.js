
// Funktion zum Senden des Formulars mit AJAX
function sendForm(selectedGender) {
    // Holt das Formularelement
    const form = document.getElementById("form");

    // Erstellt Sie das Datenobjekt, das gesendet werden soll
    const data = {
        gender: selectedGender,
        // Fügt weitere Formularelemente hinzu
    };

    // fetch für die AJAX-Anfrage, ajax erlaubt es Daten zwischen webbrowser und webserver asynchron auszutauschen, also im hintergrund ohne die seite neu laden zu müssen
    fetch("https://287138-8.web.fhgr.ch/", {
        method: "POST",  // oder "GET", "PUT", "DELETE" usw.
        headers: {
            "Content-Type": "json/form.json",
        },
        body: JSON.stringify(data),  // Wandelt das Datenobjekt in einen JSON-String um
    })
    .then(response => {
        if (!response.ok) {
            // Bei einem Fehlerhaften Statuscode
            throw new Error("Fehler beim Senden: " + response.statusText);
        }
        // Hier können weitere Verarbeitung der Antwort durchführen, falls erforderlich
        console.log("Erfolgreich gesendet!");
        alert("Formular erfolgreich gesendet!");
    })
    .catch(error => {
        // Fehlerbehandlung für Netzwerkfehler oder andere Probleme
        console.error("Fehler beim Senden: " + error.message);
        alert("Fehler beim Senden des Formulars: " + error.message);
    });
}

// JavaScript-Code, der nur für größere Bildschirme ausgeführt wird
if (window.innerWidth >= 600) {
    // Auswahl aller Elemente mit der Klasse 'animation'
    const theAnimation = document.querySelectorAll('.animation');

    // Intersection Observer wird erstellt, um Animationen beim Scrollen auszulösen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation');
            } else {
                entry.target.classList.remove('scroll-animation');
            }
        });
    },
    { threshold: 0.5 });

    // Observer wird für jedes Element in der 'theAnimation'-Liste angewendet
    theAnimation.forEach((element) => {
        observer.observe(element);
    });

    // Scroll-Verhalten für Ankertexte
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll-Verhalten für "Scroll To Next"-Button
    document.getElementById('scrollToNext').addEventListener('click', function () {
        const currentSection = document.querySelector('section:target') || document.querySelector('section');
        const nextSection = currentSection.nextElementSibling;
    
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

}
