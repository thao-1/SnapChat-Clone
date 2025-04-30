"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Camera, X, Zap, Download, RefreshCw, Clock, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

interface CameraInterfaceProps {
  onPhotoCapture: (photo: string) => void
  onClose: () => void
}

export function CameraInterface({ onPhotoCapture, onClose }: CameraInterfaceProps) {
  const [cameraPermission, setCameraPermission] = useState<boolean | "loading">("loading")
  const [cameraFacing, setCameraFacing] = useState<"user" | "environment">("environment")
  const [flashOn, setFlashOn] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const isMobile = useMobile()

  // Request camera permission and setup video stream
  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: cameraFacing },
          audio: false,
        })

        if (videoRef.current) {
          videoRef.current.srcObject = stream
          streamRef.current = stream
          setCameraPermission(true)
        }
      } catch (err) {
        console.error("Error accessing camera:", err)
        setCameraPermission(false)
      }
    }

    if (cameraPermission === "loading") {
      setupCamera()
    }

    return () => {
      // Clean up the camera stream when component unmounts
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
    }
  }, [cameraFacing, cameraPermission])

  // Switch camera between front and back
  const switchCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
    }
    setCameraFacing(cameraFacing === "user" ? "environment" : "user")
    setCameraPermission("loading") // This will trigger the useEffect to setup the camera again
  }

  // Toggle flash
  const toggleFlash = () => {
    setFlashOn(!flashOn)
    // In a real implementation, you would control the device flash here
  }

  // Capture photo
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")

      if (context) {
        // Set canvas dimensions to match video
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        // Draw the current video frame to the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Convert canvas to data URL
        const imageDataUrl = canvas.toDataURL("image/png")
        setCapturedImage(imageDataUrl)
      }
    }
  }

  // Save captured photo
  const savePhoto = () => {
    if (capturedImage) {
      onPhotoCapture(capturedImage)
    }
  }

  // Retake photo
  const retakePhoto = () => {
    setCapturedImage(null)
  }

  // If camera permission is denied
  if (cameraPermission === false) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-purple-500 to-orange-500 flex flex-col items-center justify-center text-white p-4 z-50">
        <div className="bg-black/50 p-8 rounded-xl max-w-md text-center">
          <Camera className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Camera Access Required</h2>
          <p className="mb-6">
            Please allow camera access to use this feature. You can enable it in your browser settings.
          </p>
          <Button onClick={onClose} variant="outline" className="bg-white/20 text-white hover:bg-white/30">
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Camera View */}
      <div className="relative h-full w-full">
        {/* Video element for camera feed */}
        {!capturedImage && <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover" />}

        {/* Canvas for capturing photos (hidden) */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Display captured image */}
        {capturedImage && (
          <div className="absolute inset-0">
            <Image src={capturedImage || "/placeholder.svg"} alt="Captured photo" fill className="object-cover" />
          </div>
        )}

        {/* Overlay with controls */}
        <div className="absolute inset-0 flex flex-col">
          {/* Top controls */}
          <div className="flex justify-between items-center p-4">
            <Button variant="ghost" size="icon" className="text-white bg-black/20 rounded-full" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`text-white bg-black/20 rounded-full ${flashOn ? "bg-yellow-500/50" : ""}`}
              onClick={toggleFlash}
            >
              <Zap className="h-6 w-6" />
            </Button>
          </div>

          {/* Middle content - empty space or Bitmoji */}
          <div className="flex-grow relative">
            {/* Bitmoji silhouette on the right */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <div className="relative h-64 w-32">
                <div className="absolute inset-0 bg-black/20 rounded-full blur-md"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
                  <div className="w-24 h-36 relative">
                    <Image src="/images/bitmoji-silhouette.png" alt="Bitmoji" fill className="object-contain" />
                  </div>
                  <Button variant="ghost" className="text-white text-xs mt-2 flex flex-col items-center">
                    <Smile className="h-5 w-5 mb-1" />
                    <span>Create Bitmoji</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Center message when no image is captured */}
            {!capturedImage && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div className="bg-black/30 rounded-full p-8 mb-4">
                  <Camera className="h-12 w-12 mx-auto" />
                </div>
                <p>Click the Camera to send Snaps</p>
              </div>
            )}
          </div>

          {/* Bottom controls */}
          <div className="p-6">
            {!capturedImage ? (
              <div className="flex justify-center items-center space-x-8">
                <Button variant="ghost" size="icon" className="text-white">
                  <Clock className="h-6 w-6" />
                </Button>

                {/* Capture button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="w-16 h-16 rounded-full border-2 border-white"
                  onClick={capturePhoto}
                >
                  <span className="sr-only">Take photo</span>
                </Button>

                <Button variant="ghost" size="icon" className="text-white" onClick={switchCamera}>
                  <RefreshCw className="h-6 w-6" />
                </Button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <Button variant="ghost" className="text-white" onClick={retakePhoto}>
                  Retake
                </Button>

                <Button
                  variant="outline"
                  className="bg-yellow-400 text-black border-none hover:bg-yellow-500"
                  onClick={savePhoto}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
