<?php

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

Broadcast::channel('notifications', function ($user) {
    Log::info(['user'=>$user,$id]);
    Log::info('An informational message.');
    $u = App\Models\User::find($id);
	if($u->id==$id) {
		return true;
	} else {
		return false;
	}
    return true;
});