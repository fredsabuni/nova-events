function submitForm(event, eventName, eventDate) {
    event.preventDefault();
    
     const selectedMenu = document.querySelector('input[name="menu"]:checked').value;

     loadHubSpotForm(eventName, eventDate, selectedMenu);
}

function loadHubSpotForm(eventName, eventDate, selectedMenu) {
    const formContainer = document.getElementById('hubspot-form');
    formContainer.classList.remove('hidden');

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


function scrollToForm() {
    document.getElementById('hubspot-form').scrollIntoView({ behavior: 'smooth' });
}