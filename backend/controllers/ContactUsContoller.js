import {mailSender} from "../utils/mailSender.js"

export const contactUsController = async (req, res) => {
    const { email, firstName, lastName, message, mobile } = req.body

    // console.log(req.body)
    try {
      const emailRes = await mailSender(
        email,
        `Inquiry Email from ${firstName}`,
        {email, firstName, lastName, message, mobile}
      )
    //   console.log("Email Res ", emailRes)
      return res.json({
        success: true,
        message: "Email send successfully",
      })
    } catch (error) {
    //   console.log("Error", error)
      console.log("Error message :", error.message)
      return res.json({
        success: false,
        message: "Something went wrong...",
      })
    }
  }