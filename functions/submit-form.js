// functions/submit-form.js

export async function onRequestPost(context) {
    try {
      const { request, env } = context;
      const { firstname, email, phone, practice_area, message } = await request.json();
  
      // Validate required fields
      if (!firstname || !email || !phone || !practice_area || !message) {
        return new Response('Missing required fields', { status: 400 });
      }
  
      const formData = new URLSearchParams();
      formData.append('firstname', firstname);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('practice_area', practice_area);
      formData.append('message', message);
  
      const hubspotUrl = 'https://forms.hubspot.com/uploads/form/v2/6171170/dab5a857-6623-4f10-a9d4-f35bccdcd070';
  
      const hubspotResponse = await fetch(hubspotUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${env.HUBSPOT_ACCESS_TOKEN}`
        },
        body: formData.toString()
      });
  
      if (!hubspotResponse.ok) {
        const errorText = await hubspotResponse.text();
        console.error('Error from HubSpot:', errorText);
        return new Response(`HubSpot Error: ${errorText}`, { status: 500 });
      }
  
      return new Response('Form submitted successfully!', {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Adjust as needed for security
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    } catch (error) {
      console.error('Internal Server Error:', error);
      return new Response(`Internal Server Error: ${error.message}`, { status: 500 });
    }
  }
  