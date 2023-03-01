<?php

namespace App\Http\Controllers;

use App\Models\AdminStaff;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use Carbon\Carbon;

class AdminStaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AdminStaff::select('id','firstname', 'lastname', 'email', 'phoneno', 'description', 'password')->get();
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

        $adminStaff = new AdminStaff;
        $adminStaff->firstname= $request->input('firstname');
        $adminStaff->lastname= $request->input('lastname');
        $adminStaff->email= $request->input('email');
        $adminStaff->phoneno= $request->input('phoneno');
        $adminStaff->description= $request->input('description');
        $adminStaff->image= $request->input('image');
        $adminStaff->password= $request->input('password');
        

        try{
            $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('adminStaff/image', $request->image,$imageName);
            AdminStaff::create($request->post()+['image'=>$imageName]);

            return response()->json([
                'message'=>'Staff Member added Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while adding staff!!'
            ],500);
        }
        $adminStaff->save();
        return $adminStaff;
    }




    public function login (Request $request)
    {
        $adminStaff= AdminStaff::where('email', $request->email)->first();
        if (!$adminStaff || Hash::check($request->password, $adminStaff->password))
        {
        
           // \Log::error($e->getMessage());
           // return response()->json(['message'=> 'Email or password not matched!', 'loginCustomer' => $adminCustomer,'login'=>'false']);
           
           return response()->json(['message'=> 'Log in Successful', 'loginStaff' => $adminStaff]);
            
        }
        else
        {
            return response()->json(['message'=> 'Log in Successful', 'loginStaff' => $adminStaff]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AdminStaff  $adminStaff
     * @return \Illuminate\Http\Response
     */
    public function show(AdminStaff $adminStaff)
    {
        return response()->json([
            'adminStaff'=>$adminStaff
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AdminStaff  $adminStaff
     * @return \Illuminate\Http\Response
     */
    public function edit(AdminStaff $adminStaff)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AdminStaff  $adminStaff
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AdminStaff $adminStaff)
    {
        $request->validate([
            'firstname'=>'required',
            'lastname'=>'required',
            'email'=>'required',
            'phoneno'=>'required',
            'description'=>'required',
            'password'=>'required',
            'image'=>'nullable', 
        ]);

        try{

            $adminStaff->fill($request->post())->update();

            if($request->hasFile('image')){

                // remove old image
                if($adminStaff->image){
                    $exists = Storage::disk('public')->exists("adminStaff/image/{$adminStaff->image}");
                    if($exists){
                        Storage::disk('public')->delete("adminStaff/image/{$adminStaff->image}");
                    }
                }

                $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('adminStaff/image', $request->image,$imageName);
                $adminStaff->image = $imageName;
                $adminStaff->save();
            }

            return response()->json([
                'message'=>'Staff Member Updated Successfully!!'
            ]);

        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while updating a staff member!!'
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AdminStaff  $adminStaff
     * @return \Illuminate\Http\Response
     */

    public function destroy(AdminStaff $adminStaff)
    {
        try {

            if($adminStaff->image){
                $exists = Storage::disk('public')->exists("adminStaff/image/{$adminStaff->image}");
                if($exists){
                    Storage::disk('public')->delete("adminStaff/image/{$adminStaff->image}");
                }
            }

            $adminStaff->delete();

            return response()->json([
                'message'=>'Staff Member Deleted Successfully!!'
            ]);
            
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while deleting a member of staff!!'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AdminStaff  $adminStaff
     * @return \Illuminate\Http\Response
     */
    
}
