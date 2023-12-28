export const optsLev = {
  max: 6,
  points: [6, 4.8, 3.6, 2.4, 1.2, -1.2, -2.4, -3.6, -4.8, -6],
  criteria: [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5],
};

export const levImprovement = {
  max: 2,
  points: [0.3, 0.6, 0.9, 1.2, 1.6, 2],
  criteria: {
    Y1: [0, 0.005, 0.01, 0.015, 0.02, 0.025],
    Y2: [0, 0.003, 0.006, 0.009, 0.012, 0.016],
    Y3: [0, 0.0015, 0.003, 0.0045, 0.006, 0.0075],
  },
};
