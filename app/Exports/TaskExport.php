<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
use Carbon\Carbon;

class TaskExport implements FromCollection, WithHeadings, WithTitle
{
    use Exportable;
    protected $project;

    function __construct($project) {
        $this->project = $project;
    }

    public function headings(): array
    {
        return [
            'id', 'title', 'lists_id', 'start', 'end', 'days',
            'actual_start', 'actual_end', 'work_days', 'description',  
            'parent_task_id', 'is_subtask', 'mode'
        ];
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $project=$this->project;
        $tasks=[];
        for ($i=0; $i < count($project['columns']); $i++) { 
            $column=$project['columns'][$i];
            for ($j=0; $j < count($column['cards']); $j++) { 
                $task=$column['cards'][$j];
                if($task['start']) $task['start']=Carbon::parse($task['start'])->isoformat('DD-MM-YYYY');
                if($task['end']) $task['end']=Carbon::parse($task['end'])->isoformat('DD-MM-YYYY');
                if($task['actual_start']) $task['actual_start']=Carbon::parse($task['actual_start'])->isoformat('DD-MM-YYYY');
                if($task['actual_end']) $task['actual_end']=Carbon::parse($task['actual_end'])->isoformat('DD-MM-YYYY');
                $tasks[]=$task; 
                for ($k=0; $k < count($task['cards']); $k++) { 
                    $subtask=$task['cards'][$k];
                    if($subtask['start']) $subtask['start']=Carbon::parse($subtask['start'])->isoformat('DD-MM-YYYY');
                    if($subtask['end']) $subtask['end']=Carbon::parse($subtask['end'])->isoformat('DD-MM-YYYY');
                    if($subtask['actual_start']) $subtask['actual_start']=Carbon::parse($subtask['actual_start'])->isoformat('DD-MM-YYYY');
                    if($subtask['actual_end']) $subtask['actual_end']=Carbon::parse($subtask['actual_end'])->isoformat('DD-MM-YYYY');
                    $subtasks[]=$subtask;

                }
            }
        }
        return collect($tasks);
    }
    
    public function title(): string
    {
        return 'tasks';
    }
}
