<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class AuthController extends Controller
{

    public $successStatus = 200;

    public function login(Request $request) {

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $status = 200;
            $user = Auth::user();
            $response = [
                'user' => $user->name,
                'token' => $user->createToken('RockyForoutanApp')->accessToken
            ];
        };

        return response()->json($response, $status);

    }

    public function logout() {
        Auth::logout();
        return response()
        ->json([
            'logout' => true
        ]);
    }
}
