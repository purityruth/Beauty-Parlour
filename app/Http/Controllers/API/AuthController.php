<?php

namespace App\Http\Controllers\API;

use App\Models\Staff;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request; 

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fullname'=>'required|max:191',
            'email'=>'required|email|max:191|unique:users,email',
            'username'=>'required',
            'gender'=>'required',
            'age'=>'required|max:2',
            'phoneno'=>'required|min:10',
            'password'=>'required|min:8',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'validator_errors'=>$validator->messages()
            ]);
        }
        else
        {
            $user = Staff::create([
                'fullname'=>$request->fullname,
                'email'=>$request->email,
                'username'=>$request->username,
                'gender'=>$request->gender,
                'age'=>$request->age,
                'phoneno'=>$request->phoneno,
                'password'=>Hash::make($request->password),
            ]);

            $user->createToken($user->email.'_Token')->plainTextToken;

            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token,
                'message'=>'Registered Successfully',
            ]);
        }
    }
}
