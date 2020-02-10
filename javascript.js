fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let photo = data;
        for (var i = 0; i < 5000; i++) {
            $("#img" + i).attr("src", photo[i].url);
            $("#img" + i).attr("title", photo[i].title);
            $("#text" + i).html(photo[i].title);
        }

    })
    .catch(function(error) {
        document.write("Error!");
    });

function display() {
    for (i = 0; i < 5000; i++) {
        var create_div = document.createElement("DIV");
        var create_img = document.createElement("IMG");
        var create_text = document.createElement("P");
        create_div.setAttribute("id", "div" + i);
        create_div.setAttribute("class", "smalldiv col-lg-6");
        document.getElementById("maindiv").appendChild(create_div);
        create_img.setAttribute("id", "img" + i);
        document.getElementById("div" + i).appendChild(create_img);
        create_text.setAttribute("id", "text" + i);
        document.getElementById("div" + i).appendChild(create_text);
        if(i%2==0) {
            create_img.setAttribute("class", "image_even");
            create_text.setAttribute("class", "title_even");
        }
        else {
            create_img.setAttribute("class", "image_odd");
            create_text.setAttribute("class", "title_odd");
        }
    }
}