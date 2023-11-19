function calcTicket(event) {
    event.preventDefault();
    let nameSurname = document.getElementById("user_name_surname").value;
    let km = document.getElementById("user_km").value;
    let randomCp = Math.floor(Math.random() * 100001);
    let randomCabin = Math.floor(Math.random() * 11);


    let ticketPrice = km * 0.21; 
    let ticketPriceforMinors = ticketPrice * 20 / 100;
    let ticketPriceforElders = ticketPrice * 40 / 100;

    let selectAge = document.getElementById("select_age").value;


    if (selectAge == 1) {
        ticketPrice = ticketPrice - ticketPriceforMinors;
    } else if (selectAge == 2) {
        ticketPrice;
    } else if (selectAge == 3) {
        ticketPrice = ticketPrice - ticketPriceforElders;
    }

    let finalPrice = ticketPrice.toFixed(2);

    document.getElementById("user_name").innerHTML = nameSurname;
    document.getElementById("ticket_price").innerHTML = finalPrice;
    document.getElementById("cabin_n").innerHTML= randomCabin;
    document.getElementById("cp_n").innerHTML= randomCp;

  
}   

btn.addEventListener("click",calcTicket);

