const http = require('http');
const url = require('url');

let character = {};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // parse the url and the query parameters
  const pathname = parsedUrl.pathname; // Get the path
  const method = req.method;
  const query = parsedUrl.query; // Get the query parameters as an object

  // CREATE CHARACTER
  if (method === 'POST' && pathname === '/create-character') {
    let body = '';
    req.on('data', chunk => {
      body += chunk; 
    });
    req.on('end', () => {
      // Check if the required query parameters are present
      if (!query.class || !query.gender || !query.funFact) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Missing required query parameters (class, gender, funFact).' }));
        return;
      }

      character = {
        charClass: query.class,
        gender: query.gender,
        funFact: query.funFact,
      };

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Character created successfully!', character}));
    });

    return;
  } else if (method === 'POST' && pathname === '/confirm-character') {
    if (!character.charClass) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No character has been created yet!' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Character confirmed!',
      character,
    }));

    return;
  } else if (method === 'GET' && pathname === '/view-character') {
    if (!character.charClass) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No character has been created yet!' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(character));
    return;
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);

module.exports = server;
