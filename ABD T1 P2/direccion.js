db.Customers.find({},{"AdressLine1":1, "AdressLine2":1, "City":1, "State": {$exists:true},"State":1,"Postalcode":1})