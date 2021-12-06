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
                            "owner": "user_owner_name_X",
                            "configurationManager": "user_configuration_manager_Y"
                        },
                        technicalData: {
                            "roles": ["role1", "role3"]
                        }
                    },
                    auditLogs:[
                        {
                            metaData: {
                                "owner": "user_owner_name_X",
                                "configurationManager": "user_configuration_manager_Y"
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
                            "owner": "user_owner_name_A",
                            "configurationManager": "user_configuration_manager_B"
                        },
                        technicalData: {
                            "roles": ["role1", "role2", "role3"]
                        }
                    },
                    auditLogs:[
                        {
                            metaData: {
                                "owner": "user_owner_name_A",
                                "configurationManager": "user_configuration_manager_B"
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