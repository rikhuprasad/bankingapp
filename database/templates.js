// for demo purposes assuming that the initialTemplate is a file database. We can use classes.
// the latest version is assumed to be active

module.exports = {
    initialTemplate: function () {
        return {
            applications: [
                {
                    id: "APP1234",
                    applicationName: "app1",
                    configurations: {
                        metaData: {
                            "owner": "user1",
                            "configurationManager": "userY",
                        },
                        technicalData: {
                            "roles": ["role1", "role3"]
                        }
                    },
                    auditLogs:[
                        {
                            metaData: {
                                "owner": "user1",
                                "configurationManager": "userY"
                            }
                        }
                        , {
                            technicalData: {

                            }
                        }
                    ]
                }]
        }
    }
};