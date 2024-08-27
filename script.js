function submitForm(event, eventName, eventDate) {
    event.preventDefault();
    
    // Get selected menu
    const selectedMenu = document.querySelector('input[name="menu"]:checked').value;

    // Load HubSpot form and pass menu selection as hidden fields
    loadHubSpotForm(eventName, eventDate, selectedMenu);
}

function loadHubSpotForm(eventName, eventDate, selectedMenu) {
    const formContainer = document.getElementById('hubspot-form');
    formContainer.classList.remove('hidden');

    // Load HubSpot form dynamically with pre-filled data
    hbspt.forms.create({
        portalId: "YOUR_PORTAL_ID",
        formId: "YOUR_FORM_ID",
        target: "#form-container",
        onFormReady: function($form) {
            $form.find('input[name="event_name"]').val(eventName);
            $form.find('input[name="event_date"]').val(eventDate);
            $form.find('input[name="selected_menu"]').val(selectedMenu);
        },
        onFormSubmit: function () {
            alert(`Thank you for booking the ${eventName} event on ${eventDate} with the ${selectedMenu}!`);
        }
    });
}
