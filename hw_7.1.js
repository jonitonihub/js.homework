const booking_home = {
    title: "Best rooms to weekend",
    country: "UA",
    city: "Kiev",
    street: "Khreshchatyk",
    room_count: 2,
    rooms: [
        {
            name: "Small bedroom",
            price: 35,
            bed: 2
        },
        {
            name: "King size bedroom",
            price: 100,
            bed: 1
        }
    ],

    CreateOrder: function(questions) {
        return "Do you want to order " + this.title + "?";
    },

    getInfo: function(info) {
        return booking_home
    }
};


console.log(booking_home.getInfo()); 

// Окрема функція для додавання нової кімнати
function addRoom(bookingObject, name, price, bed) {
    const newRoom = { name: name, price: price, bed: bed };
    bookingObject.rooms.push(newRoom); // Додаємо нову кімнату до масиву rooms
    bookingObject.room_count++; // Збільшуємо кількість кімнат
}

// Додавання нової кімнати
addRoom(booking_home, "Deluxe Suite", 150, 1);


// Виклик методу CreateOrder
console.log(booking_home.CreateOrder()); 
console.log(booking_home.getInfo()); 