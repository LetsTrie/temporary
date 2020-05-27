const app = require('express')();
const mongoose = require('mongoose');

const {
  sectionModel,
  subSectionModel,
  questionModel,
  optionModel,
} = require('./model');

mongoose.connect(
  'mongodb+srv://user:userPassword@telepsychiatry-hyeqp.mongodb.net/arko?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log('connected to database!')
);

app.get('/', async (req, res, next) => {
  const data = require('./data');
  // Submitting to database
  const dbID = await uploadToDb(data);

  // Getting From Database...
  const fetch = await sectionModel
    .findById(dbID)
    .populate('subsection question');
  // You can fetch full object recursively...

  return res.json({ fetch });
});

const chooseModel = (quesFlag, subSecFlag, optFlag) => {
  if (quesFlag) return questionModel;
  if (subSecFlag) return subSectionModel;
  if (optFlag) return optionModel;
  return sectionModel;
};

const uploadToDb = async (data, quesFlag = 0, subSecFlag = 0, optFlag = 0) => {
  if (data.questions) {
    data.questions = await Promise.all(
      data.questions.map(async (x) => await uploadToDb(x, 1, 0, 0))
    );
  }

  if (data.subSections) {
    data.subSections = await Promise.all(
      data.subSections.map(async (x) => await uploadToDb(x, 0, 1, 0))
    );
  }

  if (data.options) {
    data.options = await Promise.all(
      data.options.map(async (x) => await uploadToDb(x, 0, 0, 1))
    );
  }

  const model = chooseModel(quesFlag, subSecFlag, optFlag);
  let obj = new model(data);
  await obj.save();
  return obj._id;
};

const fetchData = async (dbID, qFlag = 0, subSFlag = 0, opFlag = 0) => {
  // Try to do it yourself
};

app.listen(3000, () => console.log('Server is running at 3000'));
