const express = require('express');
// getting ApolloServer object from the package
const { ApolloServer, UserInputError } = require('apollo-server-express');
const GraphQLDate=require('./graphqldate')
const { MongoClient } = require('mongodb');
// file sync
const fs = require('fs');
// Issues
require('dotenv').config();
const about=require('./aboutmessage')






const app = express();
const enable = process.env.ENABLE_CORS || true;
let db;

const url = process.env.DB_URL || 'mongodb+srv://theophilus:kritheo2420@cluster0.5ggmpye.mongodb.net/?retryWrites=true&w=majority';
// resolvers
const port = process.env.API_SERVER || 3000;

// function start
// IssuesStore function
async function issueList(_,{status,effortmin,effortmax}) {
  const filter={};
  if(status){
    filter.status=status;
  }
  if(effortmin!==undefined ||effortmax!==undefined){
    filter.effort={};
    if(effortmax!==undefined){
      filter.effort.$gte=effortmin;
    }
    if(effortmin!==undefined){
      filter.effort.$lte=effortmax;
    }
  }
  const issuesDb = await db.collection('issues').find(filter).toArray();
  console.log(`This is frm issuelist1${issuesDb}`);
  exports.issuesDb = issuesDb;
  console.log(`This is frm issuelist${issuesDb}`);
  return issuesDb;
}

async function connecttodb() {
  const client = new MongoClient(url);
  await client.connect();
  console.log('Connected to MongodbAtlas');
  db = client.db('issuetracker');
}

async function issue(_, { id }) {
  const issue = await db.collection('issues').findOne({ id: id });
  return issue;
}

function validateIssue(_, { issue }) { const errors = []; if (issue.title.length < 3) { errors.push('Field "title" must be at least 3 characters long.'); } if (issue.status == 'Assigned' && !issue.owner) { errors.push('Field "owner" is required when status is "Assigned"'); } if (errors.length > 0) { throw new UserInputError('Invalid input(s)', { errors }); } }

async function getNextSequence(name) {
  const result = await db.collection('counters').findOneAndUpdate({ _id: name }, { $inc: { current: 1 } }, { returnOriginal: false });
  console.log(result);
  return result.value.current;
}

async function issueAdd(_, { issue }) {
  const newissues = {
    id: await getNextSequence('issues'),
    title: issue.title,
    created: new Date(),
    owner: issue.owner,
  };
  const res = await db.collection('issues').insertOne(newissues);

  const savedIssue = await db.collection('issues').findOne({ _id: res.insertedId });
  return savedIssue;
}
// function e
const resolvers = {
  Query: {
    about:about.getaboutMessage ,
    issueList,
    issueAdd,
    examplethrow: (_, { a, b }) => {
      const val = a + b;
      exports.val = val;
      return a + b;
    },
    issue,
    examplecatchfromquery: () => {
      const { val } = exports;
      return val;
    },
  },
  Mutation: {
    setAboutMessage:about.setAboutMessage,

    examplecatchfrommutation: () => {
      const { val } = exports;
      return val;
    },
  },
  GraphQLDate,
};

// INstantiating the ApolloServer
const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql', cors: true });
}

startServer().then(async () => {
  await connecttodb();
  app.listen(port, () => console.log('Running on 3000'));
});
