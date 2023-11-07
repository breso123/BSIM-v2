import {
  flattenTheObject,
  setChangeAndMargin,
} from "../../helpers/fsModifiers";

const URL = "http://localhost:8000";
const API_KEY = "78f4080cdd6a4d0a9adf2cd366647906";
const API_URL = `https://api.twelvedata.com/`;

export async function loadStatements(statement, propsSetter, kwLoc) {
  try {
    const res = await fetch(`${URL}/${statement}`);
    if (!res.ok) throw Error("Failed getting financials");
    const data = await res.json();

    const statementFlattened = data.map((d) => {
      return flattenTheObject(d);
    });

    const statementFlatAndModified = statementFlattened.map((st) => {
      return { ...st, ...propsSetter(st) };
    });

    return statementFlatAndModified.map((st, i, arr) => {
      return { ...st, ...setChangeAndMargin(st, arr[i + 1], kwLoc) };
    });
  } catch (err) {
    alert(err.message);
  }
}

export async function loadStock(interval, outputSize) {
  try {
    const res = await fetch(
      `${API_URL}time_series?symbol=AAPL&interval=${interval}&outputsize=${outputSize}&apikey=${API_KEY}`
    );
    if (!res.ok) throw Error("Failed getting stock data");
    const data = await res.json();

    return data;
  } catch (err) {
    alert(err.message);
  }
}

export async function loadIdeas(symbol) {
  try {
    const res = await fetch(`${URL}/ideas?ticker=${symbol}`);
    if (!res.ok) throw Error("Failed getting ideas");

    const data = res.json();
    return data;
  } catch (err) {
    alert(err.message);
  }
}

export async function loadDefault(featureItem) {
  try {
    const res = await fetch(`${URL}/${featureItem}`);
    if (!res.ok) throw Error("Failed getting financials");
    const data = await res.json();

    return data;
  } catch (err) {
    alert(err.message);
  }
}

export async function loadLogo(corp) {
  try {
    const res = await fetch(`${API_URL}logo?symbol=${corp}&apikey=${API_KEY}`);
    if (!res.ok) throw Error("Failed getting logo");

    const data = await res.json();
    return data;
  } catch (err) {
    alert(err.message);
  }
}

export async function setNewIdea(newIdea) {
  try {
    const res = await fetch(`${URL}/ideas`, {
      method: "POST",
      body: JSON.stringify(newIdea),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error("Failed registering new user. Try Again");
  }
}
