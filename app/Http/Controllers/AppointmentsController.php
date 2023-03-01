<?php

namespace App\Http\Controllers;

use App\Models\Appointments;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class AppointmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Appointments::select('id', 'name', 'phoneno', 'email', 'date', 'service', 'expert')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'name'=>'required',
            'phoneno'=>'required',
            'email'=>'required',
            'date'=>'required',
            'service'=>'required',
            'expert'=>'required',
        ]);

        
        $appointment= Appointments::create($request->all());
        return response()->json(['message'=> 'Appointment Booked Successfully, Thank you for Booking with us!', 
        'Appointments' => $appointment]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Appointments  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointments $appointment)
    {
        return response()->json([
            'Appointments'=>$appointment
        ]);
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Appointments  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointments $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Appointments  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointments $appointment)
    {
        $request->validate([
            'name'=>'required',
            'phoneno'=>'required',
            'email'=>'required',
            'date'=>'required',
            'service'=>'required',
            'expert'=>'required',
        ]);

       
        $appointment->save();

        return response()->json([
            'message' => 'Successfully updated!',
            'Appointments' => $appointment
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointments  $appointment
     * @return \Illuminate\Http\Response
     */

    public function destroy(Appointments $appointment)
    {
        $appointment->delete();
        return response()->json([
            'message' => 'Appointment deleted, Give us your feedback'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointments  $appointment
     * @return \Illuminate\Http\Response
     */
    
}




