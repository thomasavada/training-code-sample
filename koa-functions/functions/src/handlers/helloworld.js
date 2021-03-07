async function helloWorld (request, response) {
  response.json({
    success: true,
    errors: []
  })
}

module.exports = helloWorld;
