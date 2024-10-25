import {describe, expect, test, } from '@jest/globals';
import UserUtils from "../../src/pairtest/utils/UserUtils.js";


describe("UserUtils Tests", () => {
    test("User is Valid", async () => {
        const userId = 123749372637
        const result = UserUtils.prototype.IsUserValid(userId)
        expect(result).toBe(true)
    });

    test("User is Invalid", async () => {
        const userId = 0
        const result = UserUtils.prototype.IsUserValid(userId)
        expect(result).toBe(false)
    });
})
