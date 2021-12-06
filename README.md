Banking application
-------------------

The system is desinged for the purpose of demonstration of the given 2 problems of the task. The Banking application will have a backend in Node.js and Express.js. The front end will be developed using React.js. 

System design
-------------
The backend database could be a SQL or a no-SQL database. For the scope of the application implementation, I have decided to use no-SQL database and store the values in the form of JSON document/memory. This could be extended furthermore lateron. If a SQL database was to be used the following will be the list of Table structure.

Tables:
------- 
Applications [PK integer id, String applicationName]
MetadataConfiguration [PK id, FK Applications.id, String owner, String configurationManager]
TechnicalConfiguration [PK id, FK Applications.id, String roles] (Roles could be further split to permissions, SQL Normalizations)
AuditLogs [PK id, FK Application.id, String configurationType, String values]
where,
PK - Primary Key
FK - Foreign Key


Conceptually, the above has been realized in the JSON format for the pupose of easy processing and readability. This helps to store only the delta and keeps the application simple and functioning targetting on the goals of the tasks. Delta is stored as audits logs and the original table value is changed (updated), to reduce less query to the database for efficiency. applications[i].configurations contain the latest updated values of metadata and technical data. The datastructure in JSON format is available as initialTemplate in database\template.js (initialTemplate).
The audit logs done need to store the version number, because the JSON Array maintains the order of the object indexes. The version is calculated based on the index position in the array. 


The backend will have 3 API's as follows:

**GET** applications (returns all applications)
**GET** application (QueryParams - name?appName) (returns information about the application)
**GET** configurationChangesForApplication (QueryParams - name?appName) (returns auditLogs/configuration-changes of an application)
**POST** technicalConfiguration (BodyParams - {"roles": ["role1", "role3"]})
**POST** metadataConfiguration (BodyParams - {"owner": "user1", "configurationManager": "userY"}) - Here only one field could be updated. or everything can be updated. The update log is maintained in the auditlog.

Notes:
------
1.) In this application, the initial data is assumed to be the values of initialTemplate in templates.js (for demonstration purpose). The audit logs are assumed to be the initial logs that create the initial configuratations for the applications in the initialTemplate. In memory value of applications is assumed to be database value for demonstration. This could be extended further to use a file as a database or to make it more scalable using postgreSQL database. 
2.) Only delta is updated and the updated configuration is stored as audit logs.
