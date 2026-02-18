import { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import * as htmlToImage from "html-to-image";

const CreateResume = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const previewRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Download PDF
  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const lineHeight = 20;
    let y = 40;

    doc.setFontSize(22);
    doc.setTextColor("#6366f1");
    doc.text(formData.name || "Your Name", 40, y);
    y += lineHeight;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const contact = `${formData.email || ""}${formData.email && formData.phone ? "  •  " : ""}${formData.phone || ""}`;
    doc.text(contact, 40, y);
    y += lineHeight * 2;

    const sections = ["Education", "Experience", "Skills"];
    sections.forEach((sec) => {
      doc.setFontSize(14);
      doc.setTextColor("#6366f1");
      doc.text(sec, 40, y);
      y += lineHeight;

      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(formData[sec.toLowerCase()] || "—", 40, y);
      y += lineHeight * 2;
    });

    doc.save(`${formData.name || "resume"}.pdf`);
  };

  // Download DOCX
  const downloadDOCX = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: formData.name || "Your Name",
                  bold: true,
                  size: 32,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `${formData.email || ""} ${formData.phone || ""}`,
                  size: 24,
                }),
              ],
            }),
            ...["Education", "Experience", "Skills"].map(
              (sec) =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: sec,
                      bold: true,
                      color: "6366f1",
                      size: 28,
                    }),
                    new TextRun({
                      text: `\n${formData[sec.toLowerCase()] || "—"}`,
                      size: 24,
                    }),
                  ],
                }),
            ),
          ],
        },
      ],
    });

    const buffer = await Packer.toBlob(doc);
    const url = URL.createObjectURL(buffer);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formData.name || "resume"}.docx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Download as image
  const downloadImage = async (type = "png") => {
    if (!previewRef.current) return;

    try {
      const dataUrl =
        type === "png"
          ? await htmlToImage.toPng(previewRef.current)
          : await htmlToImage.toJpeg(previewRef.current, { quality: 0.95 });

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${formData.name || "resume"}.${type}`;
      a.click();
    } catch (err) {
      console.error(err);
      alert("Failed to generate image.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded p-4 space-y-6">
          <h2 className="text-2xl font-extrabold text-white">
            Create Your Resume
          </h2>
          <p className="text-sm text-slate-400 font-mono">
            Fill in your information and see a live preview on the right
          </p>

          <div className="space-y-4">
            {["name", "email", "phone"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 font-mono"
              />
            ))}

            {["education", "experience", "skills"].map((field, idx) => (
              <textarea
                key={field}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                rows={idx === 2 ? 2 : 3}
                className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 font-mono resize-none"
              />
            ))}

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={downloadPDF}
                className="py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 font-mono"
              >
                Download PDF
              </button>
              <button
                onClick={downloadDOCX}
                className="py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 font-mono"
              >
                Download DOCX
              </button>
              <button
                onClick={() => downloadImage("png")}
                className="py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 font-mono"
              >
                Download PNG
              </button>
              <button
                onClick={() => downloadImage("jpg")}
                className="py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 font-mono"
              >
                Download JPG
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Live Preview */}
        <div
          ref={previewRef}
          className="w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded p-8 space-y-6"
        >
          <h2 className="text-2xl font-extrabold text-white">Live Preview</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-indigo-400">
              {formData.name || "Full Name"}
            </h3>
            <hr className="border-t border-white/20 my-1" />

            {/* Name, Email, Phone in one line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400 font-mono">
              <span>{formData.email || "your.email@example.com"}</span>
              <span>{formData.phone || "123-456-7890"}</span>
            </div>
            <hr className="border-t border-white/20 my-2" />

            <div>
              <p className="font-semibold text-white mt-2">Education</p>
              <p className="text-sm text-slate-400 font-mono">
                {formData.education || "Your education details..."}
              </p>
              <hr className="border-t border-white/20 my-2" />
            </div>

            <div>
              <p className="font-semibold text-white mt-2">Experience</p>
              <p className="text-sm text-slate-400 font-mono">
                {formData.experience || "Your work experience..."}
              </p>
              <hr className="border-t border-white/20 my-2" />
            </div>

            <div>
              <p className="font-semibold text-white mt-2">Skills</p>
              <p className="text-sm text-slate-400 font-mono">
                {formData.skills || "Your skills..."}
              </p>
              <hr className="border-t border-white/20 my-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateResume;
