document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        Swal.fire({
            title: "¡Enviado correctamente!",
            text: "Gracias por tu mensaje. Te responderemos pronto.",
            icon: "success",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                contactForm.reset(); 
            }
        });
    });
});
