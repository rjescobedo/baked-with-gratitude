//Calendar Events
document.addEventListener('DOMContentLoaded', () => {
    const events = [
        {
            title: "Baking Class: Holiday Sourdough",
            date: "December 1, 2024",
            location: "Humble, TX"
        },
        {
            title: "Farmer's Market",
            date: "December 15, 2024",
            location: "The Groves"
        },
        {
            title: "Farmer's Market",
            date: "December 22, 2024",
            location: "Cypress, TX"
        }
    ];

    const eventList = document.getElementById('event-list');

    // Populate events dynamically
    events.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
        `;
        eventList.appendChild(li);
    });
});