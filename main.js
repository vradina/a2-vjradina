// FRONT-END (CLIENT) JAVASCRIPT HERE

const submit = async function( event ) {
    // stop form submission from trying to load
    // a new .html page for displaying results...
    // this was the original browser behavior and still
    // remains to this day
    event.preventDefault()

    // const input = document.querySelector( "#yourname" ),
    //     json = { yourname: input.value },
    //     body = JSON.stringify( json )

    const input = {
        statistic: document.querySelector("#statistic").value, 
        team: document.querySelector("#team").value, 
        yourname: document.querySelector("#yourname").value, 
        number: document.querySelector("#number").value,
        time: document.querySelector("#time").value,
        period: document.querySelector("#period").value
    }; 

    console.log(input)

    const response = await fetch( "/submit", {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(input)
    })

    const text = await response.text()
    console.log( "text:", text )

    responseData = JSON.parse(text) //response data is the data that came from the server and is now parsed
    console.log(responseData)
    let p = document.createElement("p");
    p.innerHTML = JSON.stringify(responseData);
    document.getElementById("display").innerHTML = p.innerHTML;

    const stat = JSON.parse(text)
    console.log( "stat:", text );
    for ( let i = 0; i < stat.length; i++ ) {
        console.log( "stat:", stat[i]);
        const p = document.createElement("p")
        p.innerText = JSON.stringify(stat[i])
        document.body.appendChild(p);
    }
}

/* Comment out the onload so the button does not get assigned to a handler */

window.onload = function() {

    const button = document.querySelector("button");
    button.onclick = submit;
}
