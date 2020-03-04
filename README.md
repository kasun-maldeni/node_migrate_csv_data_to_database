# Node - Migrate CSV Data to Database

### Purpose
Parse CSV file and seed the data to a database.

### Usage
1. Clone Repository
2. Install node modules: `yarn`
3. Change database user's password in `database.json` file to your local database user's password.
4. Set up database - in terminal:
  * `yarn db-create-dev`
  * `yarn db-migrate up`
  * `yarn db-seed`

Your database will now be populated with the CSV data.
