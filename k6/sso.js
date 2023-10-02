import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  insecureSkipTLSVerify: true, // Ignore certificate errors
};

export default function () {
  // Define your Keycloak authentication endpoint URL
  //let url = 'https://keycloak-user1-rhsso.apps.caixasso.sandbox2528.opentlc.com/auth/realms/Caixa/protocol/openid-connect/token';
  let url = 'https://keycloak-user5-rhsso.apps.caixasso.sandbox2528.opentlc.com/auth/realms/master/protocol/openid-connect/token';

  // Define the payload with user credentials
  let payload = {
    username: 'admin',
    password: 'admin',
    grant_type: 'password',
    client_id: 'admin-cli',
  };

  // Send POST request to the authentication endpoint
  let response = http.post(url, payload);

  // Check if the request was successful (status code 200)
  check(response, {
    'is status 200': (r) => r.status === 200,
  });

  // Log the response payload
  //console.log(`Response payload: ${response.body}`);
if (response.status !== 200) {
    console.error(`Received a non-200 status code: ${response.status}`);
    console.error(`Response body: ${response.body}`);
  }
  // Add a short sleep to simulate user think time
}
