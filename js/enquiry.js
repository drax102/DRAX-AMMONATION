document.getElementById("enquiryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let type = document.getElementById("type").value;
    let message = document.getElementById("message").value.trim();
    let response = document.getElementById("response");

    if (name === "" || email === "" || type === "" || message === "") {
        response.style.color = "red";
        response.innerText = "⚠️ Please fill all fields";
        return;
    }

    response.style.color = "#00ff99";
    response.innerText = "✅ Enquiry submitted successfully!";
    document.getElementById("enquiryForm").reset();
});
