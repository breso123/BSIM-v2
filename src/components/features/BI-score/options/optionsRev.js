export const revenueGrowth = {
  max: 15,
  points: [2.5, 5, 7.5, 10, 12.5, 15],
  criteria: {
    Y1: [0, 0.025, 0.05, 0.075, 0.1, 0.2],
    Y2: [0, 0.025, 0.045, 0.0675, 0.09, 0.14],
    Y3: [0, 0.02, 0.04, 0.06, 0.08, 0.1],
  },
};

export const revImprovement = {
  max: 5,
  points: [0.8, 1.6, 2.4, 3.2, 4, 5],
  criteria: {
    Y1: [0, 0.005, 0.01, 0.015, 0.02, 0.025],
    Y2: [0, 0.003, 0.006, 0.009, 0.012, 0.016],
    Y3: [0, 0.0015, 0.003, 0.0045, 0.006, 0.0075],
  },
};
