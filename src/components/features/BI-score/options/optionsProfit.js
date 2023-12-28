export const opMargin = {
  max: 5,
  points: [0.7, 1.4, 2.1, 2.7, 3.4, 4, 5],
  criteria: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3],
};

export const netMargin = {
  ...opMargin,
  criteria: [0, 0.04, 0.08, 0.12, 0.16, 0.2, 0.25],
};

export const roa = {
  ...opMargin,
  criteria: [0, 0.025, 0.05, 0.075, 0.1, 0.125, 0.15],
};

export const roe = {
  ...opMargin,
  criteria: [0, 0.06, 0.12, 0.18, 0.24, 0.3, 0.36],
};

export const marginImprovement = {
  max: 2.5,
  points: [0.4, 0.8, 1.2, 1.6, 2, 2.5],
  criteria: {
    Y1: [0, 0.005, 0.01, 0.015, 0.02, 0.025],
    Y2: [0, 0.003, 0.006, 0.009, 0.012, 0.016],
    Y3: [0, 0.0015, 0.003, 0.0045, 0.006, 0.0075],
  },
};
