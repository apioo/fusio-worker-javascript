
# Fusio-Worker-Javascript

A Fusio worker implementation to execute JavaScript code.
More information about the Worker system at our documentation:
https://docs.fusio-project.org/docs/use_cases/api_gateway/worker

## Example

The following example shows an action written in Javascript which gets data
from a database and returns a response

```javascript
module.exports = async function(request, context, connector, response, dispatcher, logger) {
    const connection = await connector.getConnection('app');
    const [entries, fields] = await connection.query('SELECT name, description FROM app_product_0');

    response.build(200, {}, {
        foo: 'bar',
        entries: entries
    });
};

```

## Types

This table contains an overview which connection types are implemented
and which implementation is used:

| Type                                                   | Implementation           |
|--------------------------------------------------------|--------------------------|
| `Fusio.Adapter.Sql.Connection.Sql`                     | `mysql2 / pg`            |
| `Fusio.Adapter.Sql.Connection.SqlAdvanced`             | `mysql2 / pg`            |
| `Fusio.Adapter.Http.Connection.Http`                   | `axios`                  |
| `Fusio.Adapter.Mongodb.Connection.MongoDB`             | `mongoose`               |
| `Fusio.Adapter.Elasticsearch.Connection.Elasticsearch` | `@elastic/elasticsearch` |

