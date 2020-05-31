<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'Auth\AuthController@login');
Route::post('/logout', 'Auth\AuthController@logout');

Route::group(['middleware' => 'auth:api'], function(){
    Route::post('/team/create', 'TeamController@store');
    Route::post('/player/create', 'PlayerController@store');
    Route::get('/player/edit/{id}', 'PlayerController@edit');
    Route::post('/player/update/{id}', 'PlayerController@update');
    Route::get('/teams', 'TeamController@index');
    Route::get('/team-players/{id}', 'TeamController@showTeamPlayers');
});
