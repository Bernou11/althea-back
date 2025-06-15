"use strict";
// import {PrismaClient} from "@prisma/client";
// import {describe} from "node:test";
// import {User} from "../../src/types/UserType";
// import bcrypt from "bcryptjs";
//
// const prisma: PrismaClient = new PrismaClient();
//
// jest.mock('@prisma/client', () => {
//     const mPrismaClient = {
//         user: {
//             create: jest.fn(),
//             findUnique: jest.fn(),
//             update: jest.fn(),
//             delete: jest.fn(),
//         },
//     };
//     return { PrismaClient: jest.fn(() => mPrismaClient) };
// });
//
// jest.mock('bcryptjs', () => ({
//     hash: jest.fn() as jest.MockedFunction<typeof bcrypt.hash>, // Explicitly typing the mock function
// }));
//
// describe("User controller", () => {
//     const prisma : PrismaClient = new PrismaClient();
//
//     beforeAll(() => {
//         jest.clearAllMocks();
//     })
//
//     test("Should create a new user", async () => {
//         const mockedUser: User = generateUser();
//
//         (prisma.user.create as jest.Mock).mockResolvedValue(mockedUser);
//
//         (bcrypt.hash as jest.MockedFunction<typeof bcrypt.hash>).mockResolvedValue(`password`);
//     })
// })
//
// function generateUser(): User {
//     return {
//         id : 1,
//         firstname: "test",
//         lastname: "test",
//         email: "test@test.com",
//         password: "password",
//         age: 10,
//         username: "test",
//         role : "administrator",
//         supprime: 0
//     }
// }
