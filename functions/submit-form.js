export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    // Parse the JSON body from the Angular app
    const { firstname, email, phone, practice_area, message } = await request.json();

    // Prepare form data for HubSpot
    const formData = new URLSearchParams();
    formData.append('firstname', firstname);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('practice_area', practice_area);
    formData.append('message', message);

    // HubSpot Forms API endpoint
    const hubspotUrl = 'https://forms.hubspot.com/uploads/form/v2/6171170/dab5a857-6623-4f10-a9d4-f35bccdcd070';

    // Send the form data to HubSpot
    const hubspotResponse = await fetch(hubspotUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${env.HUBSPOT_ACCESS_TOKEN}`
      },
      body: formData.toString()
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
        'Access-Control-Allow-Origin': '*', // Adjust for security
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error) {
    console.error('Error submitting form to HubSpot:', error);
    return new Response(`Internal Server Error: ${error.message}`, { status: 500 });
  }
}
