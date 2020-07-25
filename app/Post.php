<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
	// public $primaryKey  = 'id';
    protected $fillable = ['title', 'body'];

	// function getIdAttribute()
	// {
	// 	return encrypt($this->attributes['id']);
	// }

	// function setId_Attribute($val)
	// {
	// 	$this->attributes['id_'] = encrypt($this->attributes['id']);
	// }
}
