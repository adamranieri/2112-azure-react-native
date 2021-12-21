# Cosmos DB
- NoSQL database
    - Data is NOT stored in tables with relationships between the tables
    - The data is **Schemaless** 
        - You can put any type of data with any properties into a Cosmos DB database
- Mongo Version
    - Uses a Mongo DB api for reading data
- SQL version
    - Uses **Structured Query Language** to make queries
- Cosmos DB is completely managed my Microsoft
    - As a developer you do not have to worry about manually adding disk space or performing updates
- Cosmos DB Account
    - Cosmos DB instances
        - Containers

- **Partition Key**
    - In NoSQL databases the data is *divided up* via a parition key
    - A value in every object that *should* be unique
        - ID is usually a great choice