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
    }
}