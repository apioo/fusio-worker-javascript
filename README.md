
# Fusio-Worker-Javascript

A Fusio worker implementation to execute Javascript code.
More information about the worker API at:
https://www.fusio-project.org/documentation/worker

## Example

The following example shows an action written in Javascript which gets data
from a database and returns a response

```javascript
module.exports = function(request, context, connector, response, dispatcher, logger) {

    const connection = connector.getConnection('my_db');

    connection.query('SELECT * FROM app_todo', (err, result) => {
        response.build(200, {}, {
            foo: 'bar',
            result: result
        });
    });

};

```

## Types

This table contains an overview which connection types are implemented
and which implementation is used:

| Type | Implementation |
| ---- | -------------- |
| `Fusio.Adapter.Sql.Connection.Sql` | `mysql2`
| `Fusio.Adapter.Sql.Connection.SqlAdvanced` | `mysql2`
| `Fusio.Adapter.Http.Connection.Http` | `axios`
| `Fusio.Adapter.Mongodb.Connection.MongoDB` | `-`
| `Fusio.Adapter.Elasticsearch.Connection.Elasticsearch` | `-`

