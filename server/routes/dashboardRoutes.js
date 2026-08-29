const express = require("express");
const Dashboard = require("../models/Dashboard");
const authMiddleware = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/getinfo", async (req, res) => {
    const { token } = req.body

    try {
        const decode = jwt.verify(token, process.env.JWT_KEY)
        const dashboard = await Dashboard.findOne({
            user_id: decode.userId
        });

        if (!dashboard) {
            return res.status(404).json({
                message: "Dashboard data not found"
            });
        }

        res.json({
            user_id: dashboard.user_id,
            totalActiveFields: dashboard.totalActiveFields,
            cropsMonitored: dashboard.cropsMonitored,
            soilMoistureAverage: dashboard.soilMoistureAverage,
            irrigationCycles: dashboard.irrigationCycles,
            waterUsage: dashboard.waterUsage,
            cropHealthScore: dashboard.cropHealthScore,
            weatherRiskLevel: dashboard.weatherRiskLevel,
            estimatedYield: dashboard.estimatedYield,
            temperature: dashboard.temperature,
            humidity: dashboard.humidity,
            windSpeed: dashboard.windSpeed,
            sunlightHours: dashboard.sunlightHours,
            rainProbability: dashboard.rainProbability
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch dashboard data"
        });
    }
});

module.exports = router;