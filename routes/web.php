<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');*/



Route::get('/', function () {
    return view('frontend.pages.home');
})->name('home');
Route::get('/about', function () {
    return view('frontend.pages.about');
})->name('about');
Route::get('/post/{id}', function () {
    return view('frontend.pages.post');
})->name('aPost');


