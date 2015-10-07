Meteor.publish('plans', function(){
  if (this.userId) {
    return Plans.find();
  }
});

Meteor.publish('plansFilter', function(station, date){
  if (this.userId) {
    return Plans.find({
      station: station,
      date: date
    });
  }
});

Meteor.publish('stations', function(){
  if (this.userId) {
    return Stations.find();
  }
});

Meteor.publish('suppliers', function(){
  if (this.userId) {
    return Suppliers.find();
  }
});

Meteor.publish('prices', function(){
  if (this.userId) {
    return Prices.find();
  }
});

Meteor.publish('trucks', function(){
  if (this.userId) {
    return Trucks.find();
  }
});

Meteor.publish("users", function () {
  if (this.userId) {
    return Meteor.users.find();
  } else {
    this.ready();
  }
});

Meteor.publish('holidays', function(){
  return Holidays.find();
});