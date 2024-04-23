import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const PORT = 5050;
const app = express();

// Connect to MongoDB database
mongoose.connect("mongodb+srv://parminder2002ldh:VisionaryEd@visionaryedcluster.70agi2z.mongodb.net/?retryWrites=true&w=majority&appName=VisionaryEdCluster")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define MongoDB schemas
const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
const StudentModel = mongoose.model("student", StudentSchema);

const CollegeSchema = new mongoose.Schema({
  Institute: String,
  Logo: String,
  Link: String,
  AcademicProgramName: String,
  Quota: String,
  SeatType: String,
  Gender: String,
  OpeningRank: String,
  ClosingRank: String,
});
const CollegeModel = mongoose.model("colleges", CollegeSchema);

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "visionaryedowner@gmail.com",
    pass: "vehx xjqv pjsx tger",
  },
});

app.post('/registrationdetails', async (req, res) => {
  try {
    const student = await StudentModel.create(req.body);
    await sendRegistrationEmail(student.email, student.name);
    res.status(201).send(student);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

async function sendRegistrationEmail(email, name) {
  const senderName = 'VisionaryEd Team';
  const mailOptions = {
    from:`"${senderName}" <visionaryedowner@gmail.com>`,
    to: email,
    subject: 'Welcome to VisionaryEd - Your Gateway to Top Engineering Institutes in India!',
    html: `
          <p>Dear ${name},</p>
          <p>Welcome to VisionaryEd,
           your ultimate destination for exploring top engineering institutes in India!
            Get access to comprehensive information on institute cutoffs,
             upcoming exam dates, and much more.
              We're thrilled to have you join our community of aspiring engineers.</p>
          <p>Best regards,</p>
          <p>VisionaryEd Team</p>
      `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await StudentModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "Email not found!! Please Register" });
    }
    if (user.password === password) {
      return res.json({ message: "Successfully Logged-in" });
    } else {
      return res.status(401).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/collegedetails", async (req, res) => {
  const { Institute, AcademicProgramName, Quota, SeatType, Gender } = req.query;
  if (!Institute || !AcademicProgramName || !Quota || !SeatType || !Gender) {
    return res.status(400).json({ error: "All query parameters are required" });
  }
  try {
    let query = {};
    if (Institute && Institute !== 'ALL') query.Institute = Institute;
    if (AcademicProgramName && AcademicProgramName !== 'ALL') query.AcademicProgramName = AcademicProgramName;
    if (Quota && Quota !== 'ALL') query.Quota = Quota;
    if (SeatType && SeatType !== 'ALL') query.SeatType = SeatType;
    if (Gender && Gender !== 'ALL') query.Gender = Gender;
    if (Object.keys(query).length === 0) {
      const collegedetails = await CollegeModel.find();
      res.json(collegedetails);
    } else {
      Object.keys(query).forEach(key => {
        if (query[key] === 'ALL') {
          delete query[key];
        }
      });
      const collegedetails = await CollegeModel.find(query);
      res.json(collegedetails);
    }
  } catch (error) {
    console.error("Error fetching college details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
