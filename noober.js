window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  
  // Start of Recipe:

  // Create a variable for the ride details data.
  let rideInfo = json

  // Loop through the ride details data.
  for (let i=0; i<rideInfo.length; i++){

  // Create a variable to store each product in memory.
  let ride = rideInfo [i]

  // Create an IF conditional to determine which kind of ride each one is: X, XL, or Purple.
  let rideType = [`Purple`,`XL`,`X`]
  let rideTypeName = ``

  if (ride.purpleRequested == true){
    rideTypeName = rideType[0]
  } else if (ride.numberOfPassengers > 3){
    rideTypeName = rideType[1]
  } else{
    rideTypeName = rideType[2]    
  }

  // Create an IF conditional to determine the coloring depending on whether the ride type is X, XL, or Purple.
  let colorType = [`purple`,`red`,`gray`]
  let colorTypeName = ``

  if (ride.purpleRequested == true){
    colorTypeName = colorType[0]
  } else if (ride.numberOfPassengers > 3){
    colorTypeName = colorType[1]
  } else{
    colorTypeName = colorType[2]    
  }

  // Create a variable for the HTML element we're going to add to the query `.rides`.
  let htmlElement = document.querySelector(`.rides`)

  // Insert HTML into the ride detail element, using the data from each ride and using the already existing style.
  htmlElement.insertAdjacentHTML(`beforeend`, 
  `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-${colorTypeName}-500">
  <i class="fas fa-car-side"></i>
  <span>Noober  ${rideTypeName}</span>
  </h1>

  <div class="border-4 border-${colorTypeName}-900 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
      <p class="font-bold text-${colorTypeName}-600">${ride.passengerDetails.phoneNumber}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-${colorTypeName}-600 text-white p-2">
      ${ride.numberOfPassengers} passenger(s)
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-${colorTypeName}-600">PICKUP</div>
      <p>${ride.pickupLocation.address}</p>
      <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-${colorTypeName}-600">DROPOFF</div>
      <p>${ride.dropoffLocation.address}</p>
      <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
    </div>
  </div>
  </div>`)
  }
  
  // End of Recipe:

  // Delete the existing hard-code in <div class="rides...
})