async function getJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
      "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
    },
  });
  const data = await res.json();
  return data.joke;
}

export default getJoke;
