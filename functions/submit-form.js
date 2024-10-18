export default {
  async fetch(request, env) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': 'https://wallacegraham.com',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Handle POST requests
    if (request.method === 'POST') {
      try {
        // Parse the JSON body from the Angular app
        const { formType, firstname, lastname, email, phone, practice_area, message, high_school } = await request.json();

        // Validate required fields based on the form type
        if (formType === 'lawyer') {
          if (!firstname || !email || !phone || !practice_area || !message) {
            return new Response('Missing required fields for lawyer form.', { status: 400 });
          }
        } else if (formType === 'scholarship') {
          if (!firstname || !lastname || !email || !phone || !high_school || !message) {
            return new Response('Missing required fields for scholarship form.', { status: 400 });
          }
        } else {
          return new Response('Invalid form type.', { status: 400 });
        }

        // Prepare form data for HubSpot
        const formData = new URLSearchParams();
        formData.append('firstname', firstname);
        formData.append('email', email);
        formData.append('phone', phone);

        // Determine the HubSpot form URL based on form type
        let hubspotFormGuid;
        let hubspotUrl;

        if (formType === 'lawyer') {
          hubspotFormGuid = env.HUBSPOT_LAWYER_FORM_GUID;
          formData.append('practice_area', practice_area);
          formData.append('message', message);
        } else if (formType === 'scholarship') {
          hubspotFormGuid = env.HUBSPOT_SCHOLARSHIP_FORM_GUID;
          formData.append('lastname', lastname);
          formData.append('high_school', high_school);
          formData.append('message', message);
        }

        // Construct the HubSpot form URL
        hubspotUrl = `https://forms.hubspot.com/uploads/form/v2/${env.HUBSPOT_PORTAL_ID}/${hubspotFormGuid}`;

        // Send the form data to HubSpot
        const hubspotResponse = await fetch(hubspotUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${env.HUBSPOT_ACCESS_TOKEN}`,
          },
          body: formData.toString(),
        });

        // Check if HubSpot responded with an error
        if (!hubspotResponse.ok) {
          const errorText = await hubspotResponse.text();
          console.error('Error from HubSpot:', errorText);
          return new Response(`HubSpot Error: ${errorText}`, { status: 500 });
        }

        // Respond back to the Angular app
        return new Response('Form submitted successfully!', {
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': 'https://wallacegraham.com',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        });
      } catch (error) {
        console.error('Error processing form submission:', error);
        return new Response(`Internal Server Error: ${error.message}`, { status: 500 });
      }
    }

    // If method is not POST or OPTIONS, respond with 405
    return new Response('Method Not Allowed', { status: 405 });
  },
};
