function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const totalFare = baseFare + (distanceInKm * chargePerKm);

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
  console.log(`Total: KES ${totalFare}`);
  console.log(`\nPanda Pikipiki!`);
}

// Prompt user for input
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = Number(userInput);

// Check if input is a valid number
if (!isNaN(distance) && distance > 0) {
  calculateBodaFare(distance);
} else {
  console.log("Tafadhali weka nambari sahihi ya kilomita.");
}
