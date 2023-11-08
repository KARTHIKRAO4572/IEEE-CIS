const mongoose = require('mongoose');
const Schemas = require('./schemas');
const CoreCommittee = mongoose.model('CoreCommittee',Schemas.CoreCommitteeSchema);
const Members = mongoose.model('Members',Schemas.MembersSchema);