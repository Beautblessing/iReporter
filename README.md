# iReporter web App

## Project Overview

The iReporter app is an e-solution to curb all forms of corruption in Africa. It enables any/every citizen of to notify appropriate authorities and the general public on any incident linked to corruption and Call on appropriate government agencies for intervention. 

## Features

1. Users can create an account and log in.
2. Users can create a ​red-flag ​record (An incident linked to corruption).
3. Users can create ​intervention ​ record ​ ​(a call for a government agency to intervene e.g
repair bad road sections, collapsed bridges, flooding e.t.c).
4. Users can edit their ​red-flag ​or ​intervention ​records.
5. Users can delete their ​red-flag ​or ​intervention ​records.
6. Users can add geolocation (Lat Long Coordinates) to their ​red-flag ​or ​intervention
records ​.
7. Users can change the geolocation (Lat Long Coordinates) attached to their ​red-flag ​or
intervention ​records ​.
8. Admin can change the ​status ​ of a record to either ​under investigation, rejected ​(in the
event of a false claim) ​ ​or ​ resolved ​(in the event that the claim has been investigated and
resolved) ​.

**API endpoints**

| Endpoint | Functionality |
| --- | ---|
| ```POST /red-flags``` | Create a red-flag record. |
| ```GET /red-flags``` | Get all red-flag records. |
| ```GET /red-flags/<red-flag-Id>``` | Get a specific red-flag record. |
| ```PATCH /red-flags/<red-flag-id>/location``` | Edit a specific ​red-flag. |
| ```DELETE /red-flags/<red-flag-id>``` | Delete a specific red-flag record. |
