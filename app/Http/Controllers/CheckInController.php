<?php

namespace App\Http\Controllers;

use App\Models\CheckIn;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class CheckInController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CheckIn::select('id', 'name', 'check_in')->get();
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

        $checkIn = new CheckIn;
        $checkIn->name= $request->input('name');
        $checkIn->check_in= $request->input('check_in');
        $checkIn->save();
        return $checkIn;

        //$password = Hash::make($request->input('password'));



        return response()->json(['message'=> 'successful', 
        'CheckIn' => $checkIn]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CheckIn  $checkIn
     * @return \Illuminate\Http\Response
     */
    public function show(CheckIn $checkIn)
    {
        return response()->json([
            'CheckIn'=>$checkIn
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CheckIn  $checkIn
     * @return \Illuminate\Http\Response
     */
    public function edit(CheckIn $checkIn)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CheckIn  $checkIn
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CheckIn $checkIn)
    {
        $request->validate([
            'name'=>'required',
            'check_in'=>'required',
        ]);

        $checkIn-> name = $request->name();
        $checkIn-> check_in = $request->checkIn();
        $checkIn->save();

        return response()->json([
            'message' => 'Successfully updated!',
            'CheckIn' => $checkIn
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CheckIn  $checkIn
     * @return \Illuminate\Http\Response
     */

    public function destroy(CheckIn $checkIn)
    {
        $checkIn->delete();
        return response()->json([
            'message' => 'Check In deleted'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CheckIn  $checkIn
     * @return \Illuminate\Http\Response
     */
    
}
