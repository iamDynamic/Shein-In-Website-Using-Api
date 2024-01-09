if(navigator.onLine == true){
          console.log("Your Are Online")
}else{
          console.log("You Are Ofline")
          document.querySelector("body").innerHTML =
          `
          <blockquote>
          <h1>Your Network Is Disconnected</h1>
          <br>
          .check your internet connection
          <br>
          .Checking the network cables, modem, and router
          <br>
          .Reconnecting to Wi-Fi
          </blockquote>

          `
}