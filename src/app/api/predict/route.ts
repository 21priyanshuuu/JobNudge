import { NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";

export async function POST(request: Request) {
  const formData = await request.json();

  // Write formData to a temporary JSON file
  const tempFilePath = path.join(process.cwd(), "temp_form_data.json");
  fs.writeFileSync(tempFilePath, JSON.stringify(formData));

  // Spawn the Python process
  const pythonExecutable = process.platform === "win32" ? "python" : "python3";
  const pythonProcess = spawn(pythonExecutable, ["app.py", tempFilePath]);

  return new Promise((resolve, reject) => {
    let output = "";
    let error = "";

    pythonProcess.stdout.on("data", (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      error += data.toString();
    });

    pythonProcess.on("close", (code) => {
      fs.unlinkSync(tempFilePath); // Clean up the temp file

      if (code !== 0) {
        return reject(new Error(error));
      }

      try {
        const result = JSON.parse(output);
        resolve(NextResponse.json(result));
      } catch (err) {
        reject(new Error("Failed to parse JSON response from Python script"));
      }
    });
  });
}
