<?php

namespace App\Http\Controllers\front;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notification;
use App\Models\Project;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $notifs=Notification::with('notifiable');
        $counter=$notifs;
        
        if($request->has('projects_id')){
           $notifs=$notifs->whereHasMorph('notifiable',Project::class,function ($query) use($request) {
                $query->where('id',$request->projects_id);
            });
        }
        if($request->has('limit')){
            $notifs=$notifs->limit($request->limit);
        }
        $notifs=$notifs->get();
        
        $count=[
            'all'=>$counter->count(),
            'read'=>$counter->whereNotNull('read_at')->count(),
            'unread'=>$counter->whereNull('read_at')->count()
        ];
        $notifs=(object)[
            'data'=>$notifs,
            'count'=>$count
        ];
        return response()->json($notifs);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
