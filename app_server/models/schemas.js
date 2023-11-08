const mongoose = require('mongoose');

const CoreCommitteeSchema = {
    Name:{
        type:String
    },
    MembershipID:{
        type:Number
    },
    Designation:{
        type:String
    },
    Email:{
        type:String
    },
    Phone:{
        type:String
    }
};

const MembersSchema = {
    Name:{
        type:String
    },
    MembershipID:{
        type:Number
    },
    Role:{
        type:String
    },
    Phone:{
        type:String
    }
};

module.exports = {
    CoreCommitteeSchema,
    MembersSchema
};