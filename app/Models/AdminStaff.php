<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminStaff extends Model
{
    use HasFactory;

    protected $fillable = ['firstname', 'lastname', 'email', 'phoneno', 'description', 'image', 'password'];
}
