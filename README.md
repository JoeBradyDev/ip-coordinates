# IP Coordinates Locator

This web app is a simple form that takes an ip address and returns it's associated longitude and latitude as determined by MaxMind GeoLite2.

This project demonstrates usage of the following:
* @maxmind/geoip2-node
* Docker Compose
* Node.js
* Next.js
* React.js
* Formik
* Yup
* CSS Modules


## Prerequisites

* Install [Docker Desktop](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. Docker Desktop includes Docker Compose as part of the installation.
* Download MaxMind GeoLite2 City database from: https://dev.maxmind.com/geoip/geoip2/geolite2/ 
* After downloading GeoLit2 and cloning this repository, put the downloaded database file (GeoLite2-City.mmdb) in the following directory:
`/src/db`

Note that normally, the database would be kept outside the src folder or we would instead use a web api, but for simplification of deployment, this works for our purposes.

## How to Run

To run in development mode, do the following:

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build dev
# Note: Keep v1 command until "Use Docker Compose v2" is enabled by default for Docker Desktop for Linux
# Docker aliases `docker-compose` (v1 command) to `docker compose` (v2 command), but not the other way around
docker-compose -f docker-compose.dev.yml build

# Up dev
docker-compose -f docker-compose.dev.yml up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test Cases

To assure that the application is working properly, please run the following test cases

### Verify that the form doesn't submit without data

1. On the home page, leave the input field blank
2. Click "Submit"
3. Verify that the message "IP address is required" is displayed

### Verify that the form only accepts a valid IP address

1. On the home page, in the input field, enter a string with letters
2. Click "Submit" or hit the tab key
3. Verify that the message "IP address is not in correct format" is displayed

### Verify that a local ip address is not in the database

1. On the home page, enter "192.168.1.1" into the input field
2. Click "Submit"
3. Verify that the message "Given IP address not found in database" is displayed

### Verify that duckduckgo.com is in the database

1. On the home page, enter "40.89.244.232" into the input field
2. Click "Submit"
3. Verify that the returned coordinates are:
   - Latitude: 41.6021
   - Longitude -93.6124

### Verify that twitter.com is in the database

1. On the home page, enter "104.244.42.193" into the input field
2. Click "Submit"
3. Verify that the returned coordinates are:
   - Latitude: 37.751
   - Longitude -97.822


# Additional Testing/Possible Enhancements
* Automated testing using Jest, Cypress, React Testing Library or other frameworks could be used
* Additional data could be pulled out of the city data used in @maxmind/geoip2-node
