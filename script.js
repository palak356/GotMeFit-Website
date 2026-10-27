const fitnessForm = document.getElementById("fitness-form");

if (fitnessForm) {
    fitnessForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const age = Number(document.getElementById("age").value);
        const height = Number(document.getElementById("height").value);
        const weight = Number(document.getElementById("weight").value);
        const goal = document.getElementById("goal").value;
if (
    age < 13 || age > 100 ||
    height < 50 || height > 250 ||
    weight < 10 || weight > 300 ||
    !goal
) {
    alert("Please enter valid details and select a fitness goal.");
    return;
}

        const result = document.getElementById("assessment-result");

        if (!result) {
            alert("Assessment result area was not found.");
            return;
        }

        const goalMessages = {
            general: "Build healthy, consistent fitness habits.",
            strength: "Focus on gradual strength development.",
            muscle: "Follow a suitable strength-training plan.",
            endurance: "Build stamina gradually with regular activity."
        };

        result.textContent =
            "Assessment submitted successfully! Your selected goal: " +
            (goalMessages[goal] || "Build healthy fitness habits") +
            " Please consult a qualified fitness professional for a plan suited to you.";
    });
}