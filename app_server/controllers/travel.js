const travel = async (req, res) => {
  const tripsEndpoint = 'http://localhost:3000/api/trips';

  try {
    const response = await fetch(tripsEndpoint);
    const json = await response.json();

    res.render('travel', {
      title: 'Travlr Getaways',
      trips: json
    });

  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  travel
};