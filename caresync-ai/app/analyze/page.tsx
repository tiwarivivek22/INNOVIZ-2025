"use client"

import React, { useState, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPrescriptionBottleAlt,
  faFileMedical,
  faExclamationTriangle,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons"

export default function MedScanUploadPage() {
  const [fileInfo, setFileInfo] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [analysisResult, setAnalysisResult] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)

  const handleFile = (file: File) => {
    const validTypes = ["image/jpeg", "image/png", "application/pdf"]
    if (!validTypes.includes(file.type)) {
      alert("Please upload a JPEG, PNG, or PDF file.")
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB.")
      return
    }

    setFileInfo(`File: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`)
    setAnalysisResult(null) // Reset old result

    if (file.type.includes("image")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreviewUrl("https://cdn-icons-png.flaticon.com/512/337/337946.png")
    }

    simulateUpload()
  }

  const simulateUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)
    let progress = 0
    progressRef.current = setInterval(() => {
      progress += Math.random() * 10
      if (progress >= 100) {
        progress = 100
        setIsUploading(false)
        if (progressRef.current) clearInterval(progressRef.current)
      }
      setUploadProgress(progress)
    }, 200)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0) handleFile(files[0])
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleAnalysis = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setAnalysisResult(
        `📋 AI Analysis Report:

🧪 Test: Complete Blood Count (CBC)
- Hemoglobin: 13.2 g/dL (Normal)
- WBC Count: 9,000 /µL (Normal)
- Platelets: 1.6 Lacs /µL (Slightly Low)

💊 Prescription:
- Tab. Paracetamol 500mg — 1 Tablet twice daily after meals
- Tab. Omeprazole 20mg — 1 Tablet before breakfast

⚠️ Note: Avoid taking on an empty stomach. Maintain hydration. Follow-up after 3 days.`
      )
      setIsAnalyzing(false)
    }, 1500)
  }

  const features = [
    {
      icon: faPrescriptionBottleAlt,
      title: "Prescription Analysis",
      text: "Automatically extracts medicines, dosage, frequency, and duration from prescriptions with high accuracy.",
    },
    {
      icon: faFileMedical,
      title: "Report Summarization",
      text: "Transforms complex medical reports into easy-to-understand summaries highlighting key findings.",
    },
    {
      icon: faExclamationTriangle,
      title: "Drug Interactions",
      text: "Identifies potential dangerous interactions between medications and provides safety warnings.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-teal-700 mb-4">MedScan AI</h1>
          <p className="text-lg text-gray-600">
            Advanced medical prescription and report analysis that extracts key information,
            <br />
            provides simplified summaries, and alerts for potential drug interactions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {features.map((f, i) => (
            <Card key={i} className="text-center shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="mb-4 text-2xl text-teal-700">
                  <FontAwesomeIcon icon={f.icon} className="bg-teal-50 p-4 rounded-full" />
                </div>
                <h3 className="text-lg font-semibold text-teal-700 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto bg-teal-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-center text-teal-700 mb-2">Try MedScan AI</h2>
            <p className="text-center text-gray-600 mb-6">
              Upload a prescription or medical report to see how MedScan AI can help.
            </p>

            <div
              className="border-2 border-dashed border-teal-600 rounded-lg p-8 bg-teal-50 text-center cursor-pointer"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="text-4xl text-teal-600 mb-3">
                <FontAwesomeIcon icon={faCloudUploadAlt} />
              </div>
              <h4 className="text-lg font-semibold text-teal-700">Drag & Drop your file here</h4>
              <p className="text-sm text-gray-500">or click to browse files (JPEG, PNG, PDF)</p>
              <input
                type="file"
                ref={fileInputRef}
                accept=".jpeg,.jpg,.png,.pdf"
                onChange={(e) => e.target.files && handleFile(e.target.files[0])}
                className="hidden"
              />
            </div>

            {previewUrl && (
              <div className="mt-6 text-center">
                <img src={previewUrl} alt="Preview" className="mx-auto max-h-48 rounded mb-2" />
                {fileInfo && <p className="text-sm text-gray-600">{fileInfo}</p>}
                <Button
                  className="mt-4 bg-teal-600 hover:bg-teal-700"
                  onClick={handleAnalysis}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Document"}
                </Button>
              </div>
            )}

            {isUploading && (
              <div className="mt-6">
                <div className="w-full h-2 bg-teal-100 rounded">
                  <div className="h-full bg-teal-600 rounded" style={{ width: `${uploadProgress}%` }} />
                </div>
              </div>
            )}

            {analysisResult && (
              <div className="mt-8 bg-white p-6 rounded shadow text-gray-700">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">🧠 AI Analysis Result</h3>
                <pre className="whitespace-pre-wrap">{analysisResult}</pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
