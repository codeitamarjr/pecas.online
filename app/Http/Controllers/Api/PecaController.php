<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePecasRequest;
use App\Http\Requests\UpdatePecasRequest;
use App\Http\Resources\PecaResource;
use App\Models\Peca;

class PecaController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return PecaResource::collection(
            Peca::query()
                ->where('user_id', auth()->user()->id)
                ->orderBy('id', 'asc')
                ->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param StorePecasRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePecasRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = auth()->user()->id;
        $peca = Peca::create($data);
        return response(new PecaResource($peca), 201);
    }

    /**
     * Display the specified resource.
     * @param Peca $pecas
     * @return PecaResource
     */
    public function show(Peca $peca)
    {
        return new PecaResource($peca);
    }

    /**
     * Update the specified resource in storage.
     * @param UpdatePecasRequest $request
     * @param Peca $peca
     * @return PecaResource
     */
    public function update(UpdatePecasRequest $request, Peca $peca)
    {
        $data = $request->validated();
        // Check if the user is authorized to update the resource
        if ($peca->user_id !== auth()->user()->id) {
            return response(['message' => 'Unauthorized'], 403);
        }
        $peca->update($data);

        return new PecaResource($peca);
    }

    /**
     * Remove the specified resource from storage.
     * @param Peca $peca
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Peca $peca)
    {
        if ($peca->user_id !== auth()->user()->id) {
            return response([
                'id'    => $peca->id,
                'message' => 'Unauthorized'
            ], 403);
        }
        $peca->delete();
        return response(null, 204);
    }
}
