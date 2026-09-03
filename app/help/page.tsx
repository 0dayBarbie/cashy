"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, AlertTriangle, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function HelpRequestPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)])
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    
    // Get checkbox values for assistance type
    const assistanceType: string[] = []
    if (formData.get('assist-emergency')) assistanceType.push('emergency')
    if (formData.get('assist-insurance')) assistanceType.push('insurance')
    if (formData.get('assist-both')) assistanceType.push('both')

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      preferredContact: formData.get('preferredContact'),
      petName: formData.get('petName'),
      animalType: formData.get('animalType'),
      breed: formData.get('breed'),
      age: formData.get('age'),
      weight: formData.get('weight'),
      currentSituation: formData.get('situation'),
      issueStartDate: formData.get('issueStart'),
      seenByVet: formData.get('seenByVet'),
      vetDiagnosis: formData.get('diagnosis'),
      vetClinicName: formData.get('vetClinic'),
      hasCostEstimate: formData.get('estimatedCost') ? 'yes' : 'no',
      estimatedCost: formData.get('estimatedCost')?.toString().replace(/[^0-9.]/g, ''),
      canCoverPartial: formData.get('canCoverCost'),
      assistanceType,
      financialSituation: formData.get('financialSituation'),
    }

    try {
      const response = await fetch('/api/help-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit request')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-8 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0d05a041-5319-42c5-8ab1-ec7cf7a45fdf.jpeg"
              alt="Cashy's Legacy"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Request Received
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Thank you for reaching out. We&apos;ve received your request and will contact you 
            within 24-48 hours. Your pet matters to us.
          </p>
          <Link href="/">
            <Button size="lg" className="min-h-[48px]">
              Return Home
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0d05a041-5319-42c5-8ab1-ec7cf7a45fdf.jpeg"
              alt="Cashy's Legacy"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-serif font-bold text-foreground">Pet Help Request</span>
          </div>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="bg-destructive/10 border-b border-destructive/20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <p className="text-sm text-destructive">
            <strong>If your pet is in immediate, life-threatening condition,</strong> please go to 
            the nearest emergency veterinary clinic now. This form is for non-emergency assistance requests.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
            Request Assistance
          </h1>
          <p className="text-muted-foreground">
            No judgment, just support. Fill out this form and we&apos;ll be in touch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {error && (
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-destructive text-sm">
              {error}
            </div>
          )}
          {/* Section 1: Contact Information */}
          <section>
            <h2 className="font-semibold text-lg text-foreground mb-4 pb-2 border-b border-border">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" required className="mt-1.5 min-h-[48px]" />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required className="mt-1.5 min-h-[48px]" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" required className="mt-1.5 min-h-[48px]" />
              </div>
              <div>
                <Label>Preferred Method of Contact *</Label>
                <RadioGroup defaultValue="email" name="preferredContact" className="mt-2 space-y-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="phone" id="contact-phone" />
                    <Label htmlFor="contact-phone" className="font-normal cursor-pointer">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="email" id="contact-email" />
                    <Label htmlFor="contact-email" className="font-normal cursor-pointer">Email</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="text" id="contact-text" />
                    <Label htmlFor="contact-text" className="font-normal cursor-pointer">Text</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </section>

          {/* Section 2: Pet Information */}
          <section>
            <h2 className="font-semibold text-lg text-foreground mb-4 pb-2 border-b border-border">
              Pet Information
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="petName">Pet&apos;s Name *</Label>
                <Input id="petName" name="petName" required className="mt-1.5 min-h-[48px]" />
              </div>
              <div>
                <Label htmlFor="animalType">Type of Animal *</Label>
                <Select name="animalType" required>
                  <SelectTrigger className="mt-1.5 min-h-[48px]">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Dog</SelectItem>
                    <SelectItem value="cat">Cat</SelectItem>
                    <SelectItem value="bird">Bird</SelectItem>
                    <SelectItem value="rabbit">Rabbit</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="breed">Breed (if known)</Label>
                <Input id="breed" name="breed" className="mt-1.5 min-h-[48px]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" name="age" placeholder="e.g., 5 years" className="mt-1.5 min-h-[48px]" />
                </div>
                <div>
                  <Label htmlFor="weight">Weight</Label>
                  <Input id="weight" name="weight" placeholder="e.g., 12 lbs" className="mt-1.5 min-h-[48px]" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Emergency Details */}
          <section>
            <h2 className="font-semibold text-lg text-foreground mb-4 pb-2 border-b border-border">
              Emergency Details
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="situation">What is currently happening with your pet? *</Label>
                <Textarea 
                  id="situation" 
                  name="situation" 
                  required 
                  rows={4}
                  className="mt-1.5 min-h-[100px]" 
                  placeholder="Please describe the situation..."
                />
              </div>
              <div>
                <Label htmlFor="issueStart">When did the issue start?</Label>
                <Input id="issueStart" name="issueStart" className="mt-1.5 min-h-[48px]" placeholder="e.g., 2 days ago" />
              </div>
              <div>
                <Label>Has your pet been seen by a veterinarian?</Label>
                <RadioGroup defaultValue="no" name="seenByVet" className="mt-2 space-y-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="yes" id="vet-yes" />
                    <Label htmlFor="vet-yes" className="font-normal cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="no" id="vet-no" />
                    <Label htmlFor="vet-no" className="font-normal cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="diagnosis">If yes, what was the diagnosis or recommendation?</Label>
                <Textarea 
                  id="diagnosis" 
                  name="diagnosis" 
                  rows={3}
                  className="mt-1.5" 
                />
              </div>
              <div>
                <Label htmlFor="vetClinic">Name of veterinary clinic (if applicable)</Label>
                <Input id="vetClinic" name="vetClinic" className="mt-1.5 min-h-[48px]" />
              </div>
              <div>
                <Label htmlFor="estimatedCost">Estimated treatment cost (if known)</Label>
                <Input 
                  id="estimatedCost" 
                  name="estimatedCost" 
                  className="mt-1.5 min-h-[48px]" 
                  placeholder="e.g., $500"
                />
              </div>
            </div>
          </section>

          {/* Section 4: Financial Information */}
          <section>
            <h2 className="font-semibold text-lg text-foreground mb-4 pb-2 border-b border-border">
              Financial Information
            </h2>
            <div className="space-y-4">
              <div>
                <Label>Are you currently able to cover any portion of the cost?</Label>
                <RadioGroup defaultValue="no" name="canCoverCost" className="mt-2 space-y-2">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="yes" id="cover-yes" />
                    <Label htmlFor="cover-yes" className="font-normal cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="partial" id="cover-partial" />
                    <Label htmlFor="cover-partial" className="font-normal cursor-pointer">Partially</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="no" id="cover-no" />
                    <Label htmlFor="cover-no" className="font-normal cursor-pointer">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label>What type of assistance are you interested in? *</Label>
                <div className="mt-2 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox id="assist-emergency" name="assist-emergency" value="emergency" />
                    <Label htmlFor="assist-emergency" className="font-normal cursor-pointer">
                      Emergency financial assistance
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="assist-insurance" name="assist-insurance" value="insurance" />
                    <Label htmlFor="assist-insurance" className="font-normal cursor-pointer">
                      Help obtaining pet insurance
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="assist-both" name="assist-both" value="both" />
                    <Label htmlFor="assist-both" className="font-normal cursor-pointer">
                      Both
                    </Label>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="financialSituation">Briefly describe your financial situation</Label>
                <Textarea 
                  id="financialSituation" 
                  name="financialSituation" 
                  rows={3}
                  className="mt-1.5" 
                  placeholder="This helps us understand how best to assist you..."
                />
              </div>
            </div>
          </section>

          {/* Section 5: Supporting Documentation */}
          <section>
            <h2 className="font-semibold text-lg text-foreground mb-4 pb-2 border-b border-border">
              Supporting Documentation
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Upload any relevant documents such as vet estimates, medical records, or photos.
            </p>
            <div className="space-y-4">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 hover:bg-muted/50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">PDF, PNG, JPG up to 10MB each</p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  multiple 
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                />
              </label>
              
              {files.length > 0 && (
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between bg-muted/50 rounded-lg px-4 py-3">
                      <span className="text-sm truncate flex-1 mr-4">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-muted-foreground hover:text-destructive transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          {/* Section 6: Consent */}
          <section>
            <h2 className="font-semibold text-lg text-foreground mb-4 pb-2 border-b border-border">
              Consent and Acknowledgement
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="consent-accurate" required className="mt-1" />
                <Label htmlFor="consent-accurate" className="font-normal cursor-pointer leading-relaxed">
                  I confirm that the information provided is accurate to the best of my knowledge. *
                </Label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="consent-noguarantee" required className="mt-1" />
                <Label htmlFor="consent-noguarantee" className="font-normal cursor-pointer leading-relaxed">
                  I understand that submitting this form does not guarantee assistance. *
                </Label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="consent-contact" required className="mt-1" />
                <Label htmlFor="consent-contact" className="font-normal cursor-pointer leading-relaxed">
                  I agree to be contacted regarding my request. *
                </Label>
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="pt-4">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full min-h-[52px] text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-4">
              We typically respond within 24-48 hours.
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}
