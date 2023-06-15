const validateBody = (req, res, next) => {
  const { body } = req;

  if (
    typeof body.id !== 'number' ||
    typeof body.acronym !== 'string' ||
    typeof body.description !== 'string'
  ) {
    return res
      .status(400)
      .json({ message: 'Invalid body! All fields are required and must have the correct data types.' });
  }

  if (
    body.id <= 0 ||
    body.acronym.length !== 2 ||
    body.description.length > 200
  ) {
    return res
      .status(400)
      .json({ message: 'Invalid body! Please provide valid values for all fields.' });
  }

  next();
};

module.exports = {
  validateBody,
};
