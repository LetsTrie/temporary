const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  name: String,
  questions: [{ type: Schema.Types.ObjectId, ref: 'question' }],
  subSections: [{ type: Schema.Types.ObjectId, ref: 'subsection' }],
});

const subSectionSchema = new Schema({
  name: String,
  questions: [{ type: Schema.Types.ObjectId, ref: 'question' }],
  subSections: [{ type: Schema.Types.ObjectId, ref: 'subsection' }],
});

const questionSchema = new Schema({
  name: String,
  inputType: String,
  options: [{ type: Schema.Types.ObjectId, ref: 'option' }],
});

const optionSchema = new Schema({
  name: String,
  action: {
    type: Boolean,
    default: false,
  },
  modal: {
    type: Boolean,
    default: false,
  },
  questions: [{ type: Schema.Types.ObjectId, ref: 'question' }],
  subSections: [{ type: Schema.Types.ObjectId, ref: 'subsection' }],
});

exports.sectionModel = mongoose.model('section', sectionSchema);
exports.subSectionModel = mongoose.model('subsection', subSectionSchema);
exports.questionModel = mongoose.model('question', questionSchema);
exports.optionModel = mongoose.model('option', optionSchema);
