// Constants and variables for factors and prices
const basePrices = {
  warmshell: { Mumbai: 3500, Ahmedabad: 2000, Hyderabad: 2500, "Metro City 1" : 3500, "Metro City Outskirts" : 2000, "Metro City 2" :2500 },
  bareshell: { Mumbai: 4250, Ahmedabad: 2750, Hyderabad: 3250, "Metro City 1" :4250, "Metro City Outskirts" : 2750, "Metro City 2" :3250  },
  renovation: { Mumbai: 4000, Ahmedabad: 2500, Hyderabad: 3000,"Metro City 1" : 4000, "Metro City Outskirts" : 2500, "Metro City 2" :3000  },
  architecture: { Mumbai: 6000, Ahmedabad: 5000, Hyderabad: 6000 ,"Metro City 1" : 6000, "Metro City Outskirts" : 5000, "Metro City 2" :6000 },
};

const propertyFactors = {
  Bungalow: 1.05,
  Apartment: 1,
  Farmhouse: 0.95,
  Villa: 1.07,
};

const stylingFactors = {
  Low: 1,
  Medium: 1.1,
  High: 1.2,
  "Very High": 1.3,
};

const ceilingHeightFactors = {
  "10ft": 1,
  "11ft": 1.05,
  "12ft": 1.1,
  "13ft": 1.15,
  "14ft": 1.2,
  "14ft+": 1.5,
};

const planFactors = {
  Premium: 1,
  "Premium Plus": 1.2,
  Luxury: 1.5,
  "Ultra Luxury": 2,
};

const addOnPrices = {
  "Automation": { Mumbai: 350, Ahmedabad: 200, Hyderabad: 250,"Metro City 1" : 350, "Metro City Outskirts" : 200, "Metro City 2" :250  },
  "Civil Changes": { Mumbai: 150, Ahmedabad: 50, Hyderabad: 100,"Metro City 1" : 150, "Metro City Outskirts" : 50, "Metro City 2" :100  },
  "Fire Fighting": { Mumbai: 25, Ahmedabad: 25, Hyderabad: 25,"Metro City 1" : 25, "Metro City Outskirts" : 25, "Metro City 2" :25  },
  "Flooring": 	{Mumbai: 350,	Ahmedabad: 200, Hyderabad:	250,"Metro City 1" : 350, "Metro City Outskirts" : 200, "Metro City 2" :250 },
  "Hvac": 	{Mumbai: 450, Ahmedabad: 400,	Hyderabad: 400,"Metro City 1" : 450, "Metro City Outskirts" : 400, "Metro City 2" :400 },
  "House Keeping": 	{Mumbai: 20, Ahmedabad: 12.5, Hyderabad:	15,"Metro City 1" : 20, "Metro City Outskirts" : 12.5, "Metro City 2" :15 },
  "Pest Control":	{Mumbai: 10, Ahmedabad:	10, Hyderabad:	10,"Metro City 1" : 10, "Metro City Outskirts" : 10, "Metro City 2" :10 },
  "Surveillance":	{Mumbai: 50, Ahmedabad:	50, Hyderabad:	50,"Metro City 1" : 50, "Metro City Outskirts" : 50, "Metro City 2" :50 }

  // ...other add-ons
};


function calculateEstimate() {
  const projectType =  document.querySelector('.button-option-project.button-selected').getAttribute('data-value');
  const city = document.querySelector('.button-option-city.button-selected').getAttribute('data-value');
  const propertyType = document.querySelector('.button-option-property.button-selected').getAttribute('data-value');
  const styling = document.querySelector('.button-option-styling.button-selected').getAttribute('data-value');
  const ceilingHeight =document.querySelector('.button-option-ceiling.button-selected').getAttribute('data-value');
  const plan =document.querySelector('.button-option-plan.button-selected').getAttribute('data-value');
  const carpetArea =  parseFloat(document.getElementById('carpet-area').value);
  const addOns = document.querySelectorAll('input[name="add-on"]:checked');
  const clientName = document.getElementById('ClientName').value;
  const projectID = document.getElementById('ProjectID').value;
  console.log('Name:',projectID);

  const addOnValues = Array.from(addOns).map((addOn) => addOn.value);

  const basePrice = basePrices[projectType][city] * carpetArea;
  const propertyFactor = propertyFactors[propertyType];
  const stylingFactor = stylingFactors[styling];
  const ceilingHeightFactor = ceilingHeightFactors[ceilingHeight];
  const planFactor = planFactors[plan];
  const combinedFactor = propertyFactor * stylingFactor * ceilingHeightFactor * planFactor;

  let estimatedPrice = basePrice * combinedFactor;

  // Calculate add-ons cost
  addOnValues.forEach((addOn) => {
      estimatedPrice += addOnPrices[addOn][city] * carpetArea;
  });

  return estimatedPrice;
 // Display price with two decimal places
}



function generateAddOnsCheckboxes() {
  const addOnsContainer = document.getElementById("add-ons-container");

  for (const addOn in addOnPrices) {
    const checkboxOption = document.createElement("div");
    checkboxOption.className = "checkbox-option";

    const addOnCheckbox = document.createElement("input");
    addOnCheckbox.type = "checkbox";
    addOnCheckbox.name = "add-on";
    addOnCheckbox.value = addOn;

    const addOnLabel = document.createElement("label");
    addOnLabel.textContent = addOn;

    checkboxOption.appendChild(addOnCheckbox);
    checkboxOption.appendChild(addOnLabel);
    addOnsContainer.appendChild(checkboxOption);
  }
}



// Function to gather user selections
function gatherUserSelections() {
  const projectType = document.querySelector(".button-option-project.button-selected").dataset.value;
  const city = document.querySelector(".button-option-city.button-selected").dataset.value;
  const propertyType = document.querySelector(".button-option-property.button-selected").dataset.value;
  const styling = document.querySelector(".button-option-styling.button-selected").dataset.value;
  const ceilingHeight = document.querySelector(".button-option-ceiling.button-selected").dataset.value;
  const plan = document.querySelector(".button-option-plan.button-selected").dataset.value;
  const carpetArea = parseFloat(document.getElementById("carpet-area").value);
  const clientName = document.getElementById('ClientName').value;
  const projectID = document.getElementById('ProjectID').value;
  const selectedAddOns = [];
  const addOnCheckboxes = document.querySelectorAll('input[name="add-on"]:checked');
  addOnCheckboxes.forEach((checkbox) => {
      selectedAddOns.push(checkbox.value);
  });

  return {
      projectType,
      city,
      propertyType,
      styling,
      ceilingHeight,
      plan,
      carpetArea,
      selectedAddOns,
      clientName,
      projectID,
  };
}


// Function to update the result output
function updateResultOutput(estimatedPrice, selections) {
  const resultContainer = document.getElementById("result");

  resultContainer.innerHTML = `
      <h2>Estimation Results</h2>
      <p><strong>Project Type:</strong> ${selections.projectType}</p>
      <p><strong>City:</strong> ${selections.city}</p>
      <p><strong>Property Type:</strong> ${selections.propertyType}</p>
      <p><strong>Styling:</strong> ${selections.styling}</p>
      <p><strong>Ceiling Height:</strong> ${selections.ceilingHeight}</p>
      <p><strong>Plan Type:</strong> ${selections.plan}</p>
      <p><strong>Carpet Area:</strong> ${selections.carpetArea} sq. ft.</p>
      <p><strong>Add-ons:</strong> ${selections.selectedAddOns.join(", ")}</p>
      <h3>Estimated Price:</h3>
      <p><strong>₹${estimatedPrice.toFixed(2)}</strong></p>
  `;
}

// Update estimated price on user interaction
document.getElementById("calculate-btn").addEventListener("click", function () {
  const selections = gatherUserSelections();
  const estimatedPrice = calculateEstimate(selections);
  updateResultOutput(estimatedPrice, selections);
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById('calculationResult').value = estimatedPrice;
  
});

document.getElementById("Confirm-btn").addEventListener("click", function () {
  const selections = gatherUserSelections();
  const estimatedPrice = calculateEstimate(selections);
  const resultUrl = `result.html?projectType=${selections.projectType}&city=${selections.city}&propertyType=${selections.propertyType}&styling=${selections.styling}&ceilingHeight=${selections.ceilingHeight}&plan=${selections.plan}&carpetArea=${selections.carpetArea}&selectedAddOns=${selections.selectedAddOns.join(",")}&estimatedPrice=${estimatedPrice}&clientName=${selections.clientName}&projectID=${selections.projectID}`;

  // Redirect to the result.html page
  window.open(resultUrl, "_blank");

});

// Generate add-ons checkboxes
generateAddOnsCheckboxes();
// ... (previous code)

// Function to update the result output
function updateResultOutput(estimatedPrice, selections) {
    document.getElementById("result-project-type").textContent = selections.projectType;
    document.getElementById("result-city").textContent = selections.city;
    document.getElementById("result-property-type").textContent = selections.propertyType;
    document.getElementById("result-styling").textContent = selections.styling;
    document.getElementById("result-ceiling-height").textContent = selections.ceilingHeight;
    document.getElementById("result-plan-type").textContent = selections.plan;
    document.getElementById("result-carpet-area").textContent = selections.carpetArea;
    document.getElementById("result-add-ons").textContent = selections.selectedAddOns.join(", ");
    document.getElementById("result-estimated-price").textContent = estimatedPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

}

// ... (rest of the code)

// Add event listeners for property type buttons
const propertyTypeButtons = document.querySelectorAll(".button-option-property");
propertyTypeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    propertyTypeButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listeners for city buttons
const cityButtons = document.querySelectorAll(".button-option-city");
cityButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    cityButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listeners for ceiling height buttons
const ceilingHeightButtons = document.querySelectorAll(".button-option-ceiling");
ceilingHeightButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    ceilingHeightButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listeners for styling buttons
const stylingButtons = document.querySelectorAll(".button-option-styling");
stylingButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    stylingButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listeners for project type buttons
const projectTypeButtons = document.querySelectorAll(".button-option-project");
projectTypeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    projectTypeButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listeners for plan buttons
const planButtons = document.querySelectorAll(".button-option-plan");
planButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the .button-selected class from all buttons
    planButtons.forEach((btn) => btn.classList.remove("button-selected"));

    // Add the .button-selected class to the clicked button
    button.classList.add("button-selected");
  });
});

// Add event listener for the "Calculate Estimate" button
document.getElementById("calculate-btn").addEventListener("click", function () {
  console.log("Button clicked!"); // Check if the button click event is registered
  const selections = gatherUserSelections();
  console.log("Selections:", selections); // Check if selections are correctly gathered
  const estimatedPrice = calculateEstimate(selections);
  console.log("Estimated Price:", estimatedPrice); // Check if estimated price is calculated correctly
  updateResultOutput(estimatedPrice, selections);
});

// Get all the city buttons

// Get the hidden input field for selected city
const selectedCityInput = document.getElementById('selected-city');

// Add a click event listener to each city button
cityButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the data-value attribute from the clicked button
    const selectedCity = this.getAttribute('data-value');
    
    // Set the value of the hidden input field to the selected city
    selectedCityInput.value = selectedCity;
    
    // Optionally, you can display a message to indicate the selected city
    
  });
});

// Hidden input fields for selected values
const selectedProjectTypeInput = document.getElementById('selected-project-type');
const selectedPropertyTypeInput = document.getElementById('selected-property-type');
const selectedStylingInput = document.getElementById('selected-styling');
const selectedCeilingHeightInput = document.getElementById('selected-ceiling-height');
const selectedPlanTypeInput = document.getElementById('selected-plan-type');

// Add click event listeners for project type buttons
projectTypeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const selectedProjectType = this.getAttribute('data-value');
    selectedProjectTypeInput.value = selectedProjectType;
  });
});

// Add click event listeners for property type buttons
propertyTypeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const selectedPropertyType = this.getAttribute('data-value');
    selectedPropertyTypeInput.value = selectedPropertyType;
  });
});

// Add click event listeners for styling buttons
stylingButtons.forEach(button => {
  button.addEventListener('click', function() {
    const selectedStyling = this.getAttribute('data-value');
    selectedStylingInput.value = selectedStyling;
  });
});

// Add click event listeners for ceiling height buttons
ceilingHeightButtons.forEach(button => {
  button.addEventListener('click', function() {
    const selectedCeilingHeight = this.getAttribute('data-value');
    selectedCeilingHeightInput.value = selectedCeilingHeight;
  });
});

// Add click event listeners for plan type buttons
planButtons.forEach(button => {
  button.addEventListener('click', function() {
    const selectedPlanType = this.getAttribute('data-value');
    selectedPlanTypeInput.value = selectedPlanType;
  });
});

