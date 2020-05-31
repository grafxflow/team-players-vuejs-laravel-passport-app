<?php

namespace App\Http\Controllers;

use App\Team;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TeamController extends Controller
{

    public function index()
    {
        $teams = Team::all();
        return $teams;
    }

    public function showTeamPlayers($id)
    {
        $teamPlayers = Team::with('players')->where('id', $id)->first();
        return response()->json($teamPlayers);
        return $teamPlayers;
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string'
        ], [],
        [
            'fname' => 'Name'
        ]);

        $team = new Team();
        $team->name = $request->name;
        $team->save();

        return response()->json(null, 200);
    }

    public function show($id)
    {
        $team = Team::find($id);
        $team->players->sortBy('last_name');
    }

    public function edit($id)
    {
        $team = Team::find($id);
        return response()->json($team);
    }
}
