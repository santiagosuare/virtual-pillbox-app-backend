import mongoose from "mongoose";
import connectDb from "../db/mongo.js";
import userModel from "../models/user.model.js";

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
      disconnect();
      return updatedUser;
    } catch (error) {
      disconnect();
      throw error;
    }
  }

  async getUserByUsernameAndPassword(username, password) {
    try {
      await this.connectDb();
      const user = await userModel.findOne({
        Usuario: username,
      });
      mongoose.disconnect();
      return user;
    } catch (error) {
      mongoose.disconnect();
      throw error;
    }
  }

  async getUserByUsername(username) {
    try {
      await this.connectDb();
      const user = await userModel.findOne({
        Usuario: username,
      });
      mongoose.disconnect();
      return user;
    } catch (error) {
      mongoose.disconnect();
      throw error;
    }
  }
}

export default User;
