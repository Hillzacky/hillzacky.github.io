fetch("../../src/public-local-api.json").then((promise) =>
  promise.json().then((res) => {
    let tbody = "";
    res.forEach((row, i) => {
      tbody += `<tr><td>${row.api}</td><td>${row.desc}</td><td>${row.cat}</td><td>${row.auth}</td><td><a href="${row.url}">Link</a></td></tr>`;
    });
    document.querySelector("tbody#public-local-api").innerHTML = tbody;
  })
);
