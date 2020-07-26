<?php

use Illuminate\Support\Facades\Route;

Route::get( '/{path?}', function(){
    	return view( 'frontend.pages.home' );
	})->where('path', '.*');


