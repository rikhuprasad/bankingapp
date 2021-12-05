// for demo purposes assuming that the initialTemplate is a file database. We can use classes.
// the latest version is assumed to be active

module.exports = {
    initialTemplate: function () {
        return {
            applications: [
                {
                    id: "1",
                    applicationName: "app1",
                    configurations: {
                        metaData: {
                            "owner": "user1",
                            "configurationManager": "userY"
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
                                "roles": ["role1", "role3"]
                            }
                        }
                    ]
                },
                {
                    id: "2",
                    applicationName: "app2",
                    configurations: {
                        metaData: {
                            "owner": "user2",
                            "configurationManager": "userZ"
                        },
                        technicalData: {
                            "roles": ["role1", "role2", "role3"]
                        }
                    },
                    auditLogs:[
                        {
                            metaData: {
                                "owner": "user2",
                                "configurationManager": "userZ"
                            }
                        }
                        , {
                            technicalData: {
                                "roles": ["role1", "role2", "role3"]
                            }
                        }
                    ]
                }
            ]
        }
    }
};