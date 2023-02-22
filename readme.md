Steps to run the service 
Install Node.js: If you haven't already, you'll need to install Node.js on your system. You can download the latest version from the official website: https://nodejs.org/en/download/.

Install dependencies: Once Node.js is installed, navigate to doctorService project directory in your terminal or command prompt and run npm install. This will install any dependencies listed in the package.json file.

Set environment variables: If your project relies on environment variables, you'll need to set them before running the project. You can either set them globally or create a .env file in the root directory of your project.

Run the project: Once dependencies are installed, you can run the project by yarn dev

That's it! You should now be able to access your Node.js project by navigating to http://localhost:8009 (or whichever port you've specified ) in your web browser.

** NOTE ** 
IF U DONT HAVE DUMMY DATA IN THE DATABASE uncomment the line 22 in index.js[ syncData() ]

********Test the project **********
to get doctors : curl --location --request GET 'http://localhost:8009/v1/doctors/?category=Dermatologist'

expected result : {
    "success": true,
    "doctors": {
        "_id": "63f60909e748dae631b8e9e8",
        "name": "Dr. David Lee",
        "category": "Dermatologist",
        "email": "david.lee@dermatologyclinic.com",
        "phone": "555-2468",
        "address": "789 Elm St, Anytown USA",
        "bio": "Dr. Lee is a skilled dermatologist with a focus on cosmetic procedures.",
        "__v": 0
    }
}
************Test ***********