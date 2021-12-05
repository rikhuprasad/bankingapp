module.exports = {
    getApplication: function (applications, appName) {
        return applications.filter(function (application) {
            return application.applicationName == appName;
        });
    },

    getAuditLogsForApplication: function (applications, appName) {
        var auditLogs = new Array();
        var application = this.getApplication(applications, appName);
        if (application && application.length > 0) {
            application = application.pop();
            auditLogs = application.auditLogs;
        }
        return auditLogs;
    },

    updateTechnicalConfiguration: function(applications, technicalConfiguration){
        var applicationName = technicalConfiguration['applicationName'];
        var newConfiguration = technicalConfiguration['configuration'];

        var application = this.getApplication(applications, applicationName);
        if (application && application.length > 0) {
            application = application.pop();
            var technicalData = {technicalData: newConfiguration}
            application.auditLogs.push(technicalData);
            Object.keys(newConfiguration).forEach(function(key){
                application.configurations.technicalData[key] = newConfiguration[key];
            });
            return application['auditLogs'].length;
        }
        return 0;
    }
}