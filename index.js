/*
  CONGRATULATIONS on creating your first Botpress bot!

  This is the programmatic entry point of your bot.
  Your bot's logic resides here.
  
  Here's the next steps for you:
  1. Read this file to understand how this simple bot works
  2. Read the `content.yml` file to understand how messages are sent
  3. Install a connector module (Facebook Messenger and/or Slack)
  4. Customize your bot!

  Happy bot building!

  The Botpress Team
  ----
  Getting Started (Youtube Video): https://www.youtube.com/watch?v=HTpUmDz9kRY
  Documentation: https://botpress.io/docs
  Our Slack Community: https://slack.botpress.io
*/
var actions = require('./app/nlp/actions'),
    api = require('./app/api/api')

module.exports = function(bp) {
  

  // Listens for a first message (this is a Regex)
  // GET_STARTED is the first message you get on Facebook Messenger
  //
  // bp.hear(/GET_STARTED|hello|hi|test|hey|holla/i, (event, next) => {
  //   event.reply('#welcome') // See the file `content.yml` to see the block
  // })

  // You can also pass a matcher object to better filter events

  bp.hear({ 'nlp.action': 'greeting' }, (event, next) => {
    var name = event.raw.user.name
    console.log(event.nlp.parameters)    
    event.reply('#welcome', {
      name: name
    })
  })

  bp.hear({ 'nlp.action': 'newQuery' }, (event, next) => {
    event.reply('#askQuery')
  })

  bp.hear({ 'nlp.action': 'minRevenue' }, (event, next) => {
    console.log(event.nlp.parameters)
    if(event.nlp.parameters.type == 'cost' || event.nlp.parameters.type == 'Cost' || event.nlp.parameters.type == 'COST'){      
      api.getFuncCost('min')      
      .then(function(result){
        console.log(result)
        var revenue = JSON.parse(result).cost
        event.reply('#minRevenue', {
          revenue: revenue,
          type: event.nlp.parameters.type
        })
      })    
    }else{      
      api.getFuncRevenue('min')
      .then(function(result){
        console.log(result)
        var revenue = JSON.parse(result).revenue
        event.reply('#minRevenue', {
          revenue: revenue,
          type: event.nlp.parameters.type
        })
      })    
    }
  })

  bp.hear({ 'nlp.action': 'maxRevenue' }, (event, next) => {
    if(event.nlp.parameters.type == 'cost'){      
      api.getFuncCost('max')
      .then(function(result){        
        console.log(result)
        var revenue = JSON.parse(result).cost      
        event.reply('#maxRevenue', {
          revenue: revenue,
          type: event.nlp.parameters.type          
        })
      })           
    }else{
      api.getFuncRevenue('max')
      .then(function(result){
        var revenue = JSON.parse(result).revenue      
        event.reply('#maxRevenue', {
          revenue: revenue,
          type: event.nlp.parameters.type          
        })
      })   
    }
  })

  bp.hear({ 'nlp.action': 'avgRevenue' }, (event, next) => {
    if(event.nlp.parameters.type == 'cost'){
      api.getFuncCost('avg')    
      .then(function(result){
        var revenue = JSON.parse(result).cost
        event.reply('#avgRevenue', {
          revenue: revenue,
          type: event.nlp.parameters.type          
        })
      })   
    }else{
      api.getFuncRevenue('avg')    
      .then(function(result){
        var revenue = JSON.parse(result).revenue
        event.reply('#avgRevenue', {
          revenue: revenue,
          type: event.nlp.parameters.type
        })
      })    
    }    
  })

  bp.hear({ 'nlp.action': 'compareRevenue' }, (event, next) => {
    if(event.nlp.parameters.type == 'cost'){    
      api.getCompareCost()
      .then(function(result){
        console.log(result)
        var revenue = JSON.parse(result) 
        var length = revenue.length
        
        event.reply('#compareRevenue', {
          type: 'cost',
          revenue: revenue          
        })
        for(var i = 0; i < length; i++){
          event.reply('#compareRevenueAttachment', {
            type: 'revenue',
            revenue: revenue[i].totalRevenue,
            year: revenue[i].year       
          })
        }      
      })   
    }else{
      api.getCompareRevenue()
      .then(function(result){
        console.log(result)
        var revenue = JSON.parse(result)
        var length = revenue.length
        
        event.reply('#compareRevenue', {
          type: 'revenue',
          revenue: revenue.totalrevenue          
        })

        for(var i = 0; i < length; i++){
          event.reply('#compareRevenueAttachment', {
            type: 'revenue',
            revenue: revenue[i].totalRevenue,
            year: revenue[i].year       
          })
        }        
      })   
    }
  })

  bp.hear({ 'nlp.action': 'findReport' }, (event, next) => {
    console.log(event)
    event.reply('#findReport')
  })

  bp.hear({ 'nlp.action': 'regionRevenue' }, (event, next) => {
    console.log(event)
    if(event.nlp.parameters.type == 'cost'){    
      var region = event.nlp.parameters.region
      api.getRegionCost(region)
      .then(function(result){
        console.log(result)
        var revenue = JSON.parse(result).cost 
        if(revenue == null){
          revenue = 'not present'
        }
        event.reply('#regionRevenue', {
          region: region,
          type: event.nlp.parameters.type,
          value: revenue
        })
      })    
    }else{
      var region = event.nlp.parameters.region
      api.getRegionRevenue(region)
      .then(function(result){
        var revenue = JSON.parse(result).revenue 
        if(revenue == null){
          revenue = 'not present'
        }
        event.reply('#regionRevenue', {
          region: region,
          type: event.nlp.parameters.type,
          value: revenue
        })
      })   
    }    
  })
  

  bp.hear({ 'nlp.action': 'bye' }, (event, next) => {
    event.reply('#goodbye')
  })

  // bp.hear('WELCOME.ASK', (event, next) => {
  //   event.reply('#askQuery')
  // })

  // bp.hear('ask', (event, next) => {
  //   event.reply('#askQuery')
  // })

  bp.hear('FINDREPORT.NEWREPORT', (event, next) => {
    event.reply('#newReport')
  })

}