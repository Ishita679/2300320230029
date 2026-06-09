const Notification = require("../models/Notification");
exports.createNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    res.status(201).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.getNotifications = async (req, res) => {
  try {
    const notifications =
      await Notification.find().sort({
        createdAt: -1,
      });
    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json({
      message: "Notification deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};