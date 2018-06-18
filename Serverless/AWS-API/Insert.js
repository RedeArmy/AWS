'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports.insert = function(event, context, callback){
  var params = {
    Item: {
      "gameId" : uuid.v1(),
      "namex" : "PS4 Spider-Man ",
      "yearx" : "2019",
      "cosolex" : "PS4",
      "updatedAt" : new Date().getTime()

    },
    TableName: '${self:provider.environment.DYNAMODB_TABLE}',
  };

  return dynamoDb.put(params, function(error, data) {
    if (error) {
      callback(error);
    }
    callback(error, params.Item);
  });
};

