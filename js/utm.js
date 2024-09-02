<script>
    // Function to get UTM parameters from the URL
    function getUTMParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const utmSource = urlParams.get('utm_source');
        const utmMedium = urlParams.get('utm_medium');
        const utmCampaign = urlParams.get('utm_campaign');
        const utmTerm = urlParams.get('utm_term');
        const utmContent = urlParams.get('utm_content');

        return {
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_term: utmTerm,
            utm_content: utmContent
        };
    }

    // Function to populate HubSpot form fields with UTM parameters
    function populateUTMFields() {
        const utmData = getUTMParameters();

        // Replace 'form_id' with your actual HubSpot form ID
        const form = document.getElementById('7f0cd8c0-d2d8-435d-bc90-b5bd959d302a');
        if (form) {
            // Set values for hidden fields in the form
            form.elements['utm_source'].value = utmData.utm_source || '';
            form.elements['utm_medium'].value = utmData.utm_medium || '';
            form.elements['utm_campaign'].value = utmData.utm_campaign || '';
            form.elements['utm_term'].value = utmData.utm_term || '';
            form.elements['utm_content'].value = utmData.utm_content || '';
        }
    }

    // Run the function when the document is ready
    document.addEventListener('DOMContentLoaded', function() {
        populateUTMFields();
    });
</script>
