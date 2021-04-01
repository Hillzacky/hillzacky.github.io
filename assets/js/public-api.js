fetch("https://api.publicapis.org/entries").then((promise) =>
  promise.json().then((res) => {
    let tbody = "";
    res.entries.forEach((row, i) => {
      tbody += `<tr><td>${row.API}</td><td>${row.Description}</td><td>${row.Category}</td><td>${row.Auth}</td><td>${row.Cors}</td><td>${row.HTTPS}</td><td><a href="${row.Link}">Link</a></td></tr>`;
    });
    document.querySelector("tbody#public-api").innerHTML = tbody;
  })
);
