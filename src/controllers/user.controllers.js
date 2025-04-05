import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser = asyncHandler(async (req, res) => {
    // const { name, email, password } = req.body;
    // const user = await User.create({
    //     name,
    //     email,
    //     password,
    // });
    res.status(200).json({
        // success: true,
        message: "User registered successfully",
        // data: user,
    });
});
export { registerUser };
