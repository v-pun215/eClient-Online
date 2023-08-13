
const searchText = process.argv[2];

if (!searchText) {
  console.log("Please provide a search string as a command-line argument.");
  process.exit(1);
}

const textToSearch = `
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
`;

const lowerCaseText = textToSearch.toLowerCase();
const lowerCaseSearchText = searchText.toLowerCase();
const doesExist = lowerCaseText.includes(lowerCaseSearchText);

console.log(doesExist);
