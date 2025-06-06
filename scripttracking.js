document.addEventListener("DOMContentLoaded", function() {
    let steps = document.querySelectorAll(".step");
    let currentStep = 0;

    function updateTracking() {
        if (currentStep < steps.length) {
            steps[currentStep].classList.add("active");
            currentStep++;
            setTimeout(updateTracking, 5000); // Updates every 5 seconds
        }
    }

    updateTracking();
});
