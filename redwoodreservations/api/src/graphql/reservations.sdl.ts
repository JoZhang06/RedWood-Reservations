export const schema = gql`
  type Reservation {
    reservationId: Int!
    personId: Int!
    roomId: Int!
    checkinDate: DateTime!
    checkoutDate: DateTime!
    numberOfAdults: Int!
    numberOfChildren: Int!
    totalReservationDays: Int!
    costPerAdult: Float!
    CostPerChild: Float!
    totalCost: Float!
    createdDate: DateTime!
    modifiedDate: DateTime
    status: String!
  }

  type Query {
    reservations: [Reservation!]! @requireAuth
    reservation(id: Int!): Reservation @requireAuth
  }

  input CreateReservationInput {
    reservationId: Int!
    personId: Int!
    roomId: Int!
    checkinDate: DateTime!
    checkoutDate: DateTime!
    numberOfAdults: Int!
    numberOfChildren: Int!
    totalReservationDays: Int!
    costPerAdult: Float!
    CostPerChild: Float!
    totalCost: Float!
    createdDate: DateTime!
    modifiedDate: DateTime
    status: String!
  }

  input UpdateReservationInput {
    reservationId: Int
    personId: Int
    roomId: Int
    checkinDate: DateTime
    checkoutDate: DateTime
    numberOfAdults: Int
    numberOfChildren: Int
    totalReservationDays: Int
    costPerAdult: Float
    CostPerChild: Float
    totalCost: Float
    createdDate: DateTime
    modifiedDate: DateTime
    status: String
  }

  type Mutation {
    createReservation(input: CreateReservationInput!): Reservation! @requireAuth
    updateReservation(id: Int!, input: UpdateReservationInput!): Reservation!
      @requireAuth
    deleteReservation(id: Int!): Reservation! @requireAuth
  }
`
