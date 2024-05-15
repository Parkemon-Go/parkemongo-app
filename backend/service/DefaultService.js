'use strict';


/**
 * Get API pricing information
 * Retrieve pricing information for the Parkemon Go API.
 *
 * returns inline_response_200
 **/
exports.pricingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "enterprise" : "Contact us for enterprise pricing",
  "basic" : "$10/month for up to 1,000 requests",
  "pro" : "$50/month for up to 10,000 requests"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register for an API key
 * Register to obtain an API key for accessing the Parkemon Go API.
 *
 * body Register_body 
 * returns inline_response_201
 **/
exports.registerPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "api_key" : "abcdef123456"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get scans in a specific area
 * Fetch paginated scan entries within a specific area and radius.
 *
 * lat Float 
 * long Float 
 * radius Float 
 * limit Integer  (optional)
 * offset Integer  (optional)
 * returns PaginatedScans
 **/
exports.scansGET = function(lat,long,radius,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 100,
  "offset" : 0,
  "scans" : [ {
    "vehicle_make" : "Toyota",
    "vehicle_color" : "Blue",
    "vehicle_plate" : "XYZ1234",
    "project_id" : 101,
    "vehicle_model" : "Corolla",
    "created_at" : "2023-05-15T13:45:30Z",
    "vehicle_type" : 1,
    "id" : "123e4567-e89b-12d3-a456-426614174000",
    "lat" : 37.7749,
    "long" : -122.4194
  }, {
    "vehicle_make" : "Toyota",
    "vehicle_color" : "Blue",
    "vehicle_plate" : "XYZ1234",
    "project_id" : 101,
    "vehicle_model" : "Corolla",
    "created_at" : "2023-05-15T13:45:30Z",
    "vehicle_type" : 1,
    "id" : "123e4567-e89b-12d3-a456-426614174000",
    "lat" : 37.7749,
    "long" : -122.4194
  } ],
  "limit" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new scan
 * Submit a new scan entry to the Parkemon Go system.
 *
 * body Scan 
 * returns Scan
 **/
exports.scansPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vehicle_make" : "Toyota",
  "vehicle_color" : "Blue",
  "vehicle_plate" : "XYZ1234",
  "project_id" : 101,
  "vehicle_model" : "Corolla",
  "created_at" : "2023-05-15T13:45:30Z",
  "vehicle_type" : 1,
  "id" : "123e4567-e89b-12d3-a456-426614174000",
  "lat" : 37.7749,
  "long" : -122.4194
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get scans for a specific street
 * Fetch paginated scan entries for a specific street.
 *
 * street String 
 * limit Integer  (optional)
 * offset Integer  (optional)
 * returns PaginatedScans
 **/
exports.scansStreetGET = function(street,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 100,
  "offset" : 0,
  "scans" : [ {
    "vehicle_make" : "Toyota",
    "vehicle_color" : "Blue",
    "vehicle_plate" : "XYZ1234",
    "project_id" : 101,
    "vehicle_model" : "Corolla",
    "created_at" : "2023-05-15T13:45:30Z",
    "vehicle_type" : 1,
    "id" : "123e4567-e89b-12d3-a456-426614174000",
    "lat" : 37.7749,
    "long" : -122.4194
  }, {
    "vehicle_make" : "Toyota",
    "vehicle_color" : "Blue",
    "vehicle_plate" : "XYZ1234",
    "project_id" : 101,
    "vehicle_model" : "Corolla",
    "created_at" : "2023-05-15T13:45:30Z",
    "vehicle_type" : 1,
    "id" : "123e4567-e89b-12d3-a456-426614174000",
    "lat" : 37.7749,
    "long" : -122.4194
  } ],
  "limit" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

