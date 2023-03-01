<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Attendance::select('id', 'name', 'arrival', 'departure')->get();
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

        $attendance = new attendance;
        $attendance->name= $request->input('name');
        $attendance->arrival= $request->input('arrival');
        $attendance->departure= $request->input('departure');
        $attendance->save();
        return $attendance;

        //$password = Hash::make($request->input('password'));



        return response()->json(['message'=> 'successful', 
        'Attendance' => $attendance]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function show(Attendance $attendance)
    {
        return response()->json([
            'Attendance'=>$attendance
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function edit(attendance $attendance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, attendance $attendance)
    {
        $request->validate([
            'name'=>'required',
            'arrival'=>'required',
            'departure'=>'required',
        ]);

        $attendance-> name = $request->name();
        $attendance-> arrival = $request->arrival();
        $attendance-> departure = $request->departure();
        $attendance->save();

        return response()->json([
            'message' => 'Successfully updated!',
            'Attendance' => $attendance
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\attendance  $attendance
     * @return \Illuminate\Http\Response
     */

    public function destroy(Attendance $attendance)
    {
        $attendance->delete();
        return response()->json([
            'message' => 'Attendance deleted'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    
}
