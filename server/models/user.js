// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var userSchema = new Schema({
// 	firstName: {tyepe:String, required: 'Please enter your first name.'},
// 	lastName: {tyepe:String, required: 'Please enter your last name.'},
// 	email: {tyepe:String, required: 'Please enter your email address.'},
// 	username: {tyepe:String, required: 'Please enter your username.', unique: true },
// 	password: {tyepe:String, required: 'Please enter your password.'},
// 	address: {tyepe:String, required: 'Please enter your address.'},
// 	address2: {tyepe:String, required: 'Please enter your address.'},
// 	city: {tyepe:String, required: 'Please enter your city.'},
// 	state: {tyepe:String, required: 'Please enter your state.'},
// 	postalCode: {tyepe:String, required: 'Please enter your postal code.'},
// 	country: {tyepe:String, required: 'Please enter your country.'},
// 	employer: {tyepe:String},
// 	title: {tyepe:String},
// 	joinDate: {tyep: Date, default: Date.now},
// 	createdOn: {tyep: Date, default: Date.now},
// 	updatedOn: {tyep: Date, default: Date.now}
// });

// var User = mongoose.model('User', userSchema);

// module.exports = {
// 	User: User
// };