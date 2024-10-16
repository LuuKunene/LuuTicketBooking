const eventsData = {
    concerts: [
        { name: "Cape Town International Jazz Festival", date: "2024-03-28", venue: "Cape Town Convention Centre", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/concert/The_South_African_Music_Awards.jpeg" },
        { name: "AFROPUNK Joburg", date: "2024-12-06", venue: "Pixley Ka Isaka Seme Street, Joburg", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/concert/afropunk.png" },
        { name: "Kirstenbosch Summer Concerts", date: "2024-01-15", venue: "Kirstenbosch National Botanical Garden", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/concert/jazz_festival.jpeg" },
        { name: "The South African Music Awards", date: "2024-05-18", venue: "Sun City", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/concert/kirstenbosch_summer.jpeg" },
        { name: "The Kings of Comedy", date: "2024-08-20", venue: "The Teatro at Montecasino", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/concert/The_Kings_of_Comedy.jpeg" },
        { name: "Spring Fiesta", date: "2024-10-05", venue: "Nasrec Expo Centre", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/concert/Spring_Fiesta.jpeg" }
    ],
    betting: [
        { name: "South African Horse Racing", date: "2024-11-12", venue: "Turffontein Racecourse", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/betting_events/South_African_Horse_Racing.jpeg" },
        { name: "Betting on the Springbok Rugby Match", date: "2024-10-21", venue: "Various Locations", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/betting_events/Betting_on_the_Springbok_Rugby_Match.jpeg" },
        { name: "Tote Betting at Kenilworth", date: "2024-09-10", venue: "Kenilworth Racecourse", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/betting_events/Tote_Betting_at_Kenilworth.jpeg" },
        { name: "Soccer World Cup 2024 Betting", date: "2024-06-14", venue: "Various Locations", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/betting_events/Soccer_World_Cup_2024_Betting.jpeg" },
        { name: "Daily Lottery Draw", date: "2024-10-01", venue: "Lucky Center", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/betting_events/Daily_Lottery_Draw.jpeg" },
        { name: "Betting on Cricket Series", date: "2024-12-15", venue: "Various Locations", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/betting_events/Betting_on_Cricket_Series.jpeg" }
    ],
    movies: [
        { name: "The Last Face", date: "2024-05-25", venue: "Nu Metro", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/movies/The_Last_Face.jpeg", price: 150, cinema: "Nu Metro - Sandton" },
        { name: "Kandasamys: The Wedding", date: "2024-06-18", venue: "Ster-Kinekor", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/movies/Kandasamys_The_Wedding.jpeg", price: 120, cinema: "Ster-Kinekor - Pretoria" },
        { name: "Blood and Water", date: "2024-07-05", venue: "The Labia", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/movies/Blood_and_Water.jpeg", price: 180, cinema: "Labia Theatre - Cape Town" },
        { name: "Happiness is a Four-Letter Word", date: "2024-08-12", venue: "The Bioscope", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/movies/Happiness_is_a_Four_Letter_Word.jpeg", price: 100, cinema: "The Bioscope - Johannesburg" },
        { name: "Chasing the Sun", date: "2024-09-01", venue: "Platinum Screens", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/movies/Chasing_the_Sun.jpeg", price: 160, cinema: "Platinum Screens - Durban" },
        { name: "Fiela se Kind", date: "2024-10-15", venue: "Moonlight Cinema", image: "file:///C:/Users/Kotlolosmk/Desktop/Mbongeni/images/movies/Fiela_se_Kind.jpeg", price: 140, cinema: "Moonlight Cinema - Port Elizabeth" }
    ]
};

// Function to Initialize Event Lists
function initEventLists() {
    // Concerts
    const concertList = document.getElementById('concert-list');
    eventsData.concerts.forEach(event => {
        const eventCard = createEventCard(event, 'Concert');
        concertList.appendChild(eventCard);
    });

    // Betting
    const bettingList = document.getElementById('betting-list');
    eventsData.betting.forEach(event => {
        const eventCard = createEventCard(event, 'Betting');
        bettingList.appendChild(eventCard);
    });

    // Movies
    const movieList = document.getElementById('movie-list');
    eventsData.movies.forEach(event => {
        const eventCard = createMovieCard(event, 'Movie');
        movieList.appendChild(eventCard);
    });
}

// Function to Create a Generic Event Card
function createEventCard(event, type) {
    const card = document.createElement('div');
    card.className = 'event-card';

    const img = document.createElement('img');
    img.src = event.image;
    img.alt = event.name;

    const title = document.createElement('h3');
    title.textContent = event.name;

    const date = document.createElement('p');
    date.textContent = `Date: ${event.date}`;

    const venue = document.createElement('p');
    venue.textContent = `Venue: ${event.venue}`;

    const button = document.createElement('button');
    button.textContent = 'Book Now';
    button.addEventListener('click', () => openBookingModal(event.name));

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(venue);
    card.appendChild(button);

    return card;
}

// Function to Create a Movie Event Card with Additional Details
function createMovieCard(event, type) {
    const card = document.createElement('div');
    card.className = 'event-card';

    const img = document.createElement('img');
    img.src = event.image;
    img.alt = event.name;

    const title = document.createElement('h3');
    title.textContent = event.name;

    const date = document.createElement('p');
    date.textContent = `Date: ${event.date}`;

    const cinema = document.createElement('p');
    cinema.className = 'cinema';
    cinema.textContent = `Cinema: ${event.cinema}`;

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = `Price: R${event.price}`;

    const button = document.createElement('button');
    button.textContent = 'Book Now';
    button.addEventListener('click', () => openBookingModal(event.name));

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(cinema);
    card.appendChild(price);
    card.appendChild(button);

    return card;
}

// Modal Elements
const bookingModal = document.getElementById('booking-modal');
const confirmationModal = document.getElementById('confirmation-modal');
const closeButtons = document.querySelectorAll('.close-button');
const closeConfirmationButton = document.getElementById('close-confirmation');

// Function to Open Booking Modal
function openBookingModal(eventName) {
    bookingModal.style.display = 'block';
    const event = findEventByName(eventName);
    document.getElementById('event-name').value = event.name;
    document.getElementById('event-date').value = event.date;
}

// Function to Find an Event by Name
function findEventByName(name) {
    let event = eventsData.concerts.find(event => event.name === name);
    if (event) return event;
    event = eventsData.betting.find(event => event.name === name);
    if (event) return event;
    event = eventsData.movies.find(event => event.name === name);
    return event;
}

// Function to Close Modals
function closeModal(modal) {
    modal.style.display = 'none';
}

// Event Listeners for Close Buttons
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        closeModal(button.parentElement.parentElement);
    });
});

closeConfirmationButton.addEventListener('click', () => {
    closeModal(confirmationModal);
});

// Event Listener to Close Modal When Clicking Outside Content
window.addEventListener('click', (event) => {
    if (event.target === bookingModal) {
        closeModal(bookingModal);
    }
    if (event.target === confirmationModal) {
        closeModal(confirmationModal);
    }
});

// Handle Login Form Submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check login credentials
    if (username === 'user1' && password === 'pass011') {
        // Hide home section and show events
        document.getElementById('home').style.display = 'none';
        document.getElementById('concerts').style.display = 'block';
        document.getElementById('betting').style.display = 'block';
        document.getElementById('movies').style.display = 'block';
    } else {
        document.getElementById('login-message').textContent = 'Invalid username or password.';
    }
});

// Handle Booking Form Submission
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const tickets = parseInt(document.getElementById('tickets').value);
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;

    const event = findEventByName(eventName);
    const pricePerTicket = event.price;
    const totalPrice = pricePerTicket * tickets;

    if (!eventDate || !tickets || !userName || !userEmail) {
        alert('Please fill in all fields.');
        return;
    }

    const confirmationMessage = `
        <div style="border: 1px solid #ddd; padding: 10px; margin-top: 20px;">
            <h3>Receipt</h3>
            <p><strong>Event:</strong> ${eventName}</p>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Number of Tickets:</strong> ${tickets}</p>
            <p><strong>Price per Ticket:</strong> R${pricePerTicket}</p>
            <p><strong>Total Amount:</strong> R${totalPrice}</p>
            <p>A confirmation email has been sent to <strong>${userEmail}</strong>.</p>
        </div>
    `;

    document.getElementById('confirmation-message').innerHTML = confirmationMessage;
    bookingModal.style.display = 'none';
    confirmationModal.style.display = 'block';

    bookingForm.reset();
});

// Initialize the Event Lists on Page Load
window.onload = initEventLists;
