const { dashboardService } = require("../service/dashboardservice");

async function dashboardController(req, res) {
  try {
    const urls = await dashboardService({
      userId: req.user.userId,
      role: req.user.role,
    });
    res.status(200).json({
      totalUrls: urls?.length || 0,
      data: urls,
      message: "got urls successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
module.exports = { dashboardController };
