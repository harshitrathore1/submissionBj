const validateBase64 = (base64String) => {
  try {
    return !!base64String && Buffer.from(base64String, "base64").toString("base64") === base64String;
  } catch (err) {
    return false;
  }
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const handlePost = (req, res) => {
  const { data, file_b64 } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: "Invalid input" });
  }

  const numbers = [];
  const alphabets = [];
  let highestLowercase = null;

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === "string") {
      alphabets.push(item);
      if (item === item.toLowerCase() && (!highestLowercase || item > highestLowercase)) {
        highestLowercase = item;
      }
    }
  });

  const isPrimeFound = numbers.some((num) => isPrime(Number(num)));

  const fileValid = validateBase64(file_b64 || "");
  const fileMimeType = fileValid ? "application/octet-stream" : null;
  const fileSizeKB = fileValid ? Buffer.from(file_b64, "base64").length / 1024 : null;

  res.json({
    is_success: true,
    user_id: "harshit_rathore_09082002", // Your user_id
    email: "example@college.com", // Replace with your email
    roll_number: "ABCD123", // Replace with your roll number
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
    is_prime_found: isPrimeFound,
    file_valid: fileValid,
    file_mime_type: fileMimeType,
    file_size_kb: fileSizeKB,
  });
};

const handleGet = (req, res) => {
  res.json({
    operation_code: 1,
  });
};

module.exports = { handlePost, handleGet };
