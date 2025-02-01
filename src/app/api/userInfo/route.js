import dbConnect from "../../../db/dbConnect";
import UserData from "../../../models/userForm";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req) {
  try {
    console.log("POST request received");

    let user;
    try {
      const { isAuthenticated, getUser } = getKindeServerSession();
      user = await getUser();
      console.log("User retrieved:", user);
    } catch (err) {
      console.error("Error getting user session:", err);
      return new NextResponse(
        JSON.stringify({
          message: "Internal server error while getting user session",
          success: false,
        }),
        { status: 500 }
      );
    }

    if (!user) {
      console.log("User not authenticated");
      return new NextResponse(
        JSON.stringify({ message: "User not authenticated", success: false }),
        { status: 401 }
      );
    }

    try {
      await dbConnect();
      console.log("Database connected");
    } catch (err) {
      console.error("Error connecting to database:", err);
      return new NextResponse(
        JSON.stringify({
          message: "Internal server error while connecting to database",
          success: false,
        }),
        { status: 500 }
      );
    }

    const userId = user.id;
    console.log("User ID:", userId);

    let requestData;
    try {
      requestData = await req.json();
      console.log("Request data received:", requestData);
    } catch (err) {
      console.error("Error parsing request data:", err);
      return new NextResponse(
        JSON.stringify({
          message: "Error parsing request data",
          success: false,
        }),
        { status: 400 }
      );
    }

    const {
      jobRecommendation,
      logical_quotient,
      hackathons,
      coding_skills,
      public_speaking,
      self_learning,
      extra_courses,
      certifications,
      workshops,
      reading_writing,
      memory_capability,
      interested_subjects,
      interested_career_area,
      company_type,
      senior_inputs,
      book_type,
      management_or_technical,
      worker_type,
      teamwork,
      introvert,
    } = requestData;

    // if (
    //   //   !userId ||
    //   // !jobRecommendation
    //   !logical_quotient
    //   // !hackathons

    //   // !coding_skills ||
    //   // !public_speaking ||
    //   // !self_learning
    //   // !extra_courses ||
    //   // !certifications ||
    //   // !workshops ||
    //   // !reading_writing ||
    //   // !memory_capability ||
    //   // !interested_subjects ||
    //   // !interested_career_area ||
    //   // !company_type ||
    //   // !senior_inputs ||
    //   // !book_type ||
    //   // !management_or_technical ||
    //   // !worker_type ||
    //   // !teamwork ||
    //   // !introvert
    // ) {
    //   console.log("Required fields missing in request data");
    //   return new NextResponse(
    //     JSON.stringify({
    //       message: "All required fields must be provided",
    //       success: false,
    //     }),
    //     { status: 400 }
    //   );
    // }

    let newUserInfo;
    try {
      newUserInfo = new UserData({
        userId,
        jobRecommendation,
        logical_quotient,
        hackathons,
        coding_skills,
        public_speaking,
        self_learning,
        extra_courses,
        certifications,
        workshops,
        reading_writing,
        memory_capability,
        interested_subjects,
        interested_career_area,
        company_type,
        senior_inputs,
        book_type,
        management_or_technical,
        worker_type,
        teamwork,
        introvert,
      });
      console.log("New user info object created:", newUserInfo);
    } catch (err) {
      console.error("Error creating UserData object:", err);
      return new NextResponse(
        JSON.stringify({
          message: "Internal server error while creating user info object",
          success: false,
        }),
        { status: 500 }
      );
    }

    try {
      await newUserInfo.save();
      console.log("User info saved successfully");
    } catch (err) {
      console.error("Error saving UserData:", err);
      return new NextResponse(
        JSON.stringify({
          message: "Internal server error while saving user info",
          success: false,
        }),
        { status: 500 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "UserInfo saved successfully", success: true }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing POST request:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal server error", success: false }),
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    console.log("GET request received");

    let user;
    try {
      const { isAuthenticated, getUser } = getKindeServerSession();
      user = await getUser();
      console.log("User retrieved:", user);
    } catch (err) {
      console.error("Error getting user session:", err);
      return new NextResponse(
        JSON.stringify({
          message: "Internal server error while getting user session",
          success: false,
        }),
        { status: 500 }
      );
    }

    if (!user) {
      console.log("User not authenticated");
      return new NextResponse(
        JSON.stringify({ message: "User not authenticated", success: false }),
        { status: 401 }
      );
    }

    try {
      await dbConnect();
      console.log("Database connected");
    } catch (err) {
      console.error("Error connecting to database:", err);
      return new NextResponse(
        JSON.stringify({
          message: "Internal server error while connecting to database",
          success: false,
        }),
        { status: 500 }
      );
    }

    const userId = user.id;
    console.log("User ID:", userId);

    let userInfo;
    try {
      userInfo = await UserData.findOne({ userId });
      console.log("User info retrieved:", userInfo);
    } catch (err) {
      console.error("Error retrieving user info:", err);
      return new NextResponse(
        JSON.stringify({
          message: "Internal server error while retrieving user info",
          success: false,
        }),
        { status: 500 }
      );
    }

    if (!userInfo) {
      console.log("User info not found");
      return new NextResponse(
        JSON.stringify({
          message: "User info not found",
          success: false,
        }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "User info retrieved successfully",
        success: true,
        data: userInfo,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing GET request:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal server error", success: false }),
      { status: 500 }
    );
  }
}
