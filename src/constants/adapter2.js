export default function createMovesTwo(body) {
  const config = {
    method: 'POST',
    headers: {
  'Accepts': 'application/json',
  'Content-Type': 'application/json'
  },
    body: JSON.stringify(body)
  };
  return fetch(`http://${warriorbackend.herokuapp.com}:3000/api/move_twos`, config).then(r=> r.json())
}
