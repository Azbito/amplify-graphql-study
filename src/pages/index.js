import React, { useState } from "react";
import { addRestaurant, fetchRestaurants } from "@/_services/restaurant";

export default function Home({ initialRestaurants }) {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    longitude: 0,
    latitude: 0,
  });

  const [restaurants, setRestaurants] = useState(initialRestaurants);

  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  const createRestaurant = async () => {
    try {
      const newRestaurant = await addRestaurant(formState);

      if (newRestaurant) {
        const updatedRestaurants = [newRestaurant, ...restaurants];
        updatedRestaurants.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setRestaurants(updatedRestaurants);
        setFormState({ name: "", description: "", longitude: 0, latitude: 0 });
      }
    } catch (err) {
      console.error("Error creating restaurant:", err);
    }
  };

  return (
    <div>
      <h2>Restaurant Management</h2>
      <input
        onChange={(event) => setInput("name", event.target.value)}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={(event) => setInput("description", event.target.value)}
        value={formState.description}
        placeholder="Description"
      />
      <input
        onChange={(event) => setInput("longitude", event.target.value)}
        value={formState.longitude}
        placeholder="longitude"
        type="number"
      />
      <input
        onChange={(event) => setInput("latitude", event.target.value)}
        value={formState.latitude}
        placeholder="Latitude"
        type="number"
      />
      <button onClick={createRestaurant}>Create Restaurant</button>
      {restaurants.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Altitude: {item.altitude}</p>
          <p>Latitude: {item.latitude}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const fetchedRestaurants = await fetchRestaurants();
    fetchedRestaurants.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    console.log(fetchedRestaurants);
    return {
      props: {
        initialRestaurants: fetchedRestaurants,
      },
    };
  } catch (err) {
    console.log("Error fetching restaurants:", err);

    return {
      props: {
        initialRestaurants: [],
      },
    };
  }
}
