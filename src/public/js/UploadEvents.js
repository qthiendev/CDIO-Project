document
    .getElementById("main-img")
    .addEventListener("change", function (event) {
        const imgDisplay = document.querySelector(".img-display");
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                imgDisplay.src = e.target.result;
                imgDisplay.style.display = "block";

                // Hide icon and label
                document.querySelector(".main-icon").style.display = "none";
                document.querySelector(".main-title").style.display = "none";
            };

            reader.readAsDataURL(file);
        }
    });

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".sub-input");

    inputs.forEach((input) => {
        input.addEventListener("change", function (event) {
            const file = event.target.files[0];
            const imgDisplay = event.target.nextElementSibling;

            if (file) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    imgDisplay.src = e.target.result;
                    imgDisplay.style.display = "block";
                };

                reader.readAsDataURL(file);
            }
        });
    });
});
