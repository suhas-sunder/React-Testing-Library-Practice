const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Suhas",
          last: "Sunder",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
      {
        name: {
          first: "Suhas",
          last: "Sunder",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
      {
        name: {
          first: "Suhas",
          last: "Sunder",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
      {
        name: {
          first: "Suhas",
          last: "Sunder",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
      {
        name: {
          first: "Suhas",
          last: "Sunder",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};

const response = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default response;
