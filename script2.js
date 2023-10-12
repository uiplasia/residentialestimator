document.addEventListener("DOMContentLoaded", function () {
    // Get references to the "House Size" dropdown and input fields
    const houseSizeDropdown = document.getElementById("projectSize");
    const projectTypeDropdown = document.getElementById("projectType");
    
    // Define input field names with spaces as they appear in your HTML
    const inputFields = {
        "KITCHEN Quantity": document.querySelector('input[name="KITCHENQuantity"]'),
        "bedroom Quantity": document.querySelector('input[name="bedroomQuantity"]'),
        "entrance Quantity": document.querySelector('input[name="entranceQuantity"]'),
        "DINING AREA Quantity": document.querySelector('input[name="DININGAREAQuantity"]'),
        "WASH YARD Quantity": document.querySelector('input[name="WASHYARDQuantity"]'),
        "COMMON BATH-TOILET Quantity": document.querySelector('input[name="commonbathroomQuantity"]'),
        "BALCONY Quantity": document.querySelector('input[name="BALCONYQuantity"]'),
        "attached bathroom Quantity": document.querySelector('input[name="ATT.BATHQuantity"]'),
        "VESTIBULE Quantity": document.querySelector('input[name="VESTIBULEQuantity"]'),
        "DRAWING ROOM Quantity": document.querySelector('input[name="DRAWINGROOMQuantity"]'),
        "VARANDAH Quantity": document.querySelector('input[name="VARANDAHQuantity"]'),
        "STUDY Quantity": document.querySelector('input[name="STUDYQuantity"]'),
        "SERVANT ROOM Quantity": document.querySelector('input[name="SERVANTROOMQuantity"]'),
        "SERVANT BATH Quantity": document.querySelector('input[name="SERVANTBATHQuantity"]'),
        "POWDER ROOM Quantity": document.querySelector('input[name="POWDERROOMQuantity"]'),
        "DRESSER/ WALK-IN WARDROB Quantity": document.querySelector('input[name="DRESSERQuantity"]'),
        "pantry Quantity": document.querySelector('input[name="pantryQuantity"]'),
        "Foyer/Entryway Quantity": document.querySelector('input[name="FoyerQuantity"]'),
        "LIVING ROOM Quantity": document.querySelector('input[name="LIVINGROOMQuantity"]'),
        "FAMILY SIT-OUT Quantity": document.querySelector('input[name="FAMILYSIT-OUTQuantity"]'),
        "Hallway/Corridor Quantity": document.querySelector('input[name="HallwayQuantity"]'),
        "Small Balcony Quantity": document.querySelector('input[name="SmallBalconyQuantity"]'),
        "Medium Balcony Quantity": document.querySelector('input[name="MediumBalconyQuantity"]'),
        "Large Balcony Quantity": document.querySelector('input[name="LargeBalconyQuantity"]'),
        "Small Bathroom Quantity": document.querySelector('input[name="SmallBathroomQuantity"]'),
        "Medium Bathroom Quantity": document.querySelector('input[name="MediumBathroomQuantity"]'),
        "Large Bathroom Quantity": document.querySelector('input[name="LargeBathroomQuantity"]'),
        "Small Terrace Quantity": document.querySelector('input[name="SmallTerraceQuantity"]'),
        "Medium Terrace Quantity": document.querySelector('input[name="MediumTerraceQuantity"]'),
        "Large Terrace Quantity": document.querySelector('input[name="LargeTerraceQuantity"]'),
        "Pooja Quantity": document.querySelector('input[name="PoojaQuantity"]'),
        "Staircase Quantity": document.querySelector('input[name="StaircaseQuantity"]'),
        "OUTER KITCHEN Quantity": document.querySelector('input[name="OUTERKITCHENQuantity"]'),
        "Cloakroom Quantity": document.querySelector('input[name="CloakroomQuantity"]'),
        "Plant Room Quantity": document.querySelector('input[name="PlantRoomQuantity"]'),
        "Safe Room Quantity": document.querySelector('input[name="SafeRoomQuantity"]'),
        "Panic Room Quantity": document.querySelector('input[name="PanicRoomQuantity"]'),
        "Server Room Quantity": document.querySelector('input[name="ServerRoomQuantity"]'),
        "Pump Room Quantity": document.querySelector('input[name="PumpRoomQuantity"]'),
        "Guest Room Quantity": document.querySelector('input[name="GuestRoomQuantity"]'),
        "Children's Room/Nursery Quantity": document.querySelector('input[name="ChildrenRoomQuantity"]'),
        "Wine Cellar Quantity": document.querySelector('input[name="WineCellarQuantity"]'),
        "Craft Room Quantity": document.querySelector('input[name="CraftRoomQuantity"]'),
        "Workshop Quantity": document.querySelector('input[name="WorkshopQuantity"]'),
        "Media Room Quantity": document.querySelector('input[name="MediaRoomQuantity"]'),
        "Den Quantity": document.querySelector('input[name="DenQuantity"]'),
        "Bar Room Quantity": document.querySelector('input[name="BarRoomQuantity"]'),
        "Library Quantity": document.querySelector('input[name="LibraryQuantity"]'),
        "Game Room Quantity": document.querySelector('input[name="GameRoomQuantity"]'),
        "Music Room Quantity": document.querySelector('input[name="MusicRoomQuantity"]'),
        "Hobby Room Quantity": document.querySelector('input[name="HobbyRoomQuantity"]'),
        "Home Office Quantity": document.querySelector('input[name="HomeOfficeQuantity"]'),
        "Home Gym Quantity": document.querySelector('input[name="HomeGymQuantity"]'),
        "Home Theatre Quantity": document.querySelector('input[name="HomeTheatreQuantity"]'),
        "Art Studio Quantity": document.querySelector('input[name="ArtStudioQuantity"]'),
        "Billiard Room Quantity": document.querySelector('input[name="BilliardRoomQuantity"]'),
        "Observatory Quantity": document.querySelector('input[name="ObservatoryQuantity"]'),
        "Trophy Room Quantity": document.querySelector('input[name="TrophyRoomQuantity"]'),
        "Sauna Quantity": document.querySelector('input[name="SaunaQuantity"]'),
        "Jacuzzi Room Quantity": document.querySelector('input[name="JacuzziRoomQuantity"]'),
        "Larder Quantity": document.querySelector('input[name="LarderQuantity"]'),
        "Bunker Quantity": document.querySelector('input[name="BunkerQuantity"]'),
    };

    houseSizeDropdown.addEventListener("change", updateQuantities);
    projectTypeDropdown.addEventListener("change", updateQuantities);

    const quantities = {
        "3bhk": {
            warmshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 3,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 0, // Updated for warm shell
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 0,
                "VESTIBULE Quantity": 0,
                "DRAWING ROOM Quantity": 1,
            },
            bareshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 3,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 2,
                "VESTIBULE Quantity": 0,
                "DRAWING ROOM Quantity": 1,
            },
            interior: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 3,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 2,
                "VESTIBULE Quantity": 0,
                "DRAWING ROOM Quantity": 1,
            },
            archhitecture: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 3,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 2,
                "VESTIBULE Quantity": 0,
                "DRAWING ROOM Quantity": 1,
            },
        },
        // Add quantities for other house sizes if needed
        "4bhk": {
            warmshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 4,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 0,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 0,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            bareshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 4,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 3,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            interior: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 4,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 3,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            archhitecture: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 4,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 3,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
        },
        // Add quantities for other house sizes and project types if needed
        "5bhk": {
            warmshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 5,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 0,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 0,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            bareshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 5,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 4,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            interior: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 5,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 4,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            archhitecture: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 5,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 4,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
        },
        "6bhk": {
            warmshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 6,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 0,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 0,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            bareshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 6,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 5,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            interior: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 6,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 5,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            archhitecture: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 6,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 5,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
        },
        "7bhk": {
            warmshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 7,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 0,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 0,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            bareshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 7,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 6,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            interior: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 7,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 6,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            archhitecture: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 7,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 6,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
        },
    };
    const locationDropdown = document.getElementById("city");
    const planDropdown = document.getElementById("projectPlan");
    

    // Define cost factors based on the plan
    const costFactors = {
        premium: 1,
        "premiumplus": 1.2,
        luxury: 1.5,
        "ultraluxury": 2,
    };

    // Define base costs for each location
    const baseCosts = {
        ahmedabad: 20000,
        mumbai: 30000,
        hyderabad: 25000,
        "metrooutskirt": 20000,
        "metro1": 30000,
        "metro2": 25000,
    };

    function updateQuantities() {
        // Get the selected values from the dropdowns
        const selectedHouseSize = houseSizeDropdown.value;
        const selectedProjectType = projectTypeDropdown.value;
        const clientName = document.getElementById('ClientName').textContent;
    
        

        // Check if the selected house size and project type exist in the quantities object
        if (quantities[selectedHouseSize] && quantities[selectedHouseSize][selectedProjectType]) {
            const selectedQuantities = quantities[selectedHouseSize][selectedProjectType];

            // Update input field values based on selectedQuantities
            for (const type in selectedQuantities) {
                inputFields[type].value = selectedQuantities[type];
            }
        } else {
            // Reset the input values if the selected options are not found
            for (const type in inputFields) {
                inputFields[type].value = "";
            }
        }
    }

    const unitValues = {
        "DRAWING ROOM Quantity": 1,
        "KITCHEN Quantity": 1,
        "bedroom Quantity": 1,
        "entrance Quantity": 0.25,
        "DINING AREA Quantity": 1,
        "WASH YARD Quantity": 0.25,
        "COMMON BATH-TOILET Quantity": 0.5,
        "BALCONY Quantity": 0.5,
        "attached bathroom Quantity": 0.5,
        "VESTIBULE Quantity": 0.25,
        "VARANDAH Quantity": 0.5,
        "STUDY Quantity": 0.25,
        "SERVANT ROOM Quantity": 0.2,
        "SERVANT BATH Quantity": 0.2,
        "POWDER ROOM Quantity": 0.25,
        "DRESSER/ WALK-IN WARDROB Quantity": 0.5,
        "pantry Quantity": 0.25,
        "Foyer/Entryway Quantity": 0.5,
        "LIVING ROOM Quantity": 1,
        "FAMILY SIT-OUT Quantity": 1,
        "Hallway/Corridor Quantity": 0.5,
        "Small Balcony Quantity": 0.25,
        "Medium Balcony Quantity": 0.5,
        "Large Balcony Quantity": 1,
        "Small Bathroom Quantity": 0.25,
        "Medium Bathroom Quantity": 0.5,
        "Large Bathroom Quantity": 1,
        "Small Terrace Quantity": 0.25,
        "Medium Terrace Quantity": 0.5,
        "Large Terrace Quantity": 1,
        "Pooja Quantity": 0.25,
        "Staircase Quantity": 1,
        "OUTER KITCHEN Quantity": 0.5,
        "Cloakroom Quantity": 0.25,
        "Plant Room Quantity": 0.5,
        "Safe Room Quantity": 0.25,
        "Panic Room Quantity": 0.25,
        "Server Room Quantity": 0.25,
        "Pump Room Quantity": 0.25,
        "Guest Room Quantity": 1,
        "Children's Room/Nursery Quantity": 1,
        "Wine Cellar Quantity": 0.5,
        "Craft Room Quantity": 1,
        "Workshop Quantity": 1,
        "Media Room Quantity": 1,
        "Den Quantity": 0.5,
        "Bar Room Quantity": 1,
        "Library Quantity": 1,
        "Game Room Quantity": 1,
        "Music Room Quantity": 1,
        "Hobby Room Quantity": 1,
        "Home Office Quantity": 1,
        "Home Gym Quantity": 1,
        "Home Theatre Quantity": 1,
        "Art Studio Quantity": 1,
        "Billiard Room Quantity": 1,
        "Observatory Quantity": 1,
        "Trophy Room Quantity": 1,
        "Sauna Quantity": 1,
        "Jacuzzi Room Quantity": 1,
        "Larder Quantity": 1,
        "Bunker Quantity": 1,
    };

const resultElement = document.getElementById("result");
    locationDropdown.addEventListener("change", calculateEstimate);
    planDropdown.addEventListener("change", calculateEstimate);
    const selectedHouseSize = houseSizeDropdown.value;
   projectTypeDropdown.addEventListener("change",calculateEstimate);
// Add an event listener to the "Calculate Estimate" button
document.getElementById("calculate-btn").addEventListener("click", calculateEstimate);

// Function to calculate the total units used and total cost
function calculateEstimate() {
    const selectedLocation = locationDropdown.value.toLowerCase();
    const selectedPlan = planDropdown.value.toLowerCase();
    const selectedProjectType = projectTypeDropdown.value.toLowerCase();
    const clientName = document.getElementById('ClientName').textContent;
    
    let totalUnits = 0;

    for (const type in inputFields) {
        const inputValue = inputFields[type].value;
        console.log(`Input Value for ${type}: "${inputValue}"`);
        const quantity = parseFloat(inputValue) || 0;
        console.log(`Parsed Quantity for ${type}: ${quantity}`);
        const unitValue = unitValues[type];
        console.log(`Unit Value for ${type}: ${unitValue}`);
        totalUnits += quantity * unitValue;
    }

    // Calculate the base cost based on the selected location
    const baseCost = baseCosts[selectedLocation];
    if (!baseCost) {
        resultElement.textContent = "Invalid location selected.";
        return;
    }

    // Calculate the cost factor based on the selected plan
    const costFactor = costFactors[selectedPlan];
    if (!costFactor) {
        resultElement.textContent = "Invalid plan selected.";
        return;
    }

    // Calculate the total cost
    const totalCost = baseCost * totalUnits * costFactor;
    const signingAmount = 0.2355 * totalCost;

    // Calculate the finalization of layout amount (58.888% of total cost)
    const layoutFinalizationAmount = 0.58888 * totalCost;

    // Calculate the 3D finalization cost (17.55% of total cost)
    const finalization3DCost = 0.1755 * totalCost;

    // Display the total units and total cost
    if (!isNaN(totalUnits) && !isNaN(totalCost)) {
        resultElement.textContent = ` Total Cost: ${totalCost}`;
        
    } else {
        resultElement.textContent = "Invalid input. Please enter numeric values.";
    }
    document.getElementById('calculationResult').value = totalCost;

    // Inside the "calculateEstimate" function
    const selectedItems = {}; // Initialize an empty object

    for (const type in inputFields) {
        const inputValue = inputFields[type].value;
        const quantity = parseFloat(inputValue) || 0;
        selectedItems[type] = quantity; // Store the item name as the key and quantity as the value
    }
    const form = document.forms['contact-form'];
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
      
        // Get the value of the client name input field
        const clientName = form.elements['ClientName'].value;
      
        // Log the client name to the console
        console.log('Client Name:', clientName);
           this.submit();
      });

    // Encode the selected items as a JSON string
    const selectedItemsParam = encodeURIComponent(JSON.stringify(selectedItems));
    const resultUrl = `result.html?selectedItems=${selectedItemsParam}&totalUnits=${totalUnits}&totalCost=${totalCost}&signingAmount=${signingAmount}&layoutFinalizationAmount=${layoutFinalizationAmount}&finalization3DCost=${finalization3DCost}&selectedLocation=${selectedLocation}&selectedHouseSize=${selectedHouseSize}&selectedProjectType=${selectedProjectType}&selectedPlan=${selectedPlan}&clientName=${clientName}`;
    document.addEventListener("DOMContentLoaded", function () {
    // Get references to the "House Size" dropdown and input fields
    const houseSizeDropdown = document.getElementById("projectSize");
    const projectTypeDropdown = document.getElementById("projectType");

    // Define input field names with spaces as they appear in your HTML
    const inputFields = {
        "KITCHEN Quantity": document.querySelector('input[name="KITCHENQuantity"]'),
        "bedroom Quantity": document.querySelector('input[name="bedroomQuantity"]'),
        "entrance Quantity": document.querySelector('input[name="entranceQuantity"]'),
        "DINING AREA Quantity": document.querySelector('input[name="DININGAREAQuantity"]'),
        "WASH YARD Quantity": document.querySelector('input[name="WASHYARDQuantity"]'),
        "COMMON BATH-TOILET Quantity": document.querySelector('input[name="commonbathroomQuantity"]'),
        "BALCONY Quantity": document.querySelector('input[name="BALCONYQuantity"]'),
        "attached bathroom Quantity": document.querySelector('input[name="ATT.BATHQuantity"]'),
        "VESTIBULE Quantity": document.querySelector('input[name="VESTIBULEQuantity"]'),
        "DRAWING ROOM Quantity": document.querySelector('input[name="DRAWINGROOMQuantity"]'),
        "VARANDAH Quantity": document.querySelector('input[name="VARANDAHQuantity"]'),
        "STUDY Quantity": document.querySelector('input[name="STUDYQuantity"]'),
        "SERVANT ROOM Quantity": document.querySelector('input[name="SERVANTROOMQuantity"]'),
        "SERVANT BATH Quantity": document.querySelector('input[name="SERVANTBATHQuantity"]'),
        "POWDER ROOM Quantity": document.querySelector('input[name="POWDERROOMQuantity"]'),
        "DRESSER/ WALK-IN WARDROB Quantity": document.querySelector('input[name="DRESSERQuantity"]'),
        "pantry Quantity": document.querySelector('input[name="pantryQuantity"]'),
        "Foyer/Entryway Quantity": document.querySelector('input[name="FoyerQuantity"]'),
        "LIVING ROOM Quantity": document.querySelector('input[name="LIVINGROOMQuantity"]'),
        "FAMILY SIT-OUT Quantity": document.querySelector('input[name="FAMILYSIT-OUTQuantity"]'),
        "Hallway/Corridor Quantity": document.querySelector('input[name="HallwayQuantity"]'),
        "Small Balcony Quantity": document.querySelector('input[name="SmallBalconyQuantity"]'),
        "Medium Balcony Quantity": document.querySelector('input[name="MediumBalconyQuantity"]'),
        "Large Balcony Quantity": document.querySelector('input[name="LargeBalconyQuantity"]'),
        "Small Bathroom Quantity": document.querySelector('input[name="SmallBathroomQuantity"]'),
        "Medium Bathroom Quantity": document.querySelector('input[name="MediumBathroomQuantity"]'),
        "Large Bathroom Quantity": document.querySelector('input[name="LargeBathroomQuantity"]'),
        "Small Terrace Quantity": document.querySelector('input[name="SmallTerraceQuantity"]'),
        "Medium Terrace Quantity": document.querySelector('input[name="MediumTerraceQuantity"]'),
        "Large Terrace Quantity": document.querySelector('input[name="LargeTerraceQuantity"]'),
        "Pooja Quantity": document.querySelector('input[name="PoojaQuantity"]'),
        "Staircase Quantity": document.querySelector('input[name="StaircaseQuantity"]'),
        "OUTER KITCHEN Quantity": document.querySelector('input[name="OUTERKITCHENQuantity"]'),
        "Cloakroom Quantity": document.querySelector('input[name="CloakroomQuantity"]'),
        "Plant Room Quantity": document.querySelector('input[name="PlantRoomQuantity"]'),
        "Safe Room Quantity": document.querySelector('input[name="SafeRoomQuantity"]'),
        "Panic Room Quantity": document.querySelector('input[name="PanicRoomQuantity"]'),
        "Server Room Quantity": document.querySelector('input[name="ServerRoomQuantity"]'),
        "Pump Room Quantity": document.querySelector('input[name="PumpRoomQuantity"]'),
        "Guest Room Quantity": document.querySelector('input[name="GuestRoomQuantity"]'),
        "Children's Room/Nursery Quantity": document.querySelector('input[name="ChildrenRoomQuantity"]'),
        "Wine Cellar Quantity": document.querySelector('input[name="WineCellarQuantity"]'),
        "Craft Room Quantity": document.querySelector('input[name="CraftRoomQuantity"]'),
        "Workshop Quantity": document.querySelector('input[name="WorkshopQuantity"]'),
        "Media Room Quantity": document.querySelector('input[name="MediaRoomQuantity"]'),
        "Den Quantity": document.querySelector('input[name="DenQuantity"]'),
        "Bar Room Quantity": document.querySelector('input[name="BarRoomQuantity"]'),
        "Library Quantity": document.querySelector('input[name="LibraryQuantity"]'),
        "Game Room Quantity": document.querySelector('input[name="GameRoomQuantity"]'),
        "Music Room Quantity": document.querySelector('input[name="MusicRoomQuantity"]'),
        "Hobby Room Quantity": document.querySelector('input[name="HobbyRoomQuantity"]'),
        "Home Office Quantity": document.querySelector('input[name="HomeOfficeQuantity"]'),
        "Home Gym Quantity": document.querySelector('input[name="HomeGymQuantity"]'),
        "Home Theatre Quantity": document.querySelector('input[name="HomeTheatreQuantity"]'),
        "Art Studio Quantity": document.querySelector('input[name="ArtStudioQuantity"]'),
        "Billiard Room Quantity": document.querySelector('input[name="BilliardRoomQuantity"]'),
        "Observatory Quantity": document.querySelector('input[name="ObservatoryQuantity"]'),
        "Trophy Room Quantity": document.querySelector('input[name="TrophyRoomQuantity"]'),
        "Sauna Quantity": document.querySelector('input[name="SaunaQuantity"]'),
        "Jacuzzi Room Quantity": document.querySelector('input[name="JacuzziRoomQuantity"]'),
        "Larder Quantity": document.querySelector('input[name="LarderQuantity"]'),
        "Bunker Quantity": document.querySelector('input[name="BunkerQuantity"]'),
    };

    houseSizeDropdown.addEventListener("change", updateQuantities);
    projectTypeDropdown.addEventListener("change", updateQuantities);

    const quantities = {
        "3bhk": {
            warmshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 3,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 0, // Updated for warm shell
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 0,
                "VESTIBULE Quantity": 0,
                "DRAWING ROOM Quantity": 1,
            },
            bareshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 3,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 2,
                "VESTIBULE Quantity": 0,
                "DRAWING ROOM Quantity": 1,
            },
            interior: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 3,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 2,
                "VESTIBULE Quantity": 0,
                "DRAWING ROOM Quantity": 1,
            },
            archhitecture: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 3,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 2,
                "VESTIBULE Quantity": 0,
                "DRAWING ROOM Quantity": 1,
            },
        },
        // Add quantities for other house sizes if needed
        "4bhk": {
            warmshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 4,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 0,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 0,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            bareshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 4,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 3,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            interior: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 4,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 3,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            archhitecture: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 4,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 3,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
        },
        // Add quantities for other house sizes and project types if needed
        "5bhk": {
            warmshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 5,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 0,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 0,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            bareshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 5,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 4,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            interior: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 5,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 4,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            archhitecture: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 5,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 4,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
        },
        "6bhk": {
            warmshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 6,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 0,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 0,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            bareshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 6,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 5,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            interior: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 6,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 5,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            archhitecture: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 6,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 5,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
        },
        "7bhk": {
            warmshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 7,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 0,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 0,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            bareshell: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 7,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 6,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            interior: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 7,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 6,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
            archhitecture: {
                "KITCHEN Quantity": 1,
                "bedroom Quantity": 7,
                "entrance Quantity": 1,
                "DINING AREA Quantity": 1,
                "WASH YARD Quantity": 1,
                "COMMON BATH-TOILET Quantity": 1,
                "BALCONY Quantity": 1,
                "attached bathroom Quantity": 6,
                "VESTIBULE Quantity": 1,
                "DRAWING ROOM Quantity": 1,
            },
        },
    };
    const locationDropdown = document.getElementById("city");
    const planDropdown = document.getElementById("projectPlan");

    // Define cost factors based on the plan
    const costFactors = {
        premium: 1,
        "premiumplus": 1.2,
        luxury: 1.5,
        "ultraluxury": 2,
    };

    // Define base costs for each location
    const baseCosts = {
        ahmedabad: 20000,
        mumbai: 30000,
        hyderabad: 25000,
        "metrooutskirt": 20000,
        "metro1": 30000,
        "metro2": 25000,
    };

    function updateQuantities() {
        // Get the selected values from the dropdowns
        const selectedHouseSize = houseSizeDropdown.value;
        const selectedProjectType = projectTypeDropdown.value;

        // Check if the selected house size and project type exist in the quantities object
        if (quantities[selectedHouseSize] && quantities[selectedHouseSize][selectedProjectType]) {
            const selectedQuantities = quantities[selectedHouseSize][selectedProjectType];

            // Update input field values based on selectedQuantities
            for (const type in selectedQuantities) {
                inputFields[type].value = selectedQuantities[type];
            }
        } else {
            // Reset the input values if the selected options are not found
            for (const type in inputFields) {
                inputFields[type].value = "";
            }
        }
    }

    const unitValues = {
        "DRAWING ROOM Quantity": 1,
        "KITCHEN Quantity": 1,
        "bedroom Quantity": 1,
        "entrance Quantity": 0.25,
        "DINING AREA Quantity": 1,
        "WASH YARD Quantity": 0.25,
        "COMMON BATH-TOILET Quantity": 0.5,
        "BALCONY Quantity": 0.5,
        "attached bathroom Quantity": 0.5,
        "VESTIBULE Quantity": 0.25,
        "VARANDAH Quantity": 0.5,
        "STUDY Quantity": 0.25,
        "SERVANT ROOM Quantity": 0.2,
        "SERVANT BATH Quantity": 0.2,
        "POWDER ROOM Quantity": 0.25,
        "DRESSER/ WALK-IN WARDROB Quantity": 0.5,
        "pantry Quantity": 0.25,
        "Foyer/Entryway Quantity": 0.5,
        "LIVING ROOM Quantity": 1,
        "FAMILY SIT-OUT Quantity": 1,
        "Hallway/Corridor Quantity": 0.5,
        "Small Balcony Quantity": 0.25,
        "Medium Balcony Quantity": 0.5,
        "Large Balcony Quantity": 1,
        "Small Bathroom Quantity": 0.25,
        "Medium Bathroom Quantity": 0.5,
        "Large Bathroom Quantity": 1,
        "Small Terrace Quantity": 0.25,
        "Medium Terrace Quantity": 0.5,
        "Large Terrace Quantity": 1,
        "Pooja Quantity": 0.25,
        "Staircase Quantity": 1,
        "OUTER KITCHEN Quantity": 0.5,
        "Cloakroom Quantity": 0.25,
        "Plant Room Quantity": 0.5,
        "Safe Room Quantity": 0.25,
        "Panic Room Quantity": 0.25,
        "Server Room Quantity": 0.25,
        "Pump Room Quantity": 0.25,
        "Guest Room Quantity": 1,
        "Children's Room/Nursery Quantity": 1,
        "Wine Cellar Quantity": 0.5,
        "Craft Room Quantity": 1,
        "Workshop Quantity": 1,
        "Media Room Quantity": 1,
        "Den Quantity": 0.5,
        "Bar Room Quantity": 1,
        "Library Quantity": 1,
        "Game Room Quantity": 1,
        "Music Room Quantity": 1,
        "Hobby Room Quantity": 1,
        "Home Office Quantity": 1,
        "Home Gym Quantity": 1,
        "Home Theatre Quantity": 1,
        "Art Studio Quantity": 1,
        "Billiard Room Quantity": 1,
        "Observatory Quantity": 1,
        "Trophy Room Quantity": 1,
        "Sauna Quantity": 1,
        "Jacuzzi Room Quantity": 1,
        "Larder Quantity": 1,
        "Bunker Quantity": 1,
    };

    // Get a reference to the result element

const resultElement = document.getElementById("result");
    locationDropdown.addEventListener("change", calculateEstimate);
    planDropdown.addEventListener("change", calculateEstimate);
    const selectedHouseSize = houseSizeDropdown.value;
    
   
// Add an event listener to the "Calculate Estimate" button
document.getElementById("calculate-btn").addEventListener("click", calculateEstimate);

// Function to calculate the total units used and total cost
function calculateEstimate() {
    const selectedLocation = locationDropdown.value.toLowerCase();
    const selectedPlan = planDropdown.value.toLowerCase();
    const selectedProjectType = projectTypeDropdown.value.toLowerCase();
    const clientName = document.getElementById("ClientName").textContent;
    console.log(`Selected Project Type: ${clientName}`);

    let totalUnits = 0;

    for (const type in inputFields) {
        const inputValue = inputFields[type].value;
        console.log(`Input Value for ${type}: "${inputValue}"`);
        const quantity = parseFloat(inputValue) || 0;
        console.log(`Parsed Quantity for ${type}: ${quantity}`);
        const unitValue = unitValues[type];
        console.log(`Unit Value for ${type}: ${unitValue}`);
        totalUnits += quantity * unitValue;
    }

    // Calculate the base cost based on the selected location
    const baseCost = baseCosts[selectedLocation];
    if (!baseCost) {
        resultElement.textContent = "Invalid location selected.";
        return;
    }

    // Calculate the cost factor based on the selected plan
    const costFactor = costFactors[selectedPlan];
    if (!costFactor) {
        resultElement.textContent = "Invalid plan selected.";
        return;
    }

    // Calculate the total cost
    const totalCost = baseCost * totalUnits * costFactor;
    const signingAmount = 0.2355 * totalCost;

    // Calculate the finalization of layout amount (58.888% of total cost)
    const layoutFinalizationAmount = 0.58888 * totalCost;

    // Calculate the 3D finalization cost (17.55% of total cost)
    const finalization3DCost = 0.1755 * totalCost;

    // Display the total units and total cost
    if (!isNaN(totalUnits) && !isNaN(totalCost)) {
        resultElement.textContent = ` Total Cost: ${totalCost}`;

    } else {
        resultElement.textContent = "Invalid input. Please enter numeric values.";
    }

    // Inside the "calculateEstimate" function
    const selectedItems = {}; // Initialize an empty object

    for (const type in inputFields) {
        const inputValue = inputFields[type].value;
        const quantity = parseFloat(inputValue) || 0;
        selectedItems[type] = quantity; // Store the item name as the key and quantity as the value
    }
    document.getElementById('calculationResult').value = totalCost ;
    const form = document.forms['contact-form'];
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
      
        // Get the value of the client name input field
        const clientName = form.elements['ClientName'].value;
      
        // Log the client name to the console
        console.log('Client Name:', clientName);
        this.submit();
      });
    // Encode the selected items as a JSON string
    const selectedItemsParam = encodeURIComponent(JSON.stringify(selectedItems));
    const resultUrl = `result.html?selectedItems=${selectedItemsParam}&totalUnits=${totalUnits}&totalCost=${totalCost}&signingAmount=${signingAmount}&layoutFinalizationAmount=${layoutFinalizationAmount}&finalization3DCost=${finalization3DCost}&selectedLocation=${selectedLocation}&selectedHouseSize=${selectedHouseSize}&selectedPlan=${selectedPlan}&selectedProjectType=${selectedProjectType}&clientName=${clientName}`;
    
    // Open "result.html" in a new tab
    window.open(resultUrl, '_blank');

        
    
}}
)


    // Open "result.html" in a new tab
    window.open(resultUrl, '_blank');   

        
    
}}
)

