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
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $success['user'] = $user->name;
            $success['token'] = $user->createToken('MyApp')->accessToken;
            return response()
            ->json(
                ['success' => $success],
                $this->successStatus
            );
        } else {
            return response()->json(['error'=>'Unauthorised'], 401);
        };
    }

    public function logout() {
        Auth::logout();
        return response()
        ->json([
            'logout' => true
        ]);
    }
}
