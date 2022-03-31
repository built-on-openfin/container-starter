const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

export function send(data) {
    xhttp.open("POST", "http://localhost:9200/openfin_example/_doc", true);
    xhttp.setRequestHeader("content-type", "application/json");
    xhttp.send(JSON.stringify(data));
}
