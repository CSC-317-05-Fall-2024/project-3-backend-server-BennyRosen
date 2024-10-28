const restaurantData = [
    {   
        id: 2,
        name: "My Restaurant",
        phone: "(415) 555-5555",
        address: "1600 Holloway Ave, San Francisco, CA 94132",
        photo: "https://picsum.photos/150/150",
    },
    {   
        id: 1,
        name: "Another Restaurant",
        phone: "(415) 555-5556",
        address: "1234 Main St, San Francisco, CA 94123",
        photo: "https://picsum.photos/150/151",
    },
    {   
        id: 0,
        name: "Third Restaurant",
        phone: "(415) 555-5557",
        address: "5678 Market St, San Francisco, CA 94103",
        photo: "https://picsum.photos/150/152",
    },
];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
};

const getRestaurants = () => {
    return restaurantData;
};

const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

const createRestaurant = (newRestaurant) => {
    const newId = getNextId();
    const restaurant = { id: newId, ...newRestaurant };
    restaurantData.push(restaurant);
    return restaurant;
};

const deleteRestaurant = (id) => {
    const index = restaurantData.findIndex(restaurant => restaurant.id === id);
    if (index !== -1) {
        restaurantData.splice(index, 1);
        return true; 
    }
    return false;
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };