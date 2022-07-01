const mongoose = require("mongoose");
const connectDb = require("../db/mongo");
const userModel = require("../models/user.model");

class User {
  async connectDb() {
    return await connectDb();
  }

  async readAllUsers() {
    try {
      await this.connectDb();
      const users = await userModel.find();
      return users;
    } catch (error) {
      throw error;
    } finally {
      mongoose.disconnect();
    }
  }

  async readUserById(id) {
    try {
      await this.connectDb();
      const user = await userModel.findOne({ _id: id });
      mongoose.disconnect();
      return user;
    } catch (error) {
      mongoose.disconnect();
      throw error;
    }
  }

  async createUser(user) {
    try {
      await this.connectDb();
      const newUser = await userModel.create(user);
      mongoose.disconnect();
      return newUser;
    } catch (error) {
      mongoose.disconnect();
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      await this.connectDb();
      const user = await userModel.findOneAndDelete({ _id: id });
      mongoose.disconnect();
      return user;
    } catch (error) {
      mongoose.disconnect();
      throw error;
    }
  }

  async updateUser(id, user) {
    try {
      await this.connectDb();
      const updatedUser = await userModel.findOneAndUpdate({ _id: id }, user);
      mongoose.disconnect();
      return updatedUser;
    } catch (error) {
      mongoose.disconnect();
      throw error;
    }
  }
}

module.exports = User;