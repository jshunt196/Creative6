var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    celebName: String,
    celebrity: String,
    animalName: String,
    animal: String,
    foodName: String,
    food: String,
    hashed_password: String
});
mongoose.model('User', UserSchema);