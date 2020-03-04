db.clientes.update({"nombre":{"$eq":"ana"}}, {"$set":{"antiguedad":0}})
db.clientes.update({"nombre":{"$eq":"ana"}}, {"$set":{"antiguedad":1}})