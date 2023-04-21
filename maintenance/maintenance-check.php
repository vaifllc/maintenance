<?php

// Set the header to indicate JSON content
header('Content-Type: application/json');

// Check if maintenance mode is enabled
$maintenanceMode = true; // Set to true if maintenance mode is enabled

// Return a JSON response with the maintenance mode status
echo json_encode(array('maintenance_mode' => $maintenanceMode));

?>



