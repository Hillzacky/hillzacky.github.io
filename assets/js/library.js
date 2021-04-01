fetch("src/css.json").then((promise) =>
  promise.json().then((res) => {
    let tbody = "";
    res.forEach((row, i) => {
      tbody += `<tr><td>${row.name}</td><td>${row.desc}</td><td>${row.cat}</td><td>::<a href="${row.doc}">Doc</a>::|::<a href="${row.src}">File</a>::</td></tr>`;
    });
    document.querySelector("tbody#css").innerHTML = tbody;
  })
);
