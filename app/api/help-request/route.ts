import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'email', 'petName', 'animalType', 'currentSituation']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Transform the form data to match database columns
    const helpRequest = {
      name: body.name,
      email: body.email,
      phone: body.phone || null,
      preferred_contact: body.preferredContact || null,
      pet_name: body.petName,
      animal_type: body.animalType,
      breed: body.breed || null,
      age: body.age || null,
      weight: body.weight || null,
      current_situation: body.currentSituation,
      issue_start_date: body.issueStartDate || null,
      seen_by_vet: body.seenByVet === 'yes',
      vet_diagnosis: body.vetDiagnosis || null,
      vet_clinic_name: body.vetClinicName || null,
      has_cost_estimate: body.hasCostEstimate === 'yes',
      estimated_cost: body.estimatedCost ? parseFloat(body.estimatedCost) : null,
      can_cover_partial: body.canCoverPartial === 'yes',
      assistance_type: body.assistanceType || [],
      financial_situation: body.financialSituation || null,
      status: 'pending'
    }

    const { data, error } = await supabase
      .from('help_requests')
      .insert(helpRequest)
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit request. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Your request has been submitted. We will be in touch soon.',
      id: data.id 
    })

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
