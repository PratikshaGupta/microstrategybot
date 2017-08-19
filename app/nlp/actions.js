var api = require('../api/api')

module.exports = {
    yahooWeatherForecast(entities) {
      // console.log(entities)
      // if (entities['geo-city']) {
      //   return api.getForecast(entities['geo-city'])
      //     .then(function(result) {
      //       return {
      //         data: result,
      //         city: entities['geo-city']
      //       };
      //     }, function(error) {
      //       return error;
      //     })
      // }
    },
    greeting(entities) {
      if (entities['greetings_entity']) {
        return {
          entities: entities['greetings_entity']
        }
        // console.lo(gentities)
        // if (entities['geo-city']) {
        //   return api.getForecast(entities['geo-city'])
        //   .then(function(result){
        //     return {
        //       data: result,
        //       city: entities['geo-city']
        //     };
        //   }, function(error){
        //     return error;
        //   })
        }
        // return {
        //  // context: context,
        //  entities: entities
        // }
      }
      //    if (entities.next_appointment && entities.what_time) {
      //      return 'Your next appointment is at 4 pm.'
      //    }
      // if (entities.next_appointment && !entities.what_time && !entities.with_who) {
      //      return 'Your next appointment is with Mr.Oberyn at 4 pm.'
      //    }
      //    if(entities.with_who && entities.next_appointment){
      //      return 'Your next appointment is with Mr.Oberyn'
      //    }
      //  },
      //  GetResponseCount(context, entities){
      //    return 'You have total 5 appointments'
      //  }
    }