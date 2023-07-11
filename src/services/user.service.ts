import { User } from "../types/user.types";
import {
  readUsers,
  readUserById,
  readUserByName,
  createUser,
  updateUser,
  deleteUserById,
} from "../data/user.data";

interface ServiceLayerResponse {
  code: number;
  result?: User | User[];
  message?: string;
  errorMessage?: unknown;
}

const getUsers = (): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    readUsers()
      .then((dataLayerResponse: User[]) => {
        const localUsersDB = dataLayerResponse;
        resolve({ code: 200, result: localUsersDB });
      })
      .catch((error) => {
        reject({
          code: 500,
          message: "Error inesperado ",
          errorMessage: error,
        });
      });
  });
};
const getUserById = (id: string): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    readUserById(id)
      .then((dataLayerResponse) => {
        if ((dataLayerResponse as User[]).length === 0) {
          resolve({ code: 404, message: "Cliente no existe" });
        } else {
          resolve({ code: 200, result: dataLayerResponse as User });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: "Error inesperado", errorMessage: error });
      });
  });
};

const getUserByName = (name: string): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    readUserByName(name)
      .then((dataLayerResponse) => {
        if ((dataLayerResponse as User[]).length === 0) {
          resolve({ code: 404, message: "Cliente no existe" });
        } else {
          resolve({ code: 200, result: dataLayerResponse as User });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: "Error inesperado", errorMessage: error });
      });
  });
};

const postUser = (body: User): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    createUser(body)
      .then((dataLayerResponse) => {
        resolve({ code: 201, message: dataLayerResponse as string });
      })
      .catch((error) => {
        reject({ code: 500, message: "Error inesperado", errorMessage: error });
      });
  });
};

const putUser = (id: string, body: User): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    updateUser(id, body)
      .then((dataLayerResponse) => {
        if (dataLayerResponse === 200)
          resolve({
            code: 200,
            message: "Cliente actualizado exitosamente" as string,
          });
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "Cliente no encontrado" });
        } else {
          reject({
            code: 500,
            message: "Error inesperado",
            errorMessage: error,
          });
        }
      });
  });
};

const putAmountTransaction = (amountTransaction: string, body: User): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    updateUser(amountTransaction, body)
      .then((dataLayerResponse) => {
        if (dataLayerResponse === 200)
          resolve({
            code: 200,
            message: "Cliente actualizado exitosamente" as string,
          });
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "Cliente no encontrado" });
        } else {
          reject({
            code: 500,
            message: "Error inesperado",
            errorMessage: error,
          });
        }
      });
  });
};

const deleteUser = (id: string): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    deleteUserById(id)
      .then((dataLayerResponse) => {
        if (dataLayerResponse === 200) {
          resolve({ code: 200, message: "Cliente borrado" });
        }
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "Cliente no existe" });
        } else {
          reject({
            code: 500,
            message: "Error inesperado",
            errorMessage: error,
          });
        }
      });
  });
};

export { getUsers, getUserById, getUserByName, postUser, putUser, putAmountTransaction, deleteUser };
