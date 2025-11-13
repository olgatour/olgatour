// ==== OPEN MODAL ====
const modal = document.getElementById("bookingModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTourName");
const form = document.getElementById("bookingForm");

document.querySelectorAll(".book-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.tour;
        if (!name) return;
        modalTitle.textContent = "Booking: " + name;
        modal.classList.add("active");
    });
});

// ==== CLOSE MODAL ====
modalClose.addEventListener("click", () => modal.classList.remove("active"));
window.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
});

// ==== SUBMIT ====
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Request sent!");
    modal.classList.remove("active");
    form.reset();
});
