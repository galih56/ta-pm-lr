
namespace App\Helpers;
use Request;
use App\Models\ActivityLog as ActivityLogModel;


class LogActivity
{


    public static function addToLog($activity)
    {
    	$log = [];
    	$log['description'] = $activity['description'];
    	$log['url'] = Request::fullUrl();
    	$log['method'] = Request::method();
    	$log['ip'] = Request::ip();
    	$log['agent'] = Request::header('user-agent');
    	$log['user_id'] = auth('sanctum')->user() ? auth()->user()->id : 1;
    	ActivityLogModel::create($log);
    }


    public static function logActivityLists()
    {
    	return ActivityLogModel::latest()->get();
    }


}