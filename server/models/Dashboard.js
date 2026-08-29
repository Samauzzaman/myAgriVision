const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
    
user_id:String,
totalActiveFields: Number,
cropsMonitored:Number,
soilMoistureAverage:Number,
irrigationCycles:Number,
waterUsage:Number,
cropHealthScore:Number,
weatherRiskLevel:String,
estimatedYield:Number,
temperature:Number,
humidity:Number,
windSpeed:Number,
sunlightHours:Number,
rainProbability:Number
});

module.exports = mongoose.model("Dashboard", dashboardSchema);