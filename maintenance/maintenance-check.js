function checkMaintenance(completion) {
    const url = 'https://vaif-r2-maintenance.web.app/maintenance-check.json';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const isMaintenanceMode = data.maintenance_mode;
            completion(isMaintenanceMode);
            console.log(`Maintenance mode status: ${isMaintenanceMode}`);
        })
        .catch(error => {
            completion(false);
            console.error(`Error retrieving maintenance status: ${error}`);
        });
}

function showMaintenanceScreen() {
    const maintenanceDiv = document.createElement('div');
    maintenanceDiv.textContent = 'This site is currently under maintenance. Please check back later.';
    document.body.appendChild(maintenanceDiv);
}

function handleMaintenance() {
    checkMaintenance(isMaintenanceMode => {
        if (isMaintenanceMode) {
            showMaintenanceScreen();
        } else {
            console.log('Server is not in maintenance mode.');
        }
    });
}
