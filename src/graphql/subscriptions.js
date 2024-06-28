/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onCreateRestaurant(filter: $filter) {
      id
      name
      description
      longitude
      latitude
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onUpdateRestaurant(filter: $filter) {
      id
      name
      description
      longitude
      latitude
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onDeleteRestaurant(filter: $filter) {
      id
      name
      description
      longitude
      latitude
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating($filter: ModelSubscriptionRatingFilterInput) {
    onCreateRating(filter: $filter) {
      id
      rating
      restaurantID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating($filter: ModelSubscriptionRatingFilterInput) {
    onUpdateRating(filter: $filter) {
      id
      rating
      restaurantID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating($filter: ModelSubscriptionRatingFilterInput) {
    onDeleteRating(filter: $filter) {
      id
      rating
      restaurantID
      createdAt
      updatedAt
      __typename
    }
  }
`;
