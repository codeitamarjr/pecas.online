<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PecaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')
    ->prefix("v1")
    ->group(function () {
        Route::get("/user", function (Request $request) {
            return $request->user();
        });
        Route::post("/logout", [AuthController::class, 'logout']);
        Route::apiResource('/pecas', PecaController::class);
        Route::apiResource('/parts', PecaController::class);
    });

/**
 * Auth routes using prefix v1
 */
Route::prefix("v1")->group(function () {
    Route::post("/login", [AuthController::class, 'login']);
    Route::post("/register", [AuthController::class, 'register']);
});
