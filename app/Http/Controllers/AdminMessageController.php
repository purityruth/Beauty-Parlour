<?php

namespace App\Http\Controllers;

use App\Models\AdminMessage;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class AdminMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AdminMessage::select('id', 'name', 'email', 'subject', 'description')->get();
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

        $adminMessage = new AdminMessage;
        $adminMessage->name= $request->input('name');
        $adminMessage->email= $request->input('email');
        $adminMessage->subject= $request->input('subject');
        $adminMessage->description= $request->input('description');
        $adminMessage->save();
        return $adminMessage;


        return response()->json(['message'=> 'AdminMessage added successfully', 
        'AdminMessage' => $adminMessage]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AdminMessage  $adminMessage
     * @return \Illuminate\Http\Response
     */
    public function show(AdminMessage $adminMessage)
    {
        return response()->json([
            'AdminMessage'=>$adminMessage
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AdminMessage  $adminMessage
     * @return \Illuminate\Http\Response
     */
    public function edit(AdminMessage $adminMessage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AdminMessage  $adminMessage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AdminMessage $adminMessage)
    {
        $request->validate([
            'name'=>'required',
            'email'=>'required',
            'subject'=>'required',
            'description'=>'required',
        ]);

       
        $adminMessage->save();

        return response()->json([
            'message' => 'Successfully updated!',
            'AdminMessage' => $adminMessage
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AdminMessage  $adminMessage
     * @return \Illuminate\Http\Response
     */

    public function destroy(AdminMessage $adminMessage)
    {
        $adminMessage->delete();
        return response()->json([
            'message' => 'AdminMessage deleted'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AdminMessage  $adminMessage
     * @return \Illuminate\Http\Response
     */
    
}


