db.Customers.update({"CreditLimit":{"$lte":21000}}, {"$inc":{"CreditLimit":100}}, {"multi":true})
db.Customers.update({"$and":[ {"CreditLimit":{"$gt":21000}}, {"CreditLimit":{"$lt":75000}} ]}, {"$inc":{"CreditLimit":200}}, {"multi":true})
db.Customers.update({"CreditLimit":{"$gte":75000}}, {"$inc":{"CreditLimit":-100}}, {"multi":true})