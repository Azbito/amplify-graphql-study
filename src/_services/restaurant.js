import { createRestaurant } from "@/graphql/mutations";
import { listRestaurants } from "@/graphql/queries";
import { API } from "@/libs/aws/amplify-api";

export const addRestaurant = async (restaurant) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await API.graphql({
        query: createRestaurant,
        variables: {
          input: {
            name: restaurant.name,
            description: restaurant.description,
            longitude: parseFloat(restaurant.longitude),
            latitude: parseFloat(restaurant.latitude),
          },
        },
      });

      resolve(result.data.createRestaurant);
    } catch (err) {
      reject(err);
    }
  });
};

export const fetchRestaurants = async () => {
  try {
    const result = await API.graphql({
      query: listRestaurants,
    });

    return result.data.listRestaurants.items;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};
