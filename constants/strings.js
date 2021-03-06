const {
    minUserNameLength,
    maxUserNameLength,
    minPasswordLength
} = require('../config/auth');

const STRINGS = {};

const MESSAGES = {
    CONFIRM_PASSWORD_REQUIRED: 'Confirm password field is required',
    DATABASE_CONNECTION_ERROR: 'Database connection error',
    EMAIL_EXISTING: 'Email is already existing',
    EMAIL_IS_NOT_VALID: 'Email is not valid',
    EMAIL_IS_REQURIED: 'Email is required',
    PASSWORD_LENGTH: `Password must be at least ${minPasswordLength}`,
    PASSWORD_IS_REQUIRED: 'Password field is required',
    PASSWORD_IS_INCORRECT: 'Password is incorrect',
    PASSWORD_MISSMATCH: 'Passwords must match',
    SIMPLE_CONNECTION_ERROR: 'Connection error',
    USER_ID_MISSING: 'User id is missing',
    USER_LOCKED: 'User is locked',
    USER_LOCK_STATUS_MISSING: 'Please specify user block status',
    USERNAME_LENGTH: `Name must be between ${minUserNameLength} and ${maxUserNameLength} characters`,
    USERNAME_IS_REQUIRED: 'Username is required',
    USER_NOT_FOUND: 'User not found'
};

module.exports = {
    STRINGS,
    MESSAGES
};