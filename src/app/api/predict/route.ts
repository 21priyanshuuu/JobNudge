// File: src/app/api/predict/route.ts

import { NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";

export async function POST(request: Request): Promise<Response> {
  const formData = await request.json();

  // Save formData to a temp JSON file
  const tempFilePath = path.join(process.cwd(), "temp_form_data.json");
  fs.writeFileSync(tempFilePath, JSON.stringify(formData));

  try {
    const result = await new Promise<string>((resolve, reject) => {
      const python = spawn("python", ["app.py", tempFilePath]);

      let output = "";
      let error = "";

      python.stdout.on("data", (data) => {
        output += data.toString();
      });

      python.stderr.on("data", (data) => {
        error += data.toString();
      });

      python.on("close", (code) => {
        fs.unlinkSync(tempFilePath); // Clean up temp file

        if (code === 0) {
          resolve(output);
        } else {
          reject(new Error(error || "Python script failed"));
        }
      });
    });

    const parsed = JSON.parse(result);
    return NextResponse.json(parsed); // ✅ Explicitly returning Response

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
