$(document).ready(function() {
    $(".eat-btn").on("click", function (event) {
        console.log("id: " + this.id);
        $.ajax(`/api/burgers/${this.id}`, {
            type: "PUT"
        }).then(function() {
            console.log("ate a burger");
            location.reload();
        });
    });
    $("#add-btn").on("click", function (event) {
        event.preventDefault();
        console.log("burger_name: " + $("#burger-name").val().trim());
        let newBurger = {
            burger_name: $("#burger-name").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("added a burger");
            location.reload();
        });
    });
});