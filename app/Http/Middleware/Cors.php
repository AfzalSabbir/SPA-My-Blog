<?php
namespace App\Http\Middleware;
use Closure;
class Cors
{
  public function handle($request, Closure $next)
  {
    header('Access-Control-Allow-Origin, *');
    header('Access-Control-Allow-Methods, GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers, Origin, Content-Type, X-Auth-Token, Authorization');
    return $next($request);
  }
}