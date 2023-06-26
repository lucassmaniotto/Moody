const validateBody = (req, res, next) => {
  const { body } = req;

  if (
    typeof body.name !== 'string' ||
    typeof body.email !== 'string' ||
    typeof body.password !== 'string'
  ) {
    return res.status(400).json({
      message:
        'Invalid body! All fields are required and must have the correct data types.',
    });
  }

  if (body.name.length < 3) {
    return res.status(400).json({
      message: 'Invalid body! Please provide valid values for all fields.',
    });
  }

  const emailPattern = /\S+@\S+\.\S+/;
  if (!emailPattern.test(body.email)) {
    return res.status(400).json({
      message: 'Invalid body! Please provide valid values for all fields.',
    });
  }

  next();
};

module.exports = {
  validateBody,
};
