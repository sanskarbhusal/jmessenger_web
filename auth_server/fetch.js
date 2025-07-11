const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
fetch(request)
    .then((response) => response.blob())
    .then((blob) => {
        image.src = URL.createObjectURL(blob);
    });
