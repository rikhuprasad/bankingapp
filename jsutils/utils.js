module.exports = {
    getApplication: function (applications, appName){
        return applications.filter(function(application){
            return application.applicationName == appName;
        })
    }
}