const birthdate = new Date('2001-01-11'); // Replace with your own birthdate
const currentDate = new Date();
const ageInMs = currentDate - birthdate;
const ageDate = new Date(ageInMs);
const age = Math.abs(ageDate.getUTCFullYear() - 1970);

const json = {
  schemaVersion: 1,
  label: 'Age',
  message: `${age} years`,
  color: 'green',
};

JSON.stringify(json)
