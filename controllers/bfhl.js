const { validateJSON, isPrime, getFileDetails, classifyData } = require('../backend/utils/helper');

exports.getBFHL = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};

exports.postBFHL = (req, res) => {
  try {
    const { data, file_b64 } = req.body;

    // Validate JSON input
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: 'Invalid input format' });
    }

    // Classify data into numbers and alphabets
    const { numbers, alphabets, highestLowercaseAlphabet, isPrimeFound } = classifyData(data);

    // Handle file if provided
    const fileDetails = getFileDetails(file_b64);

    // Build response
    const response = {
      is_success: true,
      user_id: "john_doe_17091999", // Customize as per request
      email: "john@xyz.com",
      roll_number: "ABCD123",
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet,
      is_prime_found: isPrimeFound,
      ...fileDetails,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ is_success: false, message: 'Server error', error: error.message });
  }
};
