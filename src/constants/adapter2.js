export default function createMovesTwo(body) {
  const config = {
    method: 'POST',
    headers: {
  'Accepts': 'application/json',
  'Content-Type': 'application/json'
  },
    body: JSON.stringify(body)
  };
  return fetch(`https://warriorbackend.herokuapp.com/cable/api/move_twos`, config).then(r=> r.json())
}
