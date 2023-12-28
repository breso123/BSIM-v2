export const tdCovOpts = {
  max: 1.5,
  points: [-1.5, -1.2, -0.8, -0.4, 0.4, 0.8, 1.2, 1.5],
  criteria: [0.2, 0.4, 0.8, 1, 1.2, 1.4, 1.6],
};

export const stddrCovOpts = {
  ...tdCovOpts,
  criteria: [1, 1.5, 2, 2.5, 3, 3.5, 4],
};

export const dcImprovement = {
  max: 0.5,
  points: [0.08, 0.16, 0.24, 0.32, 0.4, 0.5],
  criteria: {
    Y1: [0, 0.005, 0.01, 0.015, 0.02, 0.025],
    Y2: [0, 0.003, 0.006, 0.009, 0.012, 0.016],
    Y3: [0, 0.0015, 0.003, 0.0045, 0.006, 0.0075],
  },
};
