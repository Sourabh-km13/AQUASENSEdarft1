function calculateWaterRequirement() {
    const crop = document.getElementById("crop").value;
    const soil = document.getElementById("soil").value;
    const climate = document.getElementById("climate").value;

    let baseWaterRequirement;

    // Base water requirement for crops (in mm per day)
    switch (crop) {
        case "wheat":
            baseWaterRequirement = 5;
            break;
        case "rice":
            baseWaterRequirement = 10;
            break;
        case "maize":
            baseWaterRequirement = 7;
            break;
        case "cotton":
            baseWaterRequirement = 8;
            break;
        default:
            baseWaterRequirement = 0;
    }

    // Adjust based on soil type
    let soilFactor;
    switch (soil) {
        case "sandy":
            soilFactor = 1.2;
            break;
        case "loamy":
            soilFactor = 1.0;
            break;
        case "clay":
            soilFactor = 0.8;
            break;
        case "silt":
            soilFactor = 0.9;
            break;
        default:
            soilFactor = 1;
    }

    // Adjust based on climate condition
    let climateFactor;
    switch (climate) {
        case "dry":
            climateFactor = 1.5;
            break;
        case "humid":
            climateFactor = 0.8;
            break;
        case "temperate":
            climateFactor = 1.0;
            break;
        case "wet":
            climateFactor = 0.7;
            break;
        default:
            climateFactor = 1;
    }

    // Calculate the final water requirement
    const waterRequirement = baseWaterRequirement * soilFactor * climateFactor;

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `The estimated water requirement for ${crop} is <strong>${waterRequirement.toFixed(2)} mm/day</strong>.`;
}
