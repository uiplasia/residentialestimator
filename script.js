document.addEventListener("DOMContentLoaded", function () {
    // Get references to the "House Size" dropdown and input fields
    const houseSizeDropdown = document.getElementById("projectSize");
    const projectTypeDropdown = document.getElementById("projectType");
    
    // Define input field names with spaces as they appear in your HTML
    const inputFields = {
        "KITCHEN ": document.querySelector('input[name="KITCHEN"]'),
        "bedroom ": document.querySelector('input[name="bedroom"]'),
        "entrance ": document.querySelector('input[name="entrance"]'),
        "DINING AREA ": document.querySelector('input[name="DININGAREA"]'),
        "WASH YARD ": document.querySelector('input[name="WASHYARD"]'),
        "COMMON BATH-TOILET ": document.querySelector('input[name="commonbathroom"]'),
        "BALCONY ": document.querySelector('input[name="BALCONY"]'),
        "attached bathroom ": document.querySelector('input[name="ATT.BATH"]'),
        "VESTIBULE ": document.querySelector('input[name="VESTIBULE"]'),
        "DRAWING ROOM ": document.querySelector('input[name="DRAWINGROOM"]'),
        "VARANDAH ": document.querySelector('input[name="VARANDAH"]'),
        "STUDY ": document.querySelector('input[name="STUDY"]'),
        "SERVANT ROOM ": document.querySelector('input[name="SERVANTROOM"]'),
        "SERVANT BATH ": document.querySelector('input[name="SERVANTBATH"]'),
        "POWDER ROOM ": document.querySelector('input[name="POWDERROOM"]'),
        "DRESSER/ WALK-IN WARDROB ": document.querySelector('input[name="DRESSER"]'),
        "pantry ": document.querySelector('input[name="pantry"]'),
        "Foyer/Entryway ": document.querySelector('input[name="Foyer"]'),
        "LIVING ROOM ": document.querySelector('input[name="LIVINGROOM"]'),
        "FAMILY SIT-OUT ": document.querySelector('input[name="FAMILYSIT-OUT"]'),
        "Hallway/Corridor ": document.querySelector('input[name="Hallway"]'),
        "Small Balcony ": document.querySelector('input[name="SmallBalcony"]'),
        "Medium Balcony ": document.querySelector('input[name="MediumBalcony"]'),
        "Large Balcony ": document.querySelector('input[name="LargeBalcony"]'),
        "Small Bathroom ": document.querySelector('input[name="SmallBathroom"]'),
        "Medium Bathroom ": document.querySelector('input[name="MediumBathroom"]'),
        "Large Bathroom ": document.querySelector('input[name="LargeBathroom"]'),
        "Small Terrace ": document.querySelector('input[name="SmallTerrace"]'),
        "Medium Terrace ": document.querySelector('input[name="MediumTerrace"]'),
        "Large Terrace ": document.querySelector('input[name="LargeTerrace"]'),
        "Pooja ": document.querySelector('input[name="Pooja"]'),
        "Staircase ": document.querySelector('input[name="Staircase"]'),
        "OUTER KITCHEN ": document.querySelector('input[name="OUTERKITCHEN"]'),
        "Cloakroom ": document.querySelector('input[name="Cloakroom"]'),
        "Plant Room ": document.querySelector('input[name="PlantRoom"]'),
        "Safe Room ": document.querySelector('input[name="SafeRoom"]'),
        "Panic Room ": document.querySelector('input[name="PanicRoom"]'),
        "Server Room ": document.querySelector('input[name="ServerRoom"]'),
        "Pump Room ": document.querySelector('input[name="PumpRoom"]'),
        "Guest Room ": document.querySelector('input[name="GuestRoom"]'),
        "Children's Room/Nursery ": document.querySelector('input[name="ChildrenRoom"]'),
        "Wine Cellar ": document.querySelector('input[name="WineCellar"]'),
        "Craft Room ": document.querySelector('input[name="CraftRoom"]'),
        "Workshop ": document.querySelector('input[name="Workshop"]'),
        "Media Room ": document.querySelector('input[name="MediaRoom"]'),
        "Den ": document.querySelector('input[name="Den"]'),
        "Bar Room ": document.querySelector('input[name="BarRoom"]'),
        "Library ": document.querySelector('input[name="Library"]'),
        "Game Room ": document.querySelector('input[name="GameRoom"]'),
        "Music Room ": document.querySelector('input[name="MusicRoom"]'),
        "Hobby Room ": document.querySelector('input[name="HobbyRoom"]'),
        "Home Office ": document.querySelector('input[name="HomeOffice"]'),
        "Home Gym ": document.querySelector('input[name="HomeGym"]'),
        "Home Theatre ": document.querySelector('input[name="HomeTheatre"]'),
        "Art Studio ": document.querySelector('input[name="ArtStudio"]'),
        "Billiard Room ": document.querySelector('input[name="BilliardRoom"]'),
        "Observatory ": document.querySelector('input[name="Observatory"]'),
        "Trophy Room ": document.querySelector('input[name="TrophyRoom"]'),
        "Sauna ": document.querySelector('input[name="Sauna"]'),
        "Jacuzzi Room ": document.querySelector('input[name="JacuzziRoom"]'),
        "Larder ": document.querySelector('input[name="Larder"]'),
        "Bunker ": document.querySelector('input[name="Bunker"]'),
    };

    houseSizeDropdown.addEventListener("change", updateQuantities);
    projectTypeDropdown.addEventListener("change", updateQuantities);

    const quantities = {
        "3bhk": {
            warmshell: {
                "KITCHEN ": 1,
                "bedroom ": 3,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 0, // Updated for warm shell
                "BALCONY ": 1,
                "attached bathroom ": 0,
                "VESTIBULE ": 0,
                "DRAWING ROOM ": 1,
            },
            bareshell: {
                "KITCHEN ": 1,
                "bedroom ": 3,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 2,
                "VESTIBULE ": 0,
                "DRAWING ROOM ": 1,
            },
            interior: {
                "KITCHEN ": 1,
                "bedroom ": 3,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 2,
                "VESTIBULE ": 0,
                "DRAWING ROOM ": 1,
            },
            archhitecture: {
                "KITCHEN ": 1,
                "bedroom ": 3,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 2,
                "VESTIBULE ": 0,
                "DRAWING ROOM ": 1,
            },
        },
        // Add quantities for other house sizes if needed
        "4bhk": {
            warmshell: {
                "KITCHEN ": 1,
                "bedroom ": 4,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 0,
                "BALCONY ": 1,
                "attached bathroom ": 0,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            bareshell: {
                "KITCHEN ": 1,
                "bedroom ": 4,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 3,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            interior: {
                "KITCHEN ": 1,
                "bedroom ": 4,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 3,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            archhitecture: {
                "KITCHEN ": 1,
                "bedroom ": 4,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 3,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
        },
        // Add quantities for other house sizes and project types if needed
        "5bhk": {
            warmshell: {
                "KITCHEN ": 1,
                "bedroom ": 5,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 0,
                "BALCONY ": 1,
                "attached bathroom ": 0,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            bareshell: {
                "KITCHEN ": 1,
                "bedroom ": 5,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 4,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            interior: {
                "KITCHEN ": 1,
                "bedroom ": 5,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 4,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            archhitecture: {
                "KITCHEN ": 1,
                "bedroom ": 5,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 4,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
        },
        "6bhk": {
            warmshell: {
                "KITCHEN ": 1,
                "bedroom ": 6,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 0,
                "BALCONY ": 1,
                "attached bathroom ": 0,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            bareshell: {
                "KITCHEN ": 1,
                "bedroom ": 6,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 5,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            interior: {
                "KITCHEN ": 1,
                "bedroom ": 6,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 5,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            archhitecture: {
                "KITCHEN ": 1,
                "bedroom ": 6,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 5,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
        },
        "7bhk": {
            warmshell: {
                "KITCHEN ": 1,
                "bedroom ": 7,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 0,
                "BALCONY ": 1,
                "attached bathroom ": 0,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            bareshell: {
                "KITCHEN ": 1,
                "bedroom ": 7,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 6,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            interior: {
                "KITCHEN ": 1,
                "bedroom ": 7,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 6,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            archhitecture: {
                "KITCHEN ": 1,
                "bedroom ": 7,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 6,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
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
        "DRAWING ROOM ": 1,
        "KITCHEN ": 1,
        "bedroom ": 1,
        "entrance ": 0.25,
        "DINING AREA ": 1,
        "WASH YARD ": 0.25,
        "COMMON BATH-TOILET ": 0.5,
        "BALCONY ": 0.5,
        "attached bathroom ": 0.5,
        "VESTIBULE ": 0.25,
        "VARANDAH ": 0.5,
        "STUDY ": 0.25,
        "SERVANT ROOM ": 0.2,
        "SERVANT BATH ": 0.2,
        "POWDER ROOM ": 0.25,
        "DRESSER/ WALK-IN WARDROB ": 0.5,
        "pantry ": 0.25,
        "Foyer/Entryway ": 0.5,
        "LIVING ROOM ": 1,
        "FAMILY SIT-OUT ": 1,
        "Hallway/Corridor ": 0.5,
        "Small Balcony ": 0.25,
        "Medium Balcony ": 0.5,
        "Large Balcony ": 1,
        "Small Bathroom ": 0.25,
        "Medium Bathroom ": 0.5,
        "Large Bathroom ": 1,
        "Small Terrace ": 0.25,
        "Medium Terrace ": 0.5,
        "Large Terrace ": 1,
        "Pooja ": 0.25,
        "Staircase ": 1,
        "OUTER KITCHEN ": 0.5,
        "Cloakroom ": 0.25,
        "Plant Room ": 0.5,
        "Safe Room ": 0.25,
        "Panic Room ": 0.25,
        "Server Room ": 0.25,
        "Pump Room ": 0.25,
        "Guest Room ": 1,
        "Children's Room/Nursery ": 1,
        "Wine Cellar ": 0.5,
        "Craft Room ": 1,
        "Workshop ": 1,
        "Media Room ": 1,
        "Den ": 0.5,
        "Bar Room ": 1,
        "Library ": 1,
        "Game Room ": 1,
        "Music Room ": 1,
        "Hobby Room ": 1,
        "Home Office ": 1,
        "Home Gym ": 1,
        "Home Theatre ": 1,
        "Art Studio ": 1,
        "Billiard Room ": 1,
        "Observatory ": 1,
        "Trophy Room ": 1,
        "Sauna ": 1,
        "Jacuzzi Room ": 1,
        "Larder ": 1,
        "Bunker ": 1,
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
    const signingAmount = 0.4 * totalCost;

    // Calculate the finalization of layout amount (58.888% of total cost)
    const layoutFinalizationAmount = 0.4 * totalCost;

    // Calculate the 3D finalization cost (17.55% of total cost)
    const finalization3DCost = 0.2 * totalCost;

    const selectedcalculationTaxAmount = 0.18 * totalCost;
    const selectedtotalCalculationWithTax = selectedcalculationTaxAmount + totalCost;

    const selectedsigningTaxAmount = 0.18 * signingAmount;
    const selectedtotalSigningWithTax = selectedsigningTaxAmount + signingAmount;

    const  selectedphaseOneTaxAmount = 0.18 * layoutFinalizationAmount
    const  selectedphaseOneWithTax = selectedphaseOneTaxAmount + layoutFinalizationAmount;

    const selectedtwoDaysBeforeCompleteTaxAmount = 0.18 * finalization3DCost;
    const  selectedtwoDaysBeforeWithTax = selectedtwoDaysBeforeCompleteTaxAmount + finalization3DCost;
    // Display the total units and total cost
    if (!isNaN(totalUnits) && !isNaN(totalCost)) {
        resultElement.textContent = ` Total Cost: ${totalCost}`;
        
    } else {
        resultElement.textContent = "Invalid input. Please enter numeric values.";
    }
    document.getElementById('calculationResult').value = totalCost;
    document.getElementById('signingAmountResult').value = signingAmount;
    document.getElementById('layoutFinalizationAmountResult').value = layoutFinalizationAmount;
    document.getElementById('3dFinalizationAmountResult').value = finalization3DCost;
    document.getElementById('units').value = totalUnits;
    document.getElementById('calculationTaxAmount').value = selectedcalculationTaxAmount;
    document.getElementById('totalCalculationWithTax').value = selectedtotalCalculationWithTax;
    document.getElementById('signingTaxAmount').value = selectedsigningTaxAmount;
    document.getElementById('totalSigningWithTax').value = selectedtotalSigningWithTax;
    document.getElementById('layoutFinalizationTaxAmount').value = selectedphaseOneTaxAmount;
    document.getElementById('layoutFinalizationWithTax').value = selectedphaseOneWithTax;
    document.getElementById('3dFinalizationTaxAmount').value = selectedtwoDaysBeforeCompleteTaxAmount;
    document.getElementById('3dFinalizationWithTax').value = selectedtwoDaysBeforeWithTax;

    // Now submit the form
    document.forms["contact-form"].submit();

    // Inside the "calculateEstimate" function
    const selectedItems = {}; // Initialize an empty object

    for (const type in inputFields) {
        const inputValue = inputFields[type].value;
        const quantity = parseFloat(inputValue) || 0;
        selectedItems[type] = quantity; // Store the item name as the key and quantity as the value
    }
    const form = document.forms['contact-form'];
    let clientName = ''; // Declare clientName in the outer scope
    let projectID ='';

    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
      
        // Get the value of the client name input field
        clientName = form.elements['ClientName'].value;
        projectID = form.elements['ProjectID'].value;
        // Log the client name to the console
        console.log('Project ID inside:',projectID);
        console.log('Client Name inside event handler:', clientName);
      
        // Encode the selected items as a JSON string
        const selectedItemsParam = encodeURIComponent(JSON.stringify(selectedItems));
        const resultUrl = `result.html?selectedItems=${selectedItemsParam}&totalUnits=${totalUnits}&totalCost=${totalCost}&signingAmount=${signingAmount}&layoutFinalizationAmount=${layoutFinalizationAmount}&finalization3DCost=${finalization3DCost}&selectedLocation=${selectedLocation}&selectedHouseSize=${selectedHouseSize}&selectedPlan=${selectedPlan}&selectedProjectType=${selectedProjectType}&clientName=${clientName}&projectID=${projectID}`;
      
        // Open "result.html" in a new tab
        window.open(resultUrl, '_blank');
    
        // Call the function to log the client name outside the event handler
        logClientNameOutsideHandler(clientName);
        logClientNameOutsideHandler(projectID);
        this.submit();
    });
    
    function logClientNameOutsideHandler(clientName) {
        console.log('Client Name outside event handler:', clientName);
    }

    document.addEventListener("DOMContentLoaded", function () {
    // Get references to the "House Size" dropdown and input fields
    const houseSizeDropdown = document.getElementById("projectSize");
    const projectTypeDropdown = document.getElementById("projectType");

    // Define input field names with spaces as they appear in your HTML
    const inputFields = {
        "KITCHEN ": document.querySelector('input[name="KITCHEN"]'),
        "bedroom ": document.querySelector('input[name="bedroom"]'),
        "entrance ": document.querySelector('input[name="entrance"]'),
        "DINING AREA ": document.querySelector('input[name="DININGAREA"]'),
        "WASH YARD ": document.querySelector('input[name="WASHYARD"]'),
        "COMMON BATH-TOILET ": document.querySelector('input[name="commonbathroom"]'),
        "BALCONY ": document.querySelector('input[name="BALCONY"]'),
        "attached bathroom ": document.querySelector('input[name="ATT.BATH"]'),
        "VESTIBULE ": document.querySelector('input[name="VESTIBULE"]'),
        "DRAWING ROOM ": document.querySelector('input[name="DRAWINGROOM"]'),
        "VARANDAH ": document.querySelector('input[name="VARANDAH"]'),
        "STUDY ": document.querySelector('input[name="STUDY"]'),
        "SERVANT ROOM ": document.querySelector('input[name="SERVANTROOM"]'),
        "SERVANT BATH ": document.querySelector('input[name="SERVANTBATH"]'),
        "POWDER ROOM ": document.querySelector('input[name="POWDERROOM"]'),
        "DRESSER/ WALK-IN WARDROB ": document.querySelector('input[name="DRESSER"]'),
        "pantry ": document.querySelector('input[name="pantry"]'),
        "Foyer/Entryway ": document.querySelector('input[name="Foyer"]'),
        "LIVING ROOM ": document.querySelector('input[name="LIVINGROOM"]'),
        "FAMILY SIT-OUT ": document.querySelector('input[name="FAMILYSIT-OUT"]'),
        "Hallway/Corridor ": document.querySelector('input[name="Hallway"]'),
        "Small Balcony ": document.querySelector('input[name="SmallBalcony"]'),
        "Medium Balcony ": document.querySelector('input[name="MediumBalcony"]'),
        "Large Balcony ": document.querySelector('input[name="LargeBalcony"]'),
        "Small Bathroom ": document.querySelector('input[name="SmallBathroom"]'),
        "Medium Bathroom ": document.querySelector('input[name="MediumBathroom"]'),
        "Large Bathroom ": document.querySelector('input[name="LargeBathroom"]'),
        "Small Terrace ": document.querySelector('input[name="SmallTerrace"]'),
        "Medium Terrace ": document.querySelector('input[name="MediumTerrace"]'),
        "Large Terrace ": document.querySelector('input[name="LargeTerrace"]'),
        "Pooja ": document.querySelector('input[name="Pooja"]'),
        "Staircase ": document.querySelector('input[name="Staircase"]'),
        "OUTER KITCHEN ": document.querySelector('input[name="OUTERKITCHEN"]'),
        "Cloakroom ": document.querySelector('input[name="Cloakroom"]'),
        "Plant Room ": document.querySelector('input[name="PlantRoom"]'),
        "Safe Room ": document.querySelector('input[name="SafeRoom"]'),
        "Panic Room ": document.querySelector('input[name="PanicRoom"]'),
        "Server Room ": document.querySelector('input[name="ServerRoom"]'),
        "Pump Room ": document.querySelector('input[name="PumpRoom"]'),
        "Guest Room ": document.querySelector('input[name="GuestRoom"]'),
        "Children's Room/Nursery ": document.querySelector('input[name="ChildrenRoom"]'),
        "Wine Cellar ": document.querySelector('input[name="WineCellar"]'),
        "Craft Room ": document.querySelector('input[name="CraftRoom"]'),
        "Workshop ": document.querySelector('input[name="Workshop"]'),
        "Media Room ": document.querySelector('input[name="MediaRoom"]'),
        "Den ": document.querySelector('input[name="Den"]'),
        "Bar Room ": document.querySelector('input[name="BarRoom"]'),
        "Library ": document.querySelector('input[name="Library"]'),
        "Game Room ": document.querySelector('input[name="GameRoom"]'),
        "Music Room ": document.querySelector('input[name="MusicRoom"]'),
        "Hobby Room ": document.querySelector('input[name="HobbyRoom"]'),
        "Home Office ": document.querySelector('input[name="HomeOffice"]'),
        "Home Gym ": document.querySelector('input[name="HomeGym"]'),
        "Home Theatre ": document.querySelector('input[name="HomeTheatre"]'),
        "Art Studio ": document.querySelector('input[name="ArtStudio"]'),
        "Billiard Room ": document.querySelector('input[name="BilliardRoom"]'),
        "Observatory ": document.querySelector('input[name="Observatory"]'),
        "Trophy Room ": document.querySelector('input[name="TrophyRoom"]'),
        "Sauna ": document.querySelector('input[name="Sauna"]'),
        "Jacuzzi Room ": document.querySelector('input[name="JacuzziRoom"]'),
        "Larder ": document.querySelector('input[name="Larder"]'),
        "Bunker ": document.querySelector('input[name="Bunker"]'),
    };

    houseSizeDropdown.addEventListener("change", updateQuantities);
    projectTypeDropdown.addEventListener("change", updateQuantities);

    const quantities = {
        "3bhk": {
            warmshell: {
                "KITCHEN ": 1,
                "bedroom ": 3,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 0, // Updated for warm shell
                "BALCONY ": 1,
                "attached bathroom ": 0,
                "VESTIBULE ": 0,
                "DRAWING ROOM ": 1,
            },
            bareshell: {
                "KITCHEN ": 1,
                "bedroom ": 3,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 2,
                "VESTIBULE ": 0,
                "DRAWING ROOM ": 1,
            },
            interior: {
                "KITCHEN ": 1,
                "bedroom ": 3,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 2,
                "VESTIBULE ": 0,
                "DRAWING ROOM ": 1,
            },
            archhitecture: {
                "KITCHEN ": 1,
                "bedroom ": 3,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 2,
                "VESTIBULE ": 0,
                "DRAWING ROOM ": 1,
            },
        },
        // Add quantities for other house sizes if needed
        "4bhk": {
            warmshell: {
                "KITCHEN ": 1,
                "bedroom ": 4,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 0,
                "BALCONY ": 1,
                "attached bathroom ": 0,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            bareshell: {
                "KITCHEN ": 1,
                "bedroom ": 4,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 3,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            interior: {
                "KITCHEN ": 1,
                "bedroom ": 4,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 3,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            archhitecture: {
                "KITCHEN ": 1,
                "bedroom ": 4,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 3,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
        },
        // Add quantities for other house sizes and project types if needed
        "5bhk": {
            warmshell: {
                "KITCHEN ": 1,
                "bedroom ": 5,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 0,
                "BALCONY ": 1,
                "attached bathroom ": 0,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            bareshell: {
                "KITCHEN ": 1,
                "bedroom ": 5,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 4,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            interior: {
                "KITCHEN ": 1,
                "bedroom ": 5,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 4,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            archhitecture: {
                "KITCHEN ": 1,
                "bedroom ": 5,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 4,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
        },
        "6bhk": {
            warmshell: {
                "KITCHEN ": 1,
                "bedroom ": 6,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 0,
                "BALCONY ": 1,
                "attached bathroom ": 0,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            bareshell: {
                "KITCHEN ": 1,
                "bedroom ": 6,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 5,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            interior: {
                "KITCHEN ": 1,
                "bedroom ": 6,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 5,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            archhitecture: {
                "KITCHEN ": 1,
                "bedroom ": 6,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 5,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
        },
        "7bhk": {
            warmshell: {
                "KITCHEN ": 1,
                "bedroom ": 7,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 0,
                "BALCONY ": 1,
                "attached bathroom ": 0,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            bareshell: {
                "KITCHEN ": 1,
                "bedroom ": 7,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 6,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            interior: {
                "KITCHEN ": 1,
                "bedroom ": 7,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 6,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
            },
            archhitecture: {
                "KITCHEN ": 1,
                "bedroom ": 7,
                "entrance ": 1,
                "DINING AREA ": 1,
                "WASH YARD ": 1,
                "COMMON BATH-TOILET ": 1,
                "BALCONY ": 1,
                "attached bathroom ": 6,
                "VESTIBULE ": 1,
                "DRAWING ROOM ": 1,
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
        "DRAWING ROOM ": 1,
        "KITCHEN ": 1,
        "bedroom ": 1,
        "entrance ": 0.25,
        "DINING AREA ": 1,
        "WASH YARD ": 0.25,
        "COMMON BATH-TOILET ": 0.5,
        "BALCONY ": 0.5,
        "attached bathroom ": 0.5,
        "VESTIBULE ": 0.25,
        "VARANDAH ": 0.5,
        "STUDY ": 0.25,
        "SERVANT ROOM ": 0.2,
        "SERVANT BATH ": 0.2,
        "POWDER ROOM ": 0.25,
        "DRESSER/ WALK-IN WARDROB ": 0.5,
        "pantry ": 0.25,
        "Foyer/Entryway ": 0.5,
        "LIVING ROOM ": 1,
        "FAMILY SIT-OUT ": 1,
        "Hallway/Corridor ": 0.5,
        "Small Balcony ": 0.25,
        "Medium Balcony ": 0.5,
        "Large Balcony ": 1,
        "Small Bathroom ": 0.25,
        "Medium Bathroom ": 0.5,
        "Large Bathroom ": 1,
        "Small Terrace ": 0.25,
        "Medium Terrace ": 0.5,
        "Large Terrace ": 1,
        "Pooja ": 0.25,
        "Staircase ": 1,
        "OUTER KITCHEN ": 0.5,
        "Cloakroom ": 0.25,
        "Plant Room ": 0.5,
        "Safe Room ": 0.25,
        "Panic Room ": 0.25,
        "Server Room ": 0.25,
        "Pump Room ": 0.25,
        "Guest Room ": 1,
        "Children's Room/Nursery ": 1,
        "Wine Cellar ": 0.5,
        "Craft Room ": 1,
        "Workshop ": 1,
        "Media Room ": 1,
        "Den ": 0.5,
        "Bar Room ": 1,
        "Library ": 1,
        "Game Room ": 1,
        "Music Room ": 1,
        "Hobby Room ": 1,
        "Home Office ": 1,
        "Home Gym ": 1,
        "Home Theatre ": 1,
        "Art Studio ": 1,
        "Billiard Room ": 1,
        "Observatory ": 1,
        "Trophy Room ": 1,
        "Sauna ": 1,
        "Jacuzzi Room ": 1,
        "Larder ": 1,
        "Bunker ": 1,
    };

    // Get a reference to the result element

    locationDropdown.addEventListener("change", calculateEstimate);
    planDropdown.addEventListener("change", calculateEstimate);
    
   

    })}})