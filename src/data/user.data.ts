import { User } from "../types/user.types";
import { UserSchema } from "../schemas/user.schema";

const readUsers = (): Promise<User[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const mongoResponse = await UserSchema.find();
      resolve(mongoResponse);
    } catch (error) {
      reject(error);
    }
  });
};

const readUserById = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const mongoResponse = await UserSchema.findById(id);

      if (mongoResponse === null) {
        reject(404);
      } else {
        resolve(mongoResponse);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const readUserByName = (name: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const mongoResult = await UserSchema.findOne({ name: name });

      if (mongoResult === null) {
        reject(404);
      } else {
        resolve(mongoResult);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const createUser = (body: User) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = new UserSchema(body);
      await user.save();
      resolve("Se ha agregado cliente");
    } catch (error) {
      reject(error);
    }
  });
};

const updateUser = (id: string, body: User) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updatedEntity = await UserSchema.findByIdAndUpdate(id, body, {
        new: true,
      });

      if (updatedEntity === null) {
        reject(404);
      } else {
        resolve(200);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateAmountTransaction = (amountTransaction: string, body: User) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updatedEntity = await UserSchema.findByIdAndUpdate(amountTransaction, body, {
        new: true,
      });

      if (updatedEntity === null) {
        reject(404);
      } else {
        resolve(200);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUserById = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deletedEntity = await UserSchema.findByIdAndRemove(id);

      if (deletedEntity === null) {
        reject(404);
      } else {
        resolve(200);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export {
  readUsers,
  readUserById,
  readUserByName,
  createUser,
  updateUser,
  updateAmountTransaction,
  deleteUserById,
};
