<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AdminStaffController;
use App\Http\Controllers\AdminCustomerController;
use App\Http\Controllers\AppointmentsController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\AdminMessageController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\CheckInController;

use App\Http\Controllers\API\AuthController;




Route::post('loginStaff', [AdminCustomerController::class, 'login']);
Route::resource('adminStaff', AdminStaffController::class);
Route::post('loginCustomer', [AdminCustomerController::class, 'login']);
Route::resource('adminCustomer', AdminCustomerController::class);
Route::resource('service', ServiceController::class);
Route::resource('adminMessage', AdminMessageController::class);
Route::resource('appointments', AppointmentsController::class);
Route::resource('attendance', AttendanceController::class);
Route::resource('check_in', CheckInController::class);


//Route::post('adminCustomer', AdminCustomerController::class,'login');
// Route::post('/register',[AdminCustomerController::class,'register']); // Singup URL 
// Route::post('/reactlogin',[AdminCustomerController::class,'login']); //Login URL



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
