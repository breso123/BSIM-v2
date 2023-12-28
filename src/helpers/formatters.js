const formatNum = function (num) {
  const string = String(Math.abs(num));

  if (string.includes(".") || (string.includes(".") && num < 0))
    return String(Math.abs(num).toFixed(2));
  if (string.length === 13) {
    return (
      string.slice(0, 1) + "." + string.slice(1, 4) + "." + string.slice(4, 7)
    );
  }
  if (string.length === 12)
    return string.slice(0, 3) + "." + string.slice(3, 6);
  if (string.length === 11)
    return string.slice(0, 2) + "." + string.slice(2, 5);
  if (string.length === 10)
    return string.slice(0, 1) + "." + string.slice(1, 4);
  if (string.length === 9) return string.slice(0, 3);
  if (string.length === 8) return string.slice(0, 2);
  if (string.length === 7) return string.slice(0, 1);
  if (string.length < 7) return "-";
};

export const formatNumOfShares = (num, spanned = true) => {
  const string = String(Math.abs(num));

  if (string.length === 13)
    return (
      string.slice(0, 1) + "." + string.slice(1, 3) + (spanned ? " T" : "")
    );
  if (string.length === 12) return string.slice(0, 3) + (spanned ? " Bn" : "");
  if (string.length === 11)
    return (
      string.slice(0, 2) + "." + string.slice(2, 3) + (spanned ? " Bn" : "")
    );
  if (string.length === 10)
    return (
      string.slice(0, 1) + "." + string.slice(1, 2) + (spanned ? " Bn" : "")
    );
  if (string.length === 9) return string.slice(0, 3) + (spanned ? " M " : "");
  if (string.length === 8)
    return (
      string.slice(0, 2) + "." + string.slice(2, 3) + (spanned ? " M " : "")
    );
  if (string.length === 7)
    return (
      string.slice(0, 1) + "." + string.slice(1, 2) + (spanned ? " M" : "")
    );
  if (string.length === 6)
    return (
      string.slice(0, 3) + "." + string.slice(3, 4) + (spanned ? " k" : "")
    );
  if (string.length === 5)
    return (
      string.slice(0, 2) + "." + string.slice(2, 3) + (spanned ? " k" : "")
    );
  if (string.length === 4)
    return (
      string.slice(0, 1) + "." + string.slice(1, 3) + (spanned ? " k" : "")
    );
  if (!string || string.length <= 3) return "-";
};

const formatIF = function (num, handler, spanned = true) {
  if (num < 0) return "(" + handler(num, spanned) + ")";
  if (num === null || num === -null || isNaN(num)) return "-";
  if (num > 0) return handler(num, spanned);
};

export const formatInterface = (num) => formatIF(num, formatNum);
export const formatInterface2 = (num, spanned = false) =>
  formatIF(num, formatNumOfShares, spanned);

export const formatPercentage = function (per) {
  const perNeg = Math.abs(per);
  if (per < 0) return "(" + (perNeg * 100).toFixed(perNeg >= 1 ? 0 : 1) + "%)";
  if (per === 0 || !per) return "-";
  if (per > 0) return (per * 100).toFixed(per >= 1 ? 0 : 1) + "%";
};

export const formatPi = function (p) {
  if (p === null) return "-";
  else {
    if (p >= 1) return p;
    if (p === 0) return 0;
  }
};

export function formatDate(isoString) {
  const currentDate = new Date();
  const inputDate = new Date(isoString);

  const timeDifference = currentDate - inputDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days <= 0) {
    if (hours < 1) {
      return `${minutes}min`;
    } else if (hours < 24) {
      return `${hours}h`;
    }
  } else if (days <= 7) {
    return `${days}d`;
  } else {
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth() + 1; // Months are zero-indexed
    const date = inputDate.getDate();

    return `${year}/${month}/${date}`;
  }
}

export const itemStringed = (string) =>
  string
    .split(" ")
    .map((i) => i.toLowerCase())
    .join("_");

export const itemUnstringed = (string) =>
  string
    .split("_")
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join(" ");

export const fkStringed = (string) =>
  string
    .split("_")
    .map((k) => k[0].toUpperCase())
    .join("");

export const maString = (string) => {
  if (string.includes("ma_"))
    return string
      .split("_")
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(" Moving Average - ");
  else return itemUnstringed(string);
};
