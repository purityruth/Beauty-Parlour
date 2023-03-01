<?php

namespace App\Http\Controllers;

use App\Models\AdminCustomer;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class AdminCustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AdminCustomer::select('id', 'firstname', 'lastname', 'username', 'email', 'gender', 'age', 'phoneno', 'password')->get();
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

        $adminCustomer = new AdminCustomer;
        $adminCustomer->firstname= $request->input('firstname');
        $adminCustomer->lastname= $request->input('lastname');
        $adminCustomer->username= $request->input('username');
        $adminCustomer->email= $request->input('email');
        $adminCustomer->gender= $request->input('gender');
        $adminCustomer->age= $request->input('age');
        $adminCustomer->phoneno= $request->input('phoneno');
        $adminCustomer->password= Hash::make($request->input('password'));

        $adminCustomer->save();
        return $adminCustomer;

        return response()->json(['message'=> 'Customer added successfully', 
        'AdminCustomer' => $adminCustomer]);

        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AdminCustomer  $adminCustomer
     * @return \Illuminate\Http\Response
     */
    public function show(AdminCustomer $adminCustomer)
    {
        return response()->json([
            'adminCustomer'=>$adminCustomer
        ]);
    }


    /**
     * 
     * Login to Customer Page
     */


    // public function login(Request $request)
    // {
    //     $request->validate([
    //         'email' => 'required',
    //         'password' => 'required',
    //     ]);
   
    //     $credentials = $request->only('email', 'password');
    //     if (!Auth::attempt($credentials)) {
    //         return response()->json(['message'=> 'Log in Successful']);
    //     }
  
    //     else 
    //     {
    //         return response()->json(['message'=> 'Log in details are not valid']);
    //     }
    // }
        
        
    


    public function login (Request $request)
    {
        $adminCustomer= AdminCustomer::where('email', $request->email)->first();
        if (!$adminCustomer || !Hash::check($request->password, $adminCustomer->password))
        {
        
           // \Log::error($e->getMessage());
           // return response()->json(['message'=> 'Email or password not matched!', 'loginCustomer' => $adminCustomer,'login'=>'false']);
           
           return response('Email or password not matched!');
            
        }
        else
        {
            return response()->json(['message'=> 'Log in Successful', 'loginCustomer' => $adminCustomer]);
        }
    }




    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AdminCustomer  $adminCustomer
     * @return \Illuminate\Http\Response
     */
    public function edit(AdminCustomer $adminCustomer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AdminCustomer  $adminCustomer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AdminCustomer $adminCustomer)
    {
        $request->validate([
            'firstname'=>'required',
            'lastname'=>'required',
            'username'=>'required',
            'email'=>'required',
            'gender'=>'required',
            'age'=>'required',
            'phoneno'=>'required',
            'password'=>'required',
        ]);

        $adminCustomer-> firstname = $request->firstname();
        $adminCustomer-> lastname = $request->lastname();
        $adminCustomer-> username = $request->username();
        $adminCustomer-> email = $request->email();
        $adminCustomer-> gender = $request->gender();
        $adminCustomer->age = $request->age();
        $adminCustomer-> phoneno = $request->phoneno();
        $adminCustomer->password = $request->password();
        $adminCustomer->save();

        return response()->json([
            'message' => 'Successfully updated!',
            'AdminCustomer' => $adminCustomer
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AdminCustomer  $adminCustomer
     * @return \Illuminate\Http\Response
     */

    public function destroy(AdminCustomer $adminCustomer)
    {
        $adminCustomer->delete();
        return response()->json([
            'message' => 'Customer deleted'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AdminCustomer  $adminCustomer
     * @return \Illuminate\Http\Response
     */
    
}






/*

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function store(Request $request)
    {
        $customer = new Customer;
        $customer->username = $request-> input('username');
        $customer->email = $request-> input('email');
        $customer->phoneno = $request-> input('phoneno');
        $customer->password = $request-> input('password');
        $customer->save();

        return response()->json([
            'status' => 200,
            'message' => 'Customer added successfully',
        ]);
    }
}
*/